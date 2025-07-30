import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from "../pages/teams";
import Drivers from "../pages/drivers";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/drivers" element={<Drivers />} />
      </Routes>
    </BrowserRouter>
  );
}
