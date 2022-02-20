import React from "react";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
// bootstrap
import { Nav, Dropdown, Container } from "react-bootstrap";
import axios from "axios";

const UserPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [userId, setUserId] = React.useState<number | null>();
  const [user, setUser] = React.useState<any>();

  const getUserDetails = () => {
    if (localStorage.getItem("id")) {
      const uid = localStorage.getItem("id");
      setUserId(Number(uid));
      axios
        .get(`${process.env.REACT_APP_API}/user/${userId}`)
        .then((res) => {
          setUser(res.data);
          setIsAuthenticated(true);
        })
        .catch((e) => console.error(e));
    }
  };

  const { data, isLoading, error } = useQuery("getUserDetails", getUserDetails);

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && user) {
    return (
      <Container fluid className="d-flex justify-content-end mb-5">
        <Dropdown as={Nav.Item}>
          <Dropdown.Toggle as={Nav.Link}>{user.username}</Dropdown.Toggle>
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
