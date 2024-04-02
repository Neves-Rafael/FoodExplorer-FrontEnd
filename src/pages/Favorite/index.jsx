import { Container, Plate } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState, useEffect, useContext } from "react";
import { api } from "../../service/api";
import { PlateContext } from "../../hooks/plateRequest";

export function Favorite(){
  const [allPlatesFavorite, setAllPlatesFavorite] = useState([]);
  const { showAllPlates } = useContext(PlateContext);
  const imageURL = `${api.defaults.baseURL}/files/`;
  
  
  // function filterFavoritePlates(){
    
  // }

  useEffect(() => {
    async function favoritePlate(){
      const searchFavorites = await api.get("/favorites");
      setAllPlatesFavorite(searchFavorites.data);
    }

    // filterFavoritePlates()
    favoritePlate()
  },[]);

  return(
    <Container>
      <Header/>
      <main>
      <h2>Meus favoritos</h2>
      <div className="favorites-content">
        {allPlatesFavorite.length > 0 ?
          allPlatesFavorite.map((plate) => (
            showAllPlates.map((allPlate, index) => {
              if(allPlate.id === plate.plate_id){
                return (
                  <Plate key={index}>
                  <img src={`${imageURL}${allPlate.image}`} alt="" />
                  <div>
                    <h3>Salada Radish</h3>
                    <p>Remover dos favoritos</p>
                  </div>
                </Plate>
                )
              }
            })
          ))
        :
        <div>
          <p>Nenhum prato adicionado aos favoritos</p>
        </div>
        }
      </div>
      </main>
      <Footer/>
    </Container>
  )
}