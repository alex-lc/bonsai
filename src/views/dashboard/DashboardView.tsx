import React from "react";
// bootstrap
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

// components
import DashNav from "../../components/menus/DashNav";
import UserPanel from "../../components/menus/user/UserPanel";
import Logo from "../../components/header/Logo";
// views
import DashStatistics from "../../components/dashboard/DashStatistics";

const DashboardView = () => {
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
        <Container className="w-75">
          <DashStatistics />
        </Container>
      </Row>
    </Container>
  );
};

export default DashboardView;
