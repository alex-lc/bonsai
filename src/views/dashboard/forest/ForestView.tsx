import React from "react";
// bootstrap
import Container from "react-bootstrap/Container";

// components
import DashNav from "../../../components/menus/DashNav";
import Logo from "../../../components/header/Logo";
import ForestList from "../../../components/forest/ForestList";

const ForestView = () => {
  return (
    <Container className="w-100 d-flex main-container">
      <Container className="w-25 bg-light">
        <Logo />
        <DashNav />
      </Container>
      <Container className="w-75">
        <ForestList />
      </Container>
    </Container>
  );
};

export default ForestView;
