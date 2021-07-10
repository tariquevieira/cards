import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/App.css';
import './assets/index.css';
class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: [],
    };
  }
  criarNota(titulo, texto) {
    const novaNotas = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNotas];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.notas.push(novaNotas);
    this.setState(novoEstado);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
