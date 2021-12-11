import React from "react";
// bootstrap
import Container from "react-bootstrap/Container";

// components
import DashNav from "../../components/menus/DashNav";
import Logo from "../../components/header/Logo";

const PlantTreeView = () => {
  return (
    <Container className="w-100 d-flex main-container">
      <Container className="w-25 bg-light">
        <Logo />
        <DashNav />
      </Container>
      <Container className="w-75 bg-secondary">
        <p>plant new tree main content section</p>
      </Container>
    </Container>
  );
};

export default PlantTreeView;
