import React from "react";
import { Main, Header, Logomarca, NavButtons, Carrossel, Products } from "./styles"; 
import ImageCarousel from "../../components/Carrossel"; 

const Home: React.FC = () => {
  return (
    <Main>
      <Header>
        <Logomarca>
          <div style={{ backgroundColor: 'white', width: '50px', height: '50px', borderRadius: '50px' }} />
        </Logomarca>
        <NavButtons>
          <a href="http://" target="_blank" rel="noopener noreferrer">Ínicio</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Tapetes</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Climatizadores</a>
        </NavButtons>
      </Header>

      <Carrossel>
        <ImageCarousel />
      </Carrossel>

      <Products>

        <div className="product-card">
          <div className="card-img">
            
          </div>

          <div className="card-bottom">
            <div className="card-info">
              <div className="text"></div>
              <div className="price"></div>
            </div>
            <div className="card-buy">
              Comprar
            </div>
          </div>
        </div>
        

      </Products>


    </Main>
  );
};

export default Home;
