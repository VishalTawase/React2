import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const buttons = [
    '7', '8', '9', 'C',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    '/'
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="output">{result || display}</div>
      </div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
