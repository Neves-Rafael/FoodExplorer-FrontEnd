import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { PlateView } from "../pages/PlateView";
import { NewPlate } from "../pages/NewPlate";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plateView" element={<PlateView />} />
      <Route path="/newPlate" element={<NewPlate />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
