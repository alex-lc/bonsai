import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import DashboardView from "./views/dashboard/DashboardView";

// bootstrap
import Container from "react-bootstrap/Container";
import PlantTreeView from "./views/trees/PlantTreeView";

function App() {
  return (
    <Container className="bg-light w-100 h-100">
      <Routes>
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/dashboard/plant-tree" element={<PlantTreeView />} />
      </Routes>
    </Container>
  );
}

export default App;
