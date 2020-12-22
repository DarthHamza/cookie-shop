import React from "react";
// Data
import cookies from "./cookies";
// Styling
import styles from "./styles";


function App() {
  const cookieList = cookies.map(cookie => (
    <div style={ styles.cookie }>
      <img
        alt={ cookie.name }
        src={ cookie.image }
        style={styles.cookieImage}
      />
      <p style={styles.text}>{ cookie.name }</p>
      <p style={styles.text}>{ cookie.price } KD</p>
    </div>
  ))
  return (
    <div>
      <h1 style={styles.text}>Cookies and Beyond</h1>
      <h4 style={styles.text}>Where cookie maniacs gather</h4>
      <img
        style = {styles}
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
      <div style={ styles.list }>
        { cookieList }
      </div>
    </div>
  );
}

export default App;
