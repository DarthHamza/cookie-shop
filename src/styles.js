import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      color: ${ props => props.theme.mainColor };
      background-color: ${ props => props.theme.backgroundColor };
  }
`;

const Title = styled.h1`
  text-align: center;
  color: purple;
`;

const Description = styled.h4`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block,
  margin-eft: auto,
  margin-ight: auto,
  width: 50%,
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CookieWrapper = styled.div`
  margin: 20px;

  img {
      width: 200px;
      height: 200px;
  }

  p {
      text-align: center;

      &.cookie-price {
          color: ${ props => props.theme.pink };
      }
  }
`;

export { Description, Title, ShopImage, ListWrapper, CookieWrapper, GlobalStyle};