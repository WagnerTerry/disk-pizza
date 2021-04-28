import React from "react";
import api from "../services/api";
// import { GetStaticProps } from "next";

class Cardapio extends React.Component {
  constructor() {
    super();
    this.state = {
      disk_pizza: [],
    };
  }

  buscaPizza = async () => {
    const response = await api.get("");
    // console.log("oba", response.data);
    console.log("res", response);
    this.setState({
      disk_pizza: response.data,
    });
  };

  componentDidMount() {
    this.buscaPizza();
  }

  render() {
    return (
      <div>
        Cardapio
        {console.log("apu", this.state.disk_pizza)}
        {/* <>
          {this.state.disk_pizza.map((pizza) => {
            return (
              <>
                <h1>legal</h1>
                <p>{pizza.tradicionais}</p>
              </>
            );
          })}
        </> */}
      </div>
    );
  }
}

export default Cardapio;
