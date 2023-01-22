import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import DetailPage from "../pages/DetailPage";
import DashboardPage from "../pages/DashboardPage";
import EditPage from "../pages/EditPage";
import CreatePage from "../pages/CreatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/todos/:id" element={<DetailPage />} />
        <Route path="/todos/:id/edit" element={<EditPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
