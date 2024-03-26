import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { PlateView } from "../pages/PlateView";
import { Payment } from "../pages/Payment";
import { Cart } from "../pages/Cart";
import { ConfirmPayment } from "../pages/ConfirmPayment";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plateview/:id" element={<PlateView />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/payment/qrcode/:id" element={<ConfirmPayment/>} />
      <Route path="/cart" element={ <Cart/>}/>

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
