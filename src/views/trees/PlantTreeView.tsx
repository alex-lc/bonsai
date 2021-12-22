import React from "react";
// bootstrap
import { Container, Row, Col } from "react-bootstrap";

// components
import DashNav from "../../components/menus/DashNav";
import Logo from "../../components/header/Logo";
import CreateNewTree from "../../components/forest/CreateNewTree";
import UserPanel from "../../components/menus/user/UserPanel";

const PlantTreeView = () => {
  return (
    <Container className="w-100 d-flex-col main-container">
      <Row>
        <UserPanel />
      </Row>
      <Row>
        <Container className="w-25 bg-light">
          <Logo />
          <DashNav />
        </Container>
        <Container className="w-75 bg-secondary">
          <CreateNewTree />
        </Container>
      </Row>
    </Container>
  );
};

export default PlantTreeView;
