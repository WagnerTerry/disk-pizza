import React from "react";
import api from "../services/api";
import Loading from "../components/loading/Loading";

import "./Cardapio.scss";

class Cardapio extends React.Component {
  constructor() {
    super();
    this.state = {
      disk_pizza: [],
      refrigerantes: [],
      pizzas: [],
      grupos: [],
      loading: true,
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
      loading: false,
    });
    console.log("tes", response.data);
  };

  componentDidMount = () => {
    this.buscaPizza();
  };

  render() {
    return (
      <div id={"cardapio"}>
        {this.state.loading ? (
          <div className="loading">
            <Loading size={30}></Loading>
          </div>
        ) : (
          <>
            <h2>Pizzas</h2>

            {this.state.grupos.map((grupo, i) => {
              return (
                <div key={i}>
                  <strong>{grupo.grupo} </strong>
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

            <strong>Refrigerante Grátis</strong>
            {this.state.refrigerantes.map((refri) => {
              return (
                <h3 key={refri.codigo_refri}>
                  Tamanho : {refri.tamanho} - {refri.litro} litros
                </h3>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default Cardapio;
