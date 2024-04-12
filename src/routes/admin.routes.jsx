import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Profile } from "../pages/Profile";
import { NewPlate } from "../pages/NewPlate";
import { EditPlate } from "../pages/EditPlate";
import { PlateView } from "../pages/PlateView";
import { OrderHistory } from "../pages/OrderHistory";
import { Routes, Route, Navigate } from "react-router-dom";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plateview/:id" element={<PlateView />} />
      <Route path="/newplate" element={<NewPlate />} />
      <Route path="/editplate/:id" element={<EditPlate />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
