import React, { Component } from 'react';
import "./App.css"
import Background from '../src/imgs/bg-image.png'

let intervaloSimulacao;

class App extends Component {
  constructor(props) {
    super(props);

   

    this.state = {
      pet: {
        nome: 'DongDong',
        fome: 50,
        felicidade: 50,
        energia: 50,
        emoji: '🐱‍🚀'
      },
    };
  }

 
  // Método para alimentar o pet
  alimentarPet = () => {
    this.setState((prevState) => ({
      pet: {
        ...prevState.pet,
        fome: prevState.pet.fome - 10, // Reduz a fome em 10 (ajuste conforme necessário)
      },
    }));
  };

  passagemDoTempo = () => {
    intervaloSimulacao = setInterval(() => {
      this.setState((prevState) => ({
        pet: {
          ...prevState.pet,
          fome: prevState.pet.fome + 5, // Aumenta a fome em 5 a cada intervalo (ajuste conforme necessário)
          // Atualize outros atributos aqui também
        },
      }));
    }, 10000); // A cada 10 segundos (ajuste conforme necessário)
  };
  componentDidMount() {
    // Inicie a simulação quando o componente for montado
    this.passagemDoTempo();
  }

  componentWillUnmount() {
    // Limpe o intervalo quando o componente for desmontado para evitar vazamentos de memória
    clearInterval(intervaloSimulacao);
  }

  render() {
    const { pet } = this.state;

   

    // if (pet.fome < 1) {
    //   pet.fome = 0
    // } 
    // if (pet.fome > 100) {
    //   pet.fome = 'morreu o bichinho' 
    // }

    return (
    

      <div className="App">
        <h1>Olá!Eu sou {pet.nome} {pet.emoji}</h1>
        <p>Fome: {pet.fome}</p>
        <p>Felicidade: {pet.felicidade}</p>
        <p>Energia: {pet.energia}</p>
        <button onClick={this.alimentarPet}>Alimentar</button>
      </div>
    );
  }
}

export default App;