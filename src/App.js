import React, { useState } from "react";
import {
  Description,
  ShopImage,
  Title,
  GlobalStyle,
  ThemeButton,
} from "./styles";
import CookieList from "./components/CookieList";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb",
    pink: "#ff85a2",
  },
  dark: {
    mainColor: "#fefafb",
    backgroundColor: "#242424",
    pink: "#ff85a2",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {" "}
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
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
