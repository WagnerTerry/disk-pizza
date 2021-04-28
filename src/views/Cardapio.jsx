import React from "react";
import api from "../services/api";
// import { GetStaticProps } from "next";

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

    console.log("pizza", pizzas);
    console.log("refri", refrigerantes);

    // const teste = pizzas[0].map((pizza) => {
    //   return pizza;
    // });
    // console.log("teste", teste);
  };

  componentDidMount = () => {
    this.buscaPizza();
  };

  render() {
    return <div>Cardapio</div>;
  }
}

export default Cardapio;
