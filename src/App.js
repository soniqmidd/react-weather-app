import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was created by{" "}
          <a
            href="https://gilded-starburst-7bef05.netlify.app/"
            target="_blank"
          >
            Sonique Middleton
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/soniqmidd/react-weather-app"
            target="_blank"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
