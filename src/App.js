import React from "react";
import {Description, ShopImage, Title, GlobalStyle} from "./styles";
import CookieList from "./components/CookieList";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424",
  backgroundColor: "#fefafb",
  pink: "#ff85a2",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Title>Cookies and Beyond</Title>
      <Description>Where cookie maniacs gather</Description>
      <ShopImage
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
