import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Profile } from "../pages/Profile";
import { Payment } from "../pages/Payment";
import { Favorite } from "../pages/Favorite";
import { PlateView } from "../pages/PlateView";
import { Routes, Route } from "react-router-dom";
import { OrderHistory } from "../pages/OrderHistory";
import { ConfirmPayment } from "../pages/ConfirmPayment";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plateview/:id" element={<PlateView />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/payment/qrcode/:id" element={<ConfirmPayment />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
