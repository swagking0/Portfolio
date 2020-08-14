import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Loader from "./resources/base/components/sub-components/Loader";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [myData, setmyData] = useState(null);

  useEffect(() => {
    const getmyData = () => {
      return fetch("https://gitconnected.com/v1/portfolio/swagking0", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((myData) => {
          setmyData(myData);
        });
    };
    getmyData().then(() => {
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Website Under Development</h1>
        <p>Upgrading to React!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <h2>{myData.basics.name}</h2>
      </header>
    </div>
  );
}

export default App;
