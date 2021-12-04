import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import DashboardView from "./views/dashboard/DashboardView";

// bootstrap
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="bg-light w-100 h-100">
      <Routes>
        <Route path="/dashboard" element={<DashboardView />} />
      </Routes>
    </Container>
  );
}

export default App;
