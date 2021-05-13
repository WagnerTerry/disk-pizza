import React, { useState } from "react";
// import { Formik } from "formik";
import "./CadastroCliente.scss";

function CadastroCliente() {
  // constructor() {
  //   super();
  // }

  const [values, setValues] = useState({
    name: "",
  });

  function onBlurCep(e, setFieldValue) {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function onChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div id="cadastro-cliente">
      <h2>Cadastro de Clientes</h2>

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
        <form action="/">
          <div>
            <div>
              <label htmlFor="name">Nome: </label>
              <input
                type="text"
                id="name"
                name="name"
                size="50"
                value={values.name}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="telefone">Telefone: </label>
              <input type="number" id="telefone" name="telefone" />
            </div>
          </div>

          <div>
            <label htmlFor="cep">Cep: </label>
            <input
              type="text"
              id="cep"
              name="cep"
              maxLength="9"
              onBlur={onBlurCep}
            />
          </div>
          <div>
            <label htmlFor="logradouro">Logradouro: </label>
            <input type="text" id="logradouro" name="logradouro" size="50" />
          </div>

          <div>
            <label htmlFor="bairro">Bairro: </label>
            <input type="text" id="bairro" name="bairro" size="40" />
            <label htmlFor="localidade">Cidade: </label>
            <input type="text" id="localidade" name="localidade" size="40" />
          </div>
          <div>
            <label htmlFor="obs">Observações: </label>
            <textarea name="obs" cols="50" rows="3"></textarea>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CadastroCliente;
