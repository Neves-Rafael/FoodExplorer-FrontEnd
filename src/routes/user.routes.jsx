import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { PlateView } from "../pages/PlateView";
import { Payment } from "../pages/Payment";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plateview/:id" element={<PlateView />} />
      <Route path="/payment" element={<Payment />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
