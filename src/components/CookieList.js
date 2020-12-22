import React, { useState } from "react";
import { ListWrapper } from "../styles";
import cookies from "../cookies";
import SearchBar from "./SearchBar";
import CookieItem from "./CookieItem";

const CookieList = () => {
  const [query, setQuery] = useState("");
  const cookieList = cookies
    .filter((cookie) => cookie.name.includes(query))
    .map((cookie) => <CookieItem cookie={cookie} key={cookie.id} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{cookieList}</ListWrapper>
    </div>
  );
};

export default CookieList;
