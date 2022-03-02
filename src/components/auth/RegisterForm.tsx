import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
// services
import AuthService from "../../services/authService/authService";

// bootstrap
import { FloatingLabel, Form, Button, Alert } from "react-bootstrap";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [registerSuccess, setRegisterSuccess] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { isLoading, mutate } = useMutation(AuthService.register, {
    onSuccess: (res) => {
      console.log("User successfully registered.");
      setRegisterSuccess(true);
      navigate("/login");
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
        {registerSuccess && (
          <Alert variant="success">Successfully registered!</Alert>
        )}
      </Form>
    </>
  );
};

export default RegisterForm;
