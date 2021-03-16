import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import CadastroCliente from "./views/CadastroCliente";
// import About from "../about/about";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/cadastrocliente" component={CadastroCliente} />
    {/* <Route path="/about" component={About} /> */}
    <Redirect from="*" to="/" />
  </Router>
);
