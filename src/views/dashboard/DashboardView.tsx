import Container from "react-bootstrap/Container";

const DashboardView = () => {
  return (
    <Container className="w-100 d-flex">
      <Container className="w-25 bg-primary">side 1</Container>
      <Container className="w-75 bg-secondary">side 2</Container>
    </Container>
  );
};

export default DashboardView;
