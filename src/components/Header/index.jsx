import { Container } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { FoodExplorer } from "../FoodExplorer";
import { SideMenu } from "../SideMenu";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { RxExit } from "react-icons/rx";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Container>
      <div className="menu-hamburger">
        <RxHamburgerMenu size={32} onClick={() => setMenuIsOpen(true)} />
      </div>
      <FoodExplorer />

      <div>
        <Input placeholder={"Busque por pratos ou ingredients"} />
      </div>
      <div>
        <Button title={"Pedidos"} />
      </div>
      <RxExit size={32} />

      <div className="order-counter">
        <PiReceipt size={32} />
        <span>1</span>
      </div>
      <SideMenu menuIsOpen={menuIsOpen} menuIsClose={() => setMenuIsOpen(false)} />
    </Container>
  );
}
