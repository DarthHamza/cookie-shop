import React from "react";
import { Link } from "react-router-dom";
import { CookieWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const CookieItem = ({ cookie, deleteCookie }) => {
  return (
    <CookieWrapper className="col-sm-6 col-md-4 col-lg-3">
      <Link
        className="d-flex justify-content-center"
        to={`/cookies/${cookie.slug}`}
      >
        <img alt={cookie.name} src={cookie.image} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} />
    </CookieWrapper>
  );
};

export default CookieItem;
