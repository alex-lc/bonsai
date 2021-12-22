import React from "react";
// bootstrap
import Container from "react-bootstrap/Container";

// components
import DashNav from "../../components/menus/DashNav";
import Logo from "../../components/header/Logo";
// views
import DashStatistics from "../../components/dashboard/DashStatistics";

const DashboardView = () => {
  return (
    <Container
      className="w-100 d-flex main-container"
      style={{ padding: "10px" }}
    >
      <Container className="w-25 bg-light">
        <Logo />
        <DashNav />
      </Container>
      <Container className="w-75 bg-secondary">
        <DashStatistics />
      </Container>
    </Container>
  );
};

export default DashboardView;
