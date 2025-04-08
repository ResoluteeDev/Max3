import styled from "styled-components";




export const Main = styled.div`
  background-color:rgb(27, 84, 182);
  height: 100%;
  border: 1px solid red;
  color: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Header = styled.div`
  border: 1px solid white;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  a {
    text-decoration: none;
    color: white;
    
  }
`;

export const Logomarca = styled.div`

`

export const Carrossel = styled.div`
  margin-top: 50px;
`;



export const Products = styled.div`
  padding: 10px 20px;
  border: 1px solid yellow;
  height: 800px;
  display: flex;
  justify-content: space-evenly;
  

  .product-card {
    border: 1px solid red;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    padding: 20px 10px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    /* justify-content: space-between; */
    gap: 15px;
    
    .card-img { 
      border: 1px solid  yellow;
      width: 280px;
      height: 200px;
      border-radius: 8px;
    }

    .card-bottom {
      color: #000;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      /* border: 1px solid red; */
      height: 40%;
      width: 280px;
      
      /* border: 1px solid red; */

      .card-info {
        font-size: 14px;
        margin: 0;
        padding: 0;  
        font-weight: 400;
        text-align: justify;
        

      }

      .card-buy {

        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 0;

        .price {
          font-weight: 600;
        }
        
        .buybutton {
          background-color: #00B4D8;
          color: #fff;
          border: 1px solid rgb(51, 197, 227);
          padding: 0px 0px;
          width: 50%;
          border-radius: 5px;
          font-family: 'Poppins';
          font-weight: 400;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          transition: .3s linear all;
        }

        .buybutton:hover {
          background-color: rgb(31, 165, 192);
          border: 1px solid rgb(58, 171, 193);
        } 

      }

      

    }

    
  }



`







export const AboutUsContainer = styled.div`

  p {
    
    width: 720px;
    text-align: justify;
    margin: 0;
    padding: 0;
  }
`

