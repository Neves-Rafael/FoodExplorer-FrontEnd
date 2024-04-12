import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Container, AboutUs, OpenHour, SocialMedia } from "./style";
import { FaInstagramSquare, FaFacebook, FaWhatsapp } from "react-icons/fa";

export function About() {
  return (
    <Container>
      <Header />
      <main>
        <AboutUs>
          <div className="info-container">
            <h3>Quem Somos</h3>
            <p className="text-info">Texto Gerado por IA</p>
            <p className="title-text">
              Bem-vindo ao <span>Food explorer</span>, onde cada refeição é uma
              jornada de descoberta gastronômica.
            </p>
            <p className="description-text">
              {" "}
              Somos mais do que apenas um restaurante - somos uma comunidade
              apaixonada por explorar novos sabores e experiências culinárias
              únicas. Desde a nossa fundação, em 2018, temos nos dedicado a
              oferecer não apenas comida excepcional, mas também uma atmosfera
              acolhedora e serviço de excelência.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </AboutUs>
        <AboutUs>
          <div className="info-container">
            <h3>Sobre Nós</h3>
            <p className="title-text">
              Acreditamos que a comida é uma linguagem universal que une pessoas
              de todas as origens e culturas
            </p>
            <p className="description-text">
              Nosso restaurante é um espaço onde você pode experimentar uma
              fusão de sabores de todo o mundo, tudo cuidadosamente preparado
              por nossa equipe de chefs talentosos. Além disso, estamos
              orgulhosos de oferecer um serviço de entrega conveniente através
              de nosso aplicativo exclusivo, garantindo que você possa desfrutar
              da nossa comida excepcional no conforto da sua casa.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </AboutUs>
        <AboutUs>
          <div className="info-container">
            <h3>Nossa Missão</h3>
            <p className="title-text">
              Alimentar corações, mentes e paladares através de experiências
              gastronômicas memoráveis
            </p>
            <p className="description-text">
              {" "}
              Estamos comprometidos em proporcionar a você não apenas uma
              refeição deliciosa, mas também momentos de prazer e felicidade
              compartilhados com amigos e familiares. Acreditamos que cada prato
              que servimos é uma expressão de amor e dedicação à arte da
              culinária.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1597430123721-a0a4fe363a54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </AboutUs>
        <AboutUs>
          <div className="info-container">
            <h3>Nossa Jornada</h3>
            <p className="title-text">
              Começamos com uma paixão compartilhada por comida e uma visão de
              criar um destino gastronômico verdadeiramente único.
            </p>
            <p className="description-text">
              {" "}
              Desde então, cada passo que damos tem sido impulsionado pela nossa
              dedicação em superar as expectativas dos nossos clientes e
              inspirar uma verdadeira paixão pela gastronomia. Ao longo dos
              anos, crescemos e evoluímos, mas nossa essência permanece a mesma:
              oferecer uma experiência culinária excepcional que deixará uma
              impressão duradoura em todos.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1625631980683-825234bfb7d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </AboutUs>
        <OpenHour>
          <h3>Tem planos para uma festa ou evento ?</h3>
          <p>
            Fale com um de nossos atendentes: <span> +55 (61) 99449-0793</span>
          </p>
          <p className="hour-schema">Horário de funcionamento</p>
          <div className="open-hour">
            <div>
              <p>Seg - Sex</p>
              <p>08:30h - 22:00h</p>
            </div>
            <div>
              <p>Sáb - Dom</p>
              <p>09:30h - 00:00h</p>
            </div>
          </div>
        </OpenHour>
        <SocialMedia>
          <h3>Nos acompanhe também pelas redes sociais.</h3>
          <div className="social">
            <FaFacebook size={30} />
            <FaInstagramSquare size={30} />
            <FaSquareXTwitter size={30} />
            <FaWhatsapp size={30} />
          </div>
        </SocialMedia>
      </main>
      <Footer />
    </Container>
  );
}
