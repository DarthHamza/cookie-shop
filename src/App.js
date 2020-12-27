import React, { useState } from "react";
import { GlobalStyle } from "./styles";
import CookieList from "./components/CookieList";
import CookieDetail from "./components/CookieDetail";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import cookies from "./cookies";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb",
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb",
    backgroundColor: "#242424",
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const [_cookies, setCookies] = useState(cookies);
  const deleteCookie = (cookieId) => {
    const updatedCookies = _cookies.filter((cookie) => cookie.id !== cookieId);
    setCookies(updatedCookies);
  };

  const [cookie, setCookie] = useState(null);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route path="/cookies/:cookieSlug">
          <CookieDetail cookies={_cookies} deleteCookie={deleteCookie} />
        </Route>
        <Route path="/cookies">
          <CookieList
            cookies={_cookies}
            deleteCookie={deleteCookie}
            setCookie={setCookie}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
