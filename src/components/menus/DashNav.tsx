import Nav from "react-bootstrap/Nav";

const DashNav = () => {
  const unauthenticated = false;

  if (unauthenticated) {
    return (
      <>
        <Nav className="flex-sm-column w-100 nav-menu">
          <Nav.Link href="/register">Sign Up</Nav.Link>
          <Nav.Link href="/about">What is Bonsai?</Nav.Link>
        </Nav>
      </>
    );
  }

  return (
    <>
      <Nav className="flex-sm-column w-100">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/dashboard/forest">Your Forest</Nav.Link>
        <Nav.Link href="/dashboard/plant-tree">Plant a Tree</Nav.Link>
      </Nav>
    </>
  );
};

export default DashNav;
