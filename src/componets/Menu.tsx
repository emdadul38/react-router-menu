import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Product from "./Product";
import Details from "./Details";
import Nav from "./Nav";

const Menu = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* <h3>Logo</h3> */}
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/product" exact component={Product} />
        <Route path="/about" component={About} />
        <Route path="/product/details/:id" exact component={Details} />
      </Switch>
    </Router>
  );
};

export default Menu;
