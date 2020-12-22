import React from "react";
import styles from "../styles";

const CookieItem = (props) => {
    const cookie = props.cookie;
    return (
        <div style={ styles.cookie }>
            <img alt={ cookie.name } src={ cookie.image } style={styles.cookieImage} />
            <p style={styles.text}>{ cookie.name }</p>
            <p style={styles.text}>{ cookie.price } KD</p>
        </div>
    );
};

export default CookieItem;