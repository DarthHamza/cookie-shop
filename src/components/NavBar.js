import React from "react";
import logo from "../logo.svg";
import { Logo, ThemeButton, NavStyled, NavItem } from "../styles";

const NavBar = (props) => {
  const toggleTheme = props.toggleTheme;
  const currentTheme = props.currentTheme;
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img src={logo} />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem className="nav-item" exact to="/cookies">
            Cookies
          </NavItem>
          <ThemeButton className="nav-item" onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
