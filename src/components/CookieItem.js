import React from "react";
import { Link } from "react-router-dom";
import { CookieWrapper, DeleteButtonStyled } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const CookieItem = (props) => {
  const cookie = props.cookie;

  return (
    <CookieWrapper>
      <Link to={`/cookies/${cookie.id}`}>
        <img alt={cookie.name} src={cookie.image} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} deleteCookie={props.deleteCookie} />
    </CookieWrapper>
  );
};

export default CookieItem;
