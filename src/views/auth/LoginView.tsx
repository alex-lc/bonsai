// bootstrap
import { Container, Row } from "react-bootstrap";
// components
import UserPanel from "../../components/menus/user/UserPanel";
import LoginForm from "../../components/auth/LoginForm";

const LoginView = () => {
  return (
    <Container className="w-100 d-flex-col main-container">
      <Row>
        <UserPanel />
      </Row>
      <Row>
        <Container className="w-25 bg-light">
          <p>login details</p>
        </Container>
        <Container className="w-75 bg-dark">
          <LoginForm />
        </Container>
      </Row>
    </Container>
  );
};

export default LoginView;
