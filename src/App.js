import './App.css';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const onNewNumber = (number) => {
    console.log(number);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <h1>calculator</h1>
          <div className='display'>{currentNumber}</div>
          <div className='keyboard'>
            <button className='key' onClick={() => onNewNumber('0')}>
              0
            </button>
            <button className='key'>1</button>
            <button className='key'>2</button>
            <button className='key'>3</button>
            <button className='key'>4</button>
            <button className='key'>5</button>
            <button className='key'>6</button>
            <button className='key'>7</button>
            <button className='key'>8</button>
            <button className='key'>9</button>
            <button className='key'>+</button>
            <button className='key'>-</button>
            <button className='key'>/</button>
            <button className='key'>*</button>
            <button className='key'>=</button>
            <button className='key'>.</button>
            <button className='key'>C</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
