import React from "react";
import { Formik, Field, Form } from "formik";
import "./CadastroCliente.scss";

class CadastroCliente extends React.Component {
  // constructor() {
  //   super();
  // }

  onSubmit = (values, actions) => {
    console.log("Submit", values);
  };

  onBlurCep = (e, setFieldValue) => {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
      });
  };

  validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Nome é obrigatório";
    }
    if (!values.telefone) {
      errors.telefone = "Telefone é obrigatório";
    }

    return errors;
  };

  render() {
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
          <Formik
            // validate={this.validate}
            onSubmit={this.onSubmit}
            // validateOnMount
            initialValues={{
              name: "",
              telefone: "",
            }}
            render={({ values, errors, setFieldValue }) => (
              <Form>
                <div>
                  <div>
                    <label htmlFor="name">Nome: </label>
                    <Field type="text" id="name" name="name" size="50" />
                    {errors.name && <span>{errors.name}</span>}
                  </div>
                  <div>
                    <label htmlFor="telefone">Telefone: </label>
                    <Field type="number" id="telefone" name="telefone" />
                    {errors.telefone && <span>{errors.telefone}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="cep">Cep: </label>
                  <Field
                    type="text"
                    id="cep"
                    name="cep"
                    maxLength="9"
                    onBlur={(e) => this.onBlurCep(e, setFieldValue)}
                  />
                </div>
                <div>
                  <label htmlFor="logradouro">Logradouro: </label>
                  <Field
                    type="text"
                    id="logradouro"
                    name="logradouro"
                    size="50"
                  />
                </div>

                <div>
                  <label htmlFor="bairro">Bairro: </label>
                  <Field type="text" id="bairro" name="bairro" size="40" />
                  <label htmlFor="cidade">Cidade: </label>
                  <Field type="text" id="localidade" name="cidade" size="40" />
                </div>
                <div>
                  <label htmlFor="obs">Observações: </label>
                  <textarea name="obs" cols="50" rows="3"></textarea>
                </div>
                <button type="submit">Enviar</button>
              </Form>
            )}
          />
        </main>
      </div>
    );
  }
}

export default CadastroCliente;
