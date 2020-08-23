import React, { useState, useEffect } from "react";

import Routes from "./Routes";

import Loader from "./resources/base/components/Loader/Loader";
import NavBar from "./resources/base/components/NavBar/NavBar";

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
    <React.Fragment>
      <NavBar />
      <Routes />
    </React.Fragment>
  );
}

export default App;
