import { Container, Plate } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import imageFavorite from "../../assets/group-0.png";
import { useState, useEffect } from "react";

export function Favorite(){
  

  return(
    <Container>
      <Header/>
      <main>
      <h2>Meus favoritos</h2>
      <div className="favorites-content">
        <Plate>
          <img src={imageFavorite} alt="" />
          <div>
            <h3>Salada Radish</h3>
            <p>Remover dos favoritos</p>
          </div>
        </Plate>
        <Plate>
          <img src={imageFavorite} alt="" />
          <div>
            <h3>Salada Radish</h3>
            <p>Remover dos favoritos</p>
          </div>
        </Plate><Plate>
          <img src={imageFavorite} alt="" />
          <div>
            <h3>Salada Radish</h3>
            <p>Remover dos favoritos</p>
          </div>
        </Plate><Plate>
          <img src={imageFavorite} alt="" />
          <div>
            <h3>Salada Radish</h3>
            <p>Remover dos favoritos</p>
          </div>
        </Plate><Plate>
          <img src={imageFavorite} alt="" />
          <div>
            <h3>Salada Radish</h3>
            <p>Remover dos favoritos</p>
          </div>
        </Plate>
      </div>
      </main>
      <Footer/>
    </Container>
  )
}