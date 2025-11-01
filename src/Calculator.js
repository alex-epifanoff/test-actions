import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setInput(input.concat(e.target.name));
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input type="text" value={input} />
        <p>{result}</p>
      </div>
      <div>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>
      </div>
      <div>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>-</button>
      </div>
      <div>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>*</button>
      </div>
      <div>
        <button name="0" onClick={handleClick}>0</button>
        <button onClick={clear}>Clear</button>
        <button onClick={calculate}>=</button>
        <button name="/" onClick={handleClick}>/</button>
      </div>
    </div>
  );
}

export default Calculator;