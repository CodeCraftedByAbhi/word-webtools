/* eslint-disable no-eval */
import React, {useState} from 'react'

export default function MainContent1() {
    const [displayValue, setDisplayValue] = useState('');

const handleClick = (value) => {
  if (value === '=') {
    try {
      setDisplayValue(eval(displayValue));
    } catch (error) {
      setDisplayValue('Error');
    }
  } else if (value === 'C') {
    setDisplayValue('');
  } else {
    setDisplayValue(displayValue + value);

  }
};

return (
  <div className="calculator mx-5"><h5 className='text-center' style={{color: "black"}}>Calculator</h5>
    <input type="text" className="display" value={displayValue} readOnly />
    <div className="button-row">
      <button className='btn btn-primary my-2' onClick={() => handleClick('7')}>7</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('8')}>8</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('9')}>9</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('+')}>+</button>
    </div>
    <div className="button-row">
      <button className='btn btn-primary my-2' onClick={() => handleClick('4')}>4</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('5')}>5</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('6')}>6</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('-')}>-</button>
    </div>
    <div className="button-row">
      <button className='btn btn-primary my-2' onClick={() => handleClick('1')}>1</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('2')}>2</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('3')}>3</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('*')}>*</button>
    </div>
    <div className="button-row">
      <button className='btn btn-primary my-2' onClick={() => handleClick('0')}>0</button>   

      <button className='btn btn-primary my-2' onClick={() => handleClick('.')}>.</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('=')}>=</button>
      <button className='btn btn-primary my-2' onClick={() => handleClick('C')}>C</button>
    </div>
  </div>   
    
  )
}
