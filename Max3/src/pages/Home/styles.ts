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
  height: 320px;
  

  .product-card {
    border: 1px solid red;
    width: 300px;
    height: 320px;
    border-radius: 10px;
    padding: 10px 10px;
    display: flex; 
    flex-direction: column;
    align-items: center;

    .card-img { 
      border: 1px solid  yellow;
      width: 280px;
      height: 200px;
      border-radius: 5px;
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

