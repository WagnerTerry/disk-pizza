import React from "react";
import CadastroCliente from "./CadastroCliente";
import Caixa from "./Caixa";
import Cardapio from "./Cardapio";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Logo from "../assets/logo.png";

// import Button from "./components/button/Button";
import "../views/App.scss";
function App() {
  return (
    <Router>
      <div id="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cadastrocliente" component={CadastroCliente} />
          <Route path="/caixa" component={Caixa} />
          <Route path="/cardapio" component={Cardapio} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home">
    <h1>DISK PIZZA CALIFÓRNIA</h1>
    <img src={Logo} alt="logo" className="logo" />
  </div>
);

export default App;
