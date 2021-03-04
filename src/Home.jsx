import React from "react";
import Button from "./components/button/Button";
import "./Home.scss";
function Home() {
  return (
    <div id="home">
      <h1>Disk Pizza Califórnia</h1>
      <div className={"buttons"}>
        <Button fontSize={10} size={"sm"} onClick={() => console.log("oi")}>
          Cadastro de Cliente
        </Button>
        <Button fontSize={10} size={"sm"} onClick={() => console.log("oi")}>
          Cardápio
        </Button>
        <Button fontSize={10} size={"sm"} onClick={() => console.log("oi")}>
          Caixa
        </Button>
        {/* <button>Cadastro de Cliente</button>
        <button>Cardápio</button>
        <button>Caixa</button> */}
      </div>
    </div>
  );
}

export default Home;
