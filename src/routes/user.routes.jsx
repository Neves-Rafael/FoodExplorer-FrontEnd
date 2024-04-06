import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { PlateView } from "../pages/PlateView";
import { Payment } from "../pages/Payment";
import { Cart } from "../pages/Cart";
import { ConfirmPayment } from "../pages/ConfirmPayment";
import { OrderHistory } from "../pages/OrderHistory";
import { Favorite } from "../pages/Favorite";
import { Profile } from "../pages/Profile";
import { About } from "../pages/About";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plateview/:id" element={<PlateView />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/payment/qrcode/:id" element={<ConfirmPayment />} />
      <Route path="/cart" element={ <Cart />}/>
      <Route path="/order-history" element={<OrderHistory />}/>
      <Route path="/favorites" element={<Favorite />}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
