import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import DashboardView from "./views/dashboard/DashboardView";

function App() {
  return (
    <div>
      <h1>bonsai</h1>

      <Routes>
        <Route path="/dashboard" element={<DashboardView />} />
      </Routes>
    </div>
  );
}

export default App;
