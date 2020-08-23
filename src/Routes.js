import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./resources/base/pages/Home/Home";
import Blogs from "./resources/base/pages/Blogs/Blogs";
import Contact from "./resources/base/pages/Contact/Contact";

const Routes = () => (
  <Switch>
    <Route exact path="/Portfolio" component={Home} />
    <Route exact path="/Portfolio/blogs" component={Blogs} />
    <Route exact path="/Portfolio/contact" component={Contact} />
  </Switch>
);

export default Routes;
