import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from "../pages/teams";
import Drivers from "../pages/drivers";
import Schedule from "../pages/schedule";
import F1race from "../pages/f1-race";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Teams />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/schedule" element={<Schedule/>} />
      <Route path="/f1-race" element={<F1race />} />
    </Routes>
  );
}
