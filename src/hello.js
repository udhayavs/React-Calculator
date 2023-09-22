import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
      operator: null,
      previousValue: null,
    };
  }

  inputDigit = digit => {
    const { displayValue } = this.state;

    if (displayValue === '0') {
      this.setState({ displayValue: digit });
    } else {
      this.setState({ displayValue: displayValue + digit });
    }
  };

  inputDecimal = () => {
    const { displayValue } = this.state;

    if (!displayValue.includes('.')) {
      this.setState({ displayValue: displayValue + '.' });
    }
  };

  clearDisplay = () => {
    this.setState({ displayValue: '0' });
  };

  setOperator = operator => {
    const { displayValue } = this.state;
    this.setState({
      operator,
      previousValue: displayValue,
      displayValue: '0',
    });
  };

  calculate = () => {
    const { displayValue, operator, previousValue } = this.state;
    const currentValue = parseFloat(displayValue);
    const prevValue = parseFloat(previousValue);

    if (operator === '+') {
      this.setState({ displayValue: prevValue + currentValue });
    } else if (operator === '-') {
      this.setState({ displayValue: prevValue - currentValue });
    } else if (operator === '*') {
      this.setState({ displayValue: prevValue * currentValue });
    } else if (operator === '/') {
      this.setState({ displayValue: prevValue / currentValue });
    }else if (operator === '%') {
        this.setState({ displayValue: prevValue /100 * currentValue });
    }

    this.setState({ operator: null, previousValue: null });
  };

  render() {
    const { displayValue } = this.state;

    return (
      
      <div className="calculator">
        <h1 className='heading'>Calculator</h1>
        <div className="calculator-display">{displayValue}</div>
        <div className="calculator-keypad">
          <div className="calculator-row">
            <button onClick={() => this.inputDigit('7')}>7</button>
            <button onClick={() => this.inputDigit('4')}>4</button>
            <button onClick={() => this.inputDigit('1')}>1</button>
            <button onClick={() => this.inputDigit('00')}>00</button>
            <div className="calculator-row">
            <button onClick={this.clearDisplay}>AC</button>
          </div>
          </div>
          <div className="calculator-row">
            <button onClick={() => this.inputDigit('8')}>8</button>
            <button onClick={() => this.inputDigit('5')}>5</button>
            <button onClick={() => this.inputDigit('2')}>2</button>
            <button onClick={() => this.inputDigit('0')}>0</button>
            <button onClick={()=> this.setOperator('%')}>%</button>
            
          </div>
          <div className="calculator-row">
            <button onClick={() => this.inputDigit('9')}>9</button>
            <button onClick={() => this.inputDigit('6')}>6</button>
            <button onClick={() => this.inputDigit('3')}>3</button>
            <button onClick={this.inputDecimal}>.</button>
          </div>
          <div className="calculator-row">
             <button onClick={() => this.setOperator('/')}>/</button>
            <button onClick={() => this.setOperator('*')}>*</button>
            <button onClick={() => this.setOperator('-')}>-</button>
            <button onClick={() => this.setOperator('+')}>+</button>
            <button onClick={this.calculate} id='equal'>=</button>
          
         
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;



