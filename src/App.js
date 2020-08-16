import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loader from "./resources/base/components/Loader/Loader";
import NavBar from "./resources/base/components/NavBar/NavBar";

import Home from "./resources/base/pages/Home/Home";
import Blogs from "./resources/base/pages/Blogs/Blogs";
import Contact from "./resources/base/pages/Contact/Contact";

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
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/Portfolio" component={Home} />
          <Route exact path="/Portfolio/blogs" component={Blogs} />
          <Route exact path="/Portfolio/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
