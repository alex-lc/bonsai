import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
// services
import AuthService from "../../services/authService/authService";

// bootstrap
import { FloatingLabel, Form, Button, Modal } from "react-bootstrap";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { isLoading, mutate } = useMutation(AuthService.register, {
    onSuccess: (res) => {
      handleShow();
      setTimeout(() => {
        handleClose();
        navigate("/login");
      }, 2000);
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Form className="sm-margin-y" onSubmit={mutate}>
        <FloatingLabel
          controlId="username"
          label="Username"
          className="md-margin-bottom"
        >
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="password"
          label="Password"
          className="md-margin-bottom"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="email"
          label="Email"
          className="md-margin-bottom"
        >
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </FloatingLabel>

        <Button variant="success" type="submit" className="sm-margin-y">
          Signup
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>You successfully created your account.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterForm;
