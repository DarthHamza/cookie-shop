import React from "react";

const styles = {
  text: { textAlign: "center"},
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  }
}
function App() {
  return (
    <div>
      <h1 style={styles.text}>Cookies and Beyond</h1>

      <h4 style={styles.text}>Where cookie maniacs gather</h4>
      <img
        style = {styles}
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
    </div>
  );
}

export default App;
