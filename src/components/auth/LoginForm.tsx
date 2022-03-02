import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
// services
import AuthService from "../../services/authService/authService";

// bootstrap
import { FloatingLabel, Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { isLoading, mutate } = useMutation(AuthService.login, {
    onSuccess: (res) => {
      localStorage.setItem("token", res?.data.accessToken);
      localStorage.setItem("id", res?.data.id);
      localStorage.setItem("username", res?.data.username);
      navigate("/dashboard");
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

        <Button variant="success" type="submit" className="sm-margin-y">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
