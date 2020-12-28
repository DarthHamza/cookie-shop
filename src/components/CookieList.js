import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import CookieItem from "./CookieItem";

const CookieList = (props) => {
  const cookies = useSelector((state) => state.cookies);
  const [query, setQuery] = useState("");
  const cookieList = cookies
    .filter((cookie) =>
      cookie.name.toLowerCase().includes(query.toLocaleLowerCase())
    )
    .map((cookie) => (
      <CookieItem cookie={cookie} key={cookie.id} setCookie={props.setCookie} />
    ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{cookieList}</ListWrapper>
    </div>
  );
};

export default CookieList;
