import React from "react";
import { Description, ShopImage, Title } from "../styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Title>Cookies and Beyond</Title>
      <Description>Where cookie maniacs gather</Description>
      <ShopImage
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
      <Link to="/cookies" style={{ margin: 10, float: "right" }}>
        Cookies
      </Link>
    </div>
  );
};

export default Home;