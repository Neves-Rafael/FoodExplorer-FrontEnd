import { Container } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { FoodExplorer } from "../FoodExplorer";
export function Header() {
  return (
    <Container>
      <RxHamburgerMenu size={32} />
      <FoodExplorer />
      <div className="order-counter">
        <PiReceipt size={32} />
        <span>1</span>
      </div>
    </Container>
  );
}
