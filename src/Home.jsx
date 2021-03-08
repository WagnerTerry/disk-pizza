import React from "react";
// import Button from "./components/button/Button";
import "./Home.scss";
function Home() {
  return (
    <div id="home">
      <h2>Disk Pizza Califórnia</h2>
      <div className={"buttons"}>
        <button fontSize={10} size={"sm"} onClick={() => console.log("oi")}>
          Cadastro de Cliente
        </button>
        <button fontSize={10} size={"sm"} onClick={() => console.log("oi")}>
          Cardápio
        </button>
        <button fontSize={10} size={"sm"} onClick={() => console.log("oi")}>
          Caixa
        </button>
        {/* <button>Cadastro de Cliente</button>
        <button>Cardápio</button>
        <button>Caixa</button> */}
      </div>
    </div>
  );
}

export default Home;
