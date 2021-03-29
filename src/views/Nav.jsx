import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.png";

function Nav() {
  return (
    <nav>
      {/* <img src={Logo} alt="logo" className="logo" /> */}
      <h3>Disk Pizza Califórnia</h3>
      <ul className="nav-links">
        <Link className="navStyle" to="/">
          <li>Cadastro</li>
        </Link>
        <Link className="navStyle" to="/caixa">
          <li>Caixa</li>
        </Link>
        <Link className="navStyle" to="/cardapio">
          <li>Cardapio</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
