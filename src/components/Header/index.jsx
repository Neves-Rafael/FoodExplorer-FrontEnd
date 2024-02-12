import { Container } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { FoodExplorer } from "../FoodExplorer";
import { SideMenu } from "../SideMenu";
import { useState } from "react";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Container>
      <RxHamburgerMenu size={32} onClick={() => setMenuIsOpen(true)} />
      <FoodExplorer />
      <div className="order-counter">
        <PiReceipt size={32} />
        <span>1</span>
      </div>
      <SideMenu menuIsOpen={menuIsOpen} menuIsClose={() => setMenuIsOpen(false)} />
    </Container>
  );
}
