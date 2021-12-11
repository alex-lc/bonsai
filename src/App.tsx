import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import DashboardView from "./views/dashboard/DashboardView";

// bootstrap
import Container from "react-bootstrap/Container";
import PlantTreeView from "./views/trees/PlantTreeView";
import ForestView from "./views/dashboard/forest/ForestView";

function App() {
  return (
    <Container className="bg-light w-100 h-100">
      <Routes>
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/dashboard/plant-tree" element={<PlantTreeView />} />
        <Route path="/dashboard/forest" element={<ForestView />} />
      </Routes>
    </Container>
  );
}

export default App;
