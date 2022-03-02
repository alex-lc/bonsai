import React from "react";
import { useQuery } from "react-query";
// services
import UserService from "../../../services/userService/UserService";
// react-router-dom
import { useNavigate } from "react-router-dom";
// bootstrap
import { Nav, Dropdown, Container, NavDropdown } from "react-bootstrap";

const UserPanel = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<{
    username: string | null;
    uid: number | null;
  }>({
    username: "",
    uid: null,
  });

  const getUserDetails = () => {
    if (localStorage.getItem("id")) {
      const uid = localStorage.getItem("id");
      const username = localStorage.getItem("username");
      setUser({
        ...user,
        uid: Number(uid),
        username,
      });
    }
  };

  const logout = () => {
    UserService.logout();
    navigate("/login");
  };

  const { data, isLoading, error } = useQuery("getUserDetails", getUserDetails);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error...</p>;
  }

  return (
    <Container fluid className="d-flex justify-content-end mb-5">
      <Dropdown as={Nav.Item}>
        <Dropdown.Toggle as={Nav.Link}>{user.username}</Dropdown.Toggle>
        <Dropdown.Menu>
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
          <NavDropdown.Item href="/help">Help</NavDropdown.Item>
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default UserPanel;
