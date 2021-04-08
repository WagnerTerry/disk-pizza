import React from "react";
import "./CadastroCliente.scss";

class CadastroCliente extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div id="cadastro-cliente">
        <h2>Cadastro de Clientes</h2>
        <form action="/">
          <header>
            <div>
              <label htmlFor="cod-cliente">Código do Cliente: </label>
              <input type="text" id="cod-cliente" name="cod-cliente" size="5" />
            </div>
            <div>
              {" "}
              <button>Buscar</button>
              <button>Limpar</button>
              <button>Salvar</button>
              <button>Alterar</button>
              <button>Apagar</button>
            </div>
            <div></div>
            {/* <br />
          <br /> */}
          </header>

          <main>
            <div>
              <div>
                <label htmlFor="nome-cliente">Nome: </label>
                <input
                  type="text"
                  id="nome-cliente"
                  name="nome-cliente"
                  size="50"
                />
              </div>
              <div>
                <label htmlFor="telefone">Telefone: </label>
                <input type="number" id="telefone" name="telefone" />
              </div>
            </div>

            <div>
              <label htmlFor="cep">Cep: </label>
              <input type="number" id="cep" name="cep" />
            </div>
            <div>
              <label htmlFor="endereco">Endereço: </label>
              <input type="text" id="endereco" name="endereco" size="50" />
            </div>

            <div>
              <label htmlFor="bairro">Bairro: </label>
              <input type="text" id="bairro" name="bairro" size="40" />
              <label htmlFor="cidade">Cidade: </label>
              <input type="text" id="cidade" name="cidade" size="40" />
            </div>
          </main>
        </form>
      </div>
    );
  }
}

export default CadastroCliente;
