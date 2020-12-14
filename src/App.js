import './App.css';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const onNewNumber = (number) => {
    // when you press zero, you can only press it
    // - when the currentNumber is larger than zero – tick!
    // - or there's a decimal point
    // const isAlreadyZero = number === '0' && currentNumber === '0';
    // const hasADecimalPoint = currentNumber.includes('.'); // fill in lgic
    // if (isAlreadyZero || !hasDecimalPoint) {
    //   // Do nothing!
    //   return;
    // }

    // if those conditions are met, continue

    // first of all, add a number to the current string of numbers
    const newNumber = currentNumber.concat(number);

    // string concatenation!
    // const newNumber2 = currentNumber + number;
    // const newNumber3 = `${currentNumber}${number}`

    // secondly, change currentNumber to reflect this new value
    setCurrentNumber(newNumber);
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
            <button className='key' onClick={() => onNewNumber('1')}>
              1
            </button>
            <button className='key' onClick={() => onNewNumber('2')}>
              2
            </button>
            <button className='key' onClick={() => onNewNumber('3')}>
              3
            </button>
            <button className='key' onClick={() => onNewNumber('4')}>
              4
            </button>
            <button className='key' onClick={() => onNewNumber('5')}>
              5
            </button>
            <button className='key' onClick={() => onNewNumber('6')}>
              6
            </button>
            <button className='key' onClick={() => onNewNumber('7')}>
              7
            </button>
            <button className='key' onClick={() => onNewNumber('8')}>
              8
            </button>
            <button className='key' onClick={() => onNewNumber('9')}>
              9
            </button>
            <button className='key'>+</button>
            <button className='key'>-</button>
            <button className='key'>/</button>
            <button className='key'>*</button>
            <button className='key'>=</button>
            <button className='key'>.</button>
            <button className='key' onClick={() => setCurrentNumber('0')}>
              C
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
