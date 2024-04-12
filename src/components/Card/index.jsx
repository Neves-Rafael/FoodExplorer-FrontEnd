import { Count } from "../Count";
import { Button } from "../Button";
import { Container } from "./style";
import { FaRegEdit } from "react-icons/fa";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { PlateContext } from "../../hooks/plateRequest";

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export function Card({
  onCountChange,
  plateImage,
  view,
  plate,
  verifyFavorite,
  isFavorite,
  ...rest
}) {
  const [countValue, setCountValue] = useState(1);
  const { user, createFavorite } = useAuth();
  const navigate = useNavigate();
  const { updateRequest } = useContext(PlateContext);

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;
  const plateValue = plate.value.replace(".", ",");

  const handleCountChange = (newValue) => {
    setCountValue(newValue);
  };

  function calculate() {
    const allRequest = JSON.parse(localStorage.getItem("pedidos")) || [];
    const priceInReal = plate.value ? plate.value.replace(",", ".") : null;

    const price = (priceInReal * countValue).toFixed(2).replace(".", ",");

    const newRequest = {
      plate,
      price,
      quantity: countValue,
    };

    allRequest.push(newRequest);
    localStorage.setItem("pedidos", JSON.stringify(allRequest));

    updateRequest();
  }

  async function handleFavoritePlate(plate_id) {
    await createFavorite(plate_id);
    await verifyFavorite();
    await verifyStatusFavorite();
  }

  const verifyStatusFavorite = () => {
    return isFavorite.some((object) => object.plate_id === plate.id);
  };

  const verifyPlateValue = () => {
    const verifyCents = plateValue.includes(",");

    if (verifyCents === false) {
      return `${plateValue},00`;
    } else {
      return plateValue;
    }
  };

  useEffect(() => {
    verifyStatusFavorite();
  }, []);

  return (
    <Container {...rest}>
      {verifyAdminRole ? (
        <FaRegEdit
          size={30}
          className="edit-icon"
          onClick={() => navigate(`/editplate/${plate.id}`)}
        />
      ) : (
        <>
          {verifyStatusFavorite() ? (
            <FaHeart
              className="favorite-icon"
              onClick={() => handleFavoritePlate(plate.id)}
            />
          ) : (
            <FaRegHeart
              className="favorite-icon"
              onClick={() => handleFavoritePlate(plate.id)}
            />
          )}
        </>
      )}

      <img src={plateImage && plateImage} alt="" onClick={view} />
      <p className="plate-name" onClick={view}>
        {plate.name} <TbArrowBadgeRightFilled size={18} />
      </p>
      <p className="plate-description">{plate.description}</p>
      <p className="value">R$ {verifyPlateValue()}</p>

      {verifyAdminRole ? null : (
        <div className="plate-count">
          <Count onCountChange={handleCountChange} />
          <Button title={"Incluir"} onClick={calculate} />
        </div>
      )}
    </Container>
  );
}
