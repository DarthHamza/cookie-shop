import React from "react";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";

const CookieDetail = (props) => {
  const { cookieSlug } = useParams();
  const cookie = props.cookies.find((cookie) => cookie.slug === cookieSlug);
  if (!cookie) return <Redirect to="/cookies" />;
  return (
    <DetailWrapper>
      <h1>{cookie.name}</h1>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.description}</p>
      <p>{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} deleteCookie={props.deleteCookie} />
    </DetailWrapper>
  );
};

export default CookieDetail;
