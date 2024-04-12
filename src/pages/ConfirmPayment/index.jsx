import { useEffect } from "react";
import { Container } from "./style";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";

import Lottie from "react-lottie";
import animationData from "../../assets/check-animate.json";

export function ConfirmPayment() {
  const { updatePayment } = useAuth();
  const { id } = useParams();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    updatePayment(id);
  }, []);

  return (
    <Container>
      <div>
        <Lottie options={defaultOptions} />
        <p>Pagamento realizado!</p>
      </div>
    </Container>
  );
}
