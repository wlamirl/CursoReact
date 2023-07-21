import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { Component } from 'react';

/* Demonstrando a utilização de Hooks */

// class App extends Component {
//   // para diminuir o código abaixo podemos utilizar classe conforme linha: 16
//   // constructor(props) {
//   //   super(props);

//   //   this.handleClick = this.handleClick.bind(this);

//   //   this.state = {
//   //     reverse: false,
//   //   };
//   // }
//   state = {
//     reverse: false,
//   };

//   handleClick() {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   }

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className={`App-logo ${reverseClass}`} alt='logo' />

//           <button type='button' onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

function App() {
  //const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    // this.setState({ reverse: !reverse });
    // setReverse(!reverse); Também funciona com o callback, conforme abaixo
    setReverse((reverse) => !reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
    /*pode-se usar alternativamente uma função de callback como abaixo, para
    executar a mesma funcionalidade da linha acima.
    em alguns casos é muito mais vantajoso utilizar callback, pois, dessa forma,
    garantimos que teremos o estado correto - também chamado de prevState,
    setCounter((prevCounter) => prevCounter + 1).
    Garante também que não utilize diretamente o estado no setCounter.
    useState combinado com callback.
    */
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className={`App-logo ${reverseClass}`} alt='logo' />

        <h1>Contador: {counter}</h1>

        <p>
          <button type='button' onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
        <p>
          <button type='button' onClick={handleIncrement}>
            Increment {counter}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
