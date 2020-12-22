import React from "react";
import styles from "../styles";
import cookies from "../cookies";
import CookieItem from "./CookieItem";

const CookieList = () => {
    const cookieList = cookies.map(cookie => (
        <CookieItem cookie={ cookie } key={ cookie.id } />
    ))
    return (
        <div style={ styles.list }>{ cookieList }</div>
    );
};

export default CookieList;