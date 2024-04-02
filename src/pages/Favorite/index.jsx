import { Container, Plate } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import imageFavorite from "../../assets/group-0.png";
import { useState, useEffect } from "react";
import { api } from "../../service/api";

export function Favorite(){
  const [allPlatesFavorite, setAllPlatesFavorite] = useState("")
  
  useEffect(() => {
    async function favoritePlate(){
      const searchFavorites = await api.get("/favorites");
      setAllPlatesFavorite(searchFavorites)
    }

    favoritePlate()
  },[]);

  return(
    <Container>
      <Header/>
      <main>
      <h2>Meus favoritos</h2>
      <div className="favorites-content">
        {allPlatesFavorite.length > 0 ?
        <Plate>
          <img src={imageFavorite} alt="" />
          <div>
            <h3>Salada Radish</h3>
            <p>Remover dos favoritos</p>
          </div>
        </Plate>
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