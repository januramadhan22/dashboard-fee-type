import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import DetailPage from "../pages/DetailPage";
import DashboardPage from "../pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/todos/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
