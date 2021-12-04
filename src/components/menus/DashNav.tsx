import Nav from "react-bootstrap/Nav";

const DashNav = () => {
  return (
    <>
      <Nav className="flex-sm-column w-100">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav>
    </>
  );
};

export default DashNav;
