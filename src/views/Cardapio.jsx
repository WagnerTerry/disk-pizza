import React from "react";
import api from "../services/api";

class Cardapio extends React.Component {
  constructor() {
    super();
    this.state = {
      disk_pizza: [],
      refrigerantes: [],
      pizzas: [],
    };
  }

  buscaPizza = async () => {
    const response = await api.get("");
    const pizzas = response.data.pizzas;
    const refrigerantes = response.data.refrigerantes;

    this.setState({
      disk_pizza: response.data,
      pizzas: pizzas,
      refrigerantes: refrigerantes,
    });

  /*   pizzas[0].tradicionais[0].sabores.map((piz) => {
      return <h2>{console.log("asa",piz.nome, piz.codigo_pizza)}</h2>
    }) */

  
  };

  componentDidMount = () => {
    this.buscaPizza();
  };

  render() {
    return (
      <div>
        <h1>Cardapio</h1>

        <h2>Refrigerante Grátis</h2>
        {this.state.refrigerantes.map((refri) => {
          return (
            <h3 key={refri.codigo_refri}>
              Tamanho : {refri.tamanho} - litros: {refri.litro}
            </h3>
          );
        })}
      </div>
    );
  }
}

export default Cardapio;
