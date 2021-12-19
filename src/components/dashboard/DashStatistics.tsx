// bootstrap
import { Col, Container, Row } from "react-bootstrap";

const DashStatistics = () => {
  return (
    <Container className="dashboard-stats-row">
      <Row>
        <Col>
          <Container className="dashboard-stats-component">
            <Row>
              <h3>Longest Streak</h3>
              <p>24</p>
            </Row>
          </Container>
        </Col>
        <Col>Column 2</Col>
        <Col>Column 3</Col>
      </Row>
    </Container>
  );
};

export default DashStatistics;
