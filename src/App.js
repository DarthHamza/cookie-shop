import React from "react";
import styles from "./styles";
import CookieList from "./components/CookieList";


function App() {
  return (
    <div style={ styles.body }>
      <h1 style={styles.text}>Cookies and Beyond</h1>
      <h4 style={styles.text}>Where cookie maniacs gather</h4>
      <img
        style = {styles}
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
      <CookieList />
    </div>
  );
}

export default App;
