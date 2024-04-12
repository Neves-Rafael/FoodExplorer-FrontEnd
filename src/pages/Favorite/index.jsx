import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import { Container, Plate } from "./style";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState, useEffect, useContext } from "react";
import { PlateContext } from "../../hooks/plateRequest";

export function Favorite() {
  const [allPlatesFavorite, setAllPlatesFavorite] = useState([]);
  const { showAllPlates } = useContext(PlateContext);
  const imageURL = `${api.defaults.baseURL}/files/`;
  const { createFavorite } = useAuth();
  const navigate = useNavigate();

  async function handleRemoveFavorite(plate_id) {
    await createFavorite(plate_id);
    favoritePlate();
  }

  async function favoritePlate() {
    const searchFavorites = await api.get("/favorites");
    setAllPlatesFavorite(searchFavorites.data);
  }

  useEffect(() => {
    favoritePlate();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <div className="text-content">
          <button className="back-button" onClick={() => navigate(-1)}>
            {<FaArrowLeft size={20} />} Voltar
          </button>
          <h2>Pratos favoritos</h2>
        </div>
        <div className="favorites-content">
          {allPlatesFavorite.length > 0 ? (
            allPlatesFavorite.map((plate) => {
              const favoritePlate = showAllPlates.find(
                (allPlate) => allPlate.id === plate.plate_id
              );
              if (favoritePlate) {
                return (
                  <Plate key={favoritePlate.id}>
                    <img src={`${imageURL}${favoritePlate.image}`} alt="" />
                    <div>
                      <h3>{favoritePlate.name}</h3>
                      <p onClick={() => handleRemoveFavorite(favoritePlate.id)}>
                        Remover dos favoritos
                      </p>
                    </div>
                  </Plate>
                );
              }
              return null;
            })
          ) : (
            <div>
              <p>Nenhum prato adicionado aos favoritos</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </Container>
  );
}
