import React from "react";
import api from "../services/api";

import "./Cardapio.scss";

class Cardapio extends React.Component {
  constructor() {
    super();
    this.state = {
      disk_pizza: [],
      refrigerantes: [],
      pizzas: [],
      grupos: [],
    };
  }

  buscaPizza = async () => {
    const response = await api.get("");
    const pizzas = response.data.pizzas;
    const grupos = response.data.grupos;
    const refrigerantes = response.data.refrigerantes;

    this.setState({
      disk_pizza: response.data,
      pizzas: pizzas,
      grupos: grupos,
      refrigerantes: refrigerantes,
    });
    console.log("tes", response.data);

    /*   pizzas[0].tradicionais[0].sabores.map((piz) => {
      return <h2>{console.log("asa",piz.nome, piz.codigo_pizza)}</h2>
    }) */
  };

  componentDidMount = () => {
    this.buscaPizza();
  };

  render() {
    // const grupos = this.state.pizzas.filter((g) => g.grupo === "ESPECIAIS");
    return (
      <div id={"cardapio"}>
        <h1>Cardapio</h1>
        <h2>Pizzas</h2>

        {this.state.grupos.map((grupo, i) => {
          return (
            <div key={i}>
              <h2>{grupo.grupo} </h2>
              {this.state.pizzas.map((pizza, a) => {
                return (
                  <div key={a}>
                    {pizza.grupo === grupo.grupo && <h3>{pizza.nome}</h3>}
                  </div>
                );
              })}
              <h4>
                Pequena R$ {grupo.preco_pequena} | Grande R${" "}
                {grupo.preco_grande} | Família R$ {grupo.preco_familia}{" "}
                {grupo.preco_gigante
                  ? `| Gigante R$ ${grupo.preco_gigante}`
                  : ""}
              </h4>
            </div>
          );
        })}

        {/* <h2>Tradicionais </h2>
        {this.state.pizzas.map((pizza) => {
          return (
            pizza.grupo === "TRADICIONAIS" && (
              <div key={pizza.codigo_pizza}>
                <h3>{pizza.nome}</h3>
              </div>
            )
          );
        })}
        <h2>Classicas</h2>
        {this.state.pizzas.map((pizza) => {
          return (
            pizza.grupo === "CLASSICAS" && (
              <div key={pizza.codigo_pizza}>
                <h3>{pizza.nome}</h3>
              </div>
            )
          );
        })} */}

        <h2>Refrigerante Grátis</h2>
        {this.state.refrigerantes.map((refri) => {
          return (
            <h3 key={refri.codigo_refri}>
              Tamanho : {refri.tamanho} - {refri.litro} litros
            </h3>
          );
        })}
      </div>
    );
  }
}

export default Cardapio;
