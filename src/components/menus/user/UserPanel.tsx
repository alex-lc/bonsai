import React from "react";
// bootstrap
import { Nav, Dropdown, Container } from "react-bootstrap";

const UserPanel = () => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return (
      <Container fluid className="d-flex justify-content-end mb-5">
        <Dropdown as={Nav.Item}>
          <Dropdown.Toggle as={Nav.Link}>Alexander</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Nav.Link href="/settings">Settings</Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Nav.Link href="/help">Help</Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    );
  }

  return (
    <Container fluid className="d-flex justify-content-end mb-5">
      <p>Unauthenticated</p>
    </Container>
  );
};

export default UserPanel;
