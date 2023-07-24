import P from 'prop-types';
import './App.css';
import React, { useCallback, useMemo, useState } from 'react';

/* Demonstrando o uso do useMemo */

// React.memo memorizar o componente se ele não mudar
const Button = ({ incrementButton }) => {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai, renderizou');

  cont btn = useMemo(() => {
    <Button incrementButton={incrementCounter} />
  }, [incrementCounter]);

  return (
    <div className='App'>
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
