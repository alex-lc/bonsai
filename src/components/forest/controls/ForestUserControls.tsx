import styled from "styled-components";

import { Nav } from "react-bootstrap";

const ForestUserControls = () => {
  return (
    <ForestUserControlsContaier>
      <Nav variant="tabs" style={{ borderBottom: "none" }}>
        <Nav.Item>
          <Nav.Link href="/dashboard/plant-tree">Plant New Tree</Nav.Link>
        </Nav.Item>
      </Nav>
    </ForestUserControlsContaier>
  );
};

export default ForestUserControls;

const ForestUserControlsContaier = styled.div`
  width: 100%;
  margin: 0;
`;
