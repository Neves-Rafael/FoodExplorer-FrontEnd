import { Footer } from "../Footer";
import { IoMdClose } from "react-icons/io";
import { InputSearch } from "../InputSearch";
import { Container, MenuHeader } from "./style";

import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

export function SideMenu({ menuIsOpen, menuIsClose, plates }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  useEffect(() => {
    function handleResize() {
      window.innerWidth > 1024 ? menuIsClose() : null;
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <MenuHeader className="menu-header">
        <div onClick={menuIsClose}>
          {" "}
          <IoMdClose size={34} /> Menu{" "}
        </div>
      </MenuHeader>

      <InputSearch plates={plates} />

      {verifyAdminRole && (
        <p className="option" onClick={() => navigate("/newplate")}>
          Novo Prato
        </p>
      )}
      {!verifyAdminRole && (
        <p className="option" onClick={() => navigate("/favorites")}>
          Favoritos
        </p>
      )}
      <p className="option" onClick={() => navigate("/order-history")}>
        Histórico de pedidos
      </p>
      <p className="option" onClick={() => navigate("/profile")}>
        Perfil
      </p>
      <p className="option" onClick={() => logout()}>
        Sair
      </p>
      <Footer />
    </Container>
  );
}
