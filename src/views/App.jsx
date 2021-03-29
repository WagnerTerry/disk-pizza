import React from "react";
import CadastroCliente from "./CadastroCliente";
import Caixa from "./Caixa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Button from "./components/button/Button";
import "../views/App.scss";
function App() {
  return (
    <Router>
      <div id="app">
        <Switch>
          <Route path="/" exact component={Caixa} />
          <Route path="/cadastroCliente" exact component={CadastroCliente} />
        </Switch>
      </div>
    </Router>
    //    <h2>Disk Pizza Califórnia</h2>
    //   <div className={"buttons"}>
    //     <a href="/cadastrocliente">
    //       <button fontSize={10} size={"sm"} onClick={() => console.log("oi")}>
    //         Cadastro de Cliente
    //       </button>
    //     </a>
    //     <button fontSize={10} size={"sm"} onClick={() => console.log("oi")}>
    //       Cardápio
    //     </button>
    //     <button fontSize={10} size={"sm"} onClick={() => console.log("oi")}>
    //       Caixa
    //     </button>
    //   <button>Cadastro de Cliente</button>
    //     <button>Cardápio</button>
    //     <button>Caixa</button>
    //    </div>
    // </div>
  );
}

export default App;
