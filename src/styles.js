import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      color: ${(props) => props.theme.mainColor};
      background-color: ${(props) => props.theme.backgroundColor};
  }
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
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

const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
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
      color: ${(props) => props.theme.pink};
    }
  }
`;

const SearchBarStyled = styled.input`
  padding: 0.5px;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export {
  Description,
  Title,
  ShopImage,
  ListWrapper,
  CookieWrapper,
  GlobalStyle,
  ThemeButton,
  SearchBarStyled,
  DetailWrapper,
  DeleteButtonStyled,
};
