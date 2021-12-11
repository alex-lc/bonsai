import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";

// components
import DashNav from "../../components/menus/DashNav";
import Logo from "../../components/header/Logo";
// views
import MainContentView from "./MainContentView";
import CreateNewTree from "../../components/forest/CreateNewTree";

const DashboardView = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Location: ", location);
  }, []);

  return (
    <Container className="w-100 d-flex main-container">
      <Container className="w-25 bg-light">
        <Logo />
        <DashNav />
      </Container>
      <Container className="w-75 bg-secondary">
        <p>main content</p>
      </Container>
    </Container>
  );
};

export default DashboardView;
