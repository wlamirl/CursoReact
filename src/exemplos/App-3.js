import P from 'prop-types';
import './App.css';
import React, { useCallback, useState } from 'react';

/* Demonstrando o uso do useCallBack */

/* const Button = ({ incrementButton }) => {
  //console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
}; */

// React.memo memorizar o componente se ele não mudar
const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  /* no caso das funções, não temos um método render, não tem como executar
  somente o retorno da função, temos que executar a função inteira de novo,
  então toda vez que o componente renderiza a função inteira é
  executada novamente. Consequentemente, toda vez que o componente renderiza,
  a função é criada novamente.
  Sempre que for usar um useCallback tem que usar com coisas que são pesadas.
  const incrementCounter = (num) => {
    setCounter(counter + num);
  }; */

  // ver a partir do minuto 15 da aula 50.
  const incrementCounter = useCallback(num) => {
    setCounter((c) => c + num);
  }, []);

  //console.log('Pai, renderizou');

  return (
    <div className='App'>
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
