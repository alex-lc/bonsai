import { Routes, Route } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import DashboardView from "./views/dashboard/DashboardView";
import PlantTreeView from "./views/trees/PlantTreeView";
import ForestView from "./views/dashboard/forest/ForestView";
import RegisterView from "./views/auth/RegisterView";
import LoginView from "./views/auth/LoginView";

import Protected from "./services/utils/Protected";

function App() {
  return (
    <Container className="bg-light w-100 h-100">
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Protected>
              <DashboardView />
            </Protected>
          }
        />
        <Route
          path="/dashboard/plant-tree"
          element={
            <Protected>
              <PlantTreeView />
            </Protected>
          }
        />
        <Route
          path="/dashboard/forest"
          element={
            <Protected>
              <ForestView />
            </Protected>
          }
        />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </Container>
  );
}

export default App;
