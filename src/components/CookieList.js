import React, { useState } from "react";
import { ListWrapper } from "../styles";

import SearchBar from "./SearchBar";
import CookieItem from "./CookieItem";

const CookieList = (props) => {
  const [query, setQuery] = useState("");
  const cookieList = props.cookies
    .filter((cookie) =>
      cookie.name.toLowerCase().includes(query.toLocaleLowerCase())
    )
    .map((cookie) => (
      <CookieItem
        cookie={cookie}
        key={cookie.id}
        setCookie={props.setCookie}
        deleteCookie={props.deleteCookie}
      />
    ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{cookieList}</ListWrapper>
    </div>
  );
};

export default CookieList;
