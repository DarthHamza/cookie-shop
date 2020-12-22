import React from "react";
import { ListWrapper } from "../styles";
import cookies from "../cookies";
import CookieItem from "./CookieItem";

const CookieList = () => {
    const cookieList = cookies.map(cookie => (
        <CookieItem cookie={ cookie } key={ cookie.id } />
    ))
    return (
        <ListWrapper>{ cookieList }</ListWrapper>
    );
};

export default CookieList;