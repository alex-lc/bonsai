// bootstrap
import { Container, Row } from "react-bootstrap";
// components
import UserPanel from "../../components/menus/user/UserPanel";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterView = () => {
  return (
    <Container className="w-100 d-flex-col main-container">
      <Row>
        <UserPanel />
      </Row>
      <Row>
        <Container className="w-25 bg-light">
          <p>benefits of registering or some other marketing</p>
        </Container>
        <Container className="w-75 bg-dark">
          <RegisterForm />
        </Container>
      </Row>
    </Container>
  );
};

export default RegisterView;
