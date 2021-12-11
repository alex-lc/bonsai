import Container from "react-bootstrap/Container";

// components
import DashNav from "../../components/menus/DashNav";
import Logo from "../../components/header/Logo";

const DashboardView = () => {
  return (
    <Container className="w-100 d-flex main-container">
      <Container className="w-25 bg-light">
        <Logo />
        <DashNav />
      </Container>
      <Container className="w-75 bg-secondary">side 2</Container>
    </Container>
  );
};

export default DashboardView;
