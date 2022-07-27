import './App.css';
import { useState } from "react"
import Counter from './components/counter';

function App() {
  // Trying to get the number button I click to appear on the result bar
  const [result, setResult] = useState("") 
  const [operand, setOperand] = useState("") 
  const [digitOne, setDigitOne] = useState("") 
  const [digitTwo, setDigitTwo] = useState("")

  // after else set digitTwo to a string of new numbers and update the result to include new string
  const onDigitClick = (digit) => {
    if (!operand) {
      setResult(result + digit)
      setDigitOne(digitOne + digit)
    } else {
      const newDigitTwo = digitTwo + digit 
      setResult(`${digitOne} ${operand} ${newDigitTwo}`)
      setDigitTwo(newDigitTwo)
    }
  }

  const onOperandClick = (symbol) => {
    // Updates the result to include an operand
    // Store operand for future use
    setResult(`${digitOne} ${symbol}`)
    setOperand(symbol)
  }

  const onEqualClick = () => {
    // Update the result to the answer of the equation
    const firstDigit = parseInt(digitOne, 10)
    const secondDigit = parseInt(digitTwo, 10)
    switch (operand) {
      case "+":
        setResult(firstDigit + secondDigit)
        break
        case "-":
          setResult(firstDigit - secondDigit)
          break
        case "*":
          setResult(firstDigit * secondDigit)
          break
        case "/":
          setResult(firstDigit / secondDigit)
          break
        default:
          setResult("ERROR")
    }
  }

  const onClearClick = () => {
    setResult("")
    setOperand("")
    setDigitOne("")
    setDigitTwo("")
  }

  return (
    <div className="container">
      {/* <Counter /> */}
      <div className="calculator">
        <span className="result">{result}</span>
        <div className="operations-container">
          <div>
            <button className="btn" onClick={onClearClick}>AC</button>
            <button className="btn">+/-</button>
            <button className="btn">%</button>
            <button className="btn" onClick={() => onOperandClick('/')}>/</button>
          </div>
          <div>
            <button className="btn" onClick={() => onDigitClick("7")}>7</button>
            <button className="btn" onClick={() => onDigitClick("8")}>8</button>
            <button className="btn" onClick={() => onDigitClick("9")}>9</button>
            <button className="btn" onClick={() => onOperandClick('*')}>*</button>
          </div>
          <div>
            <button className="btn" onClick={() => onDigitClick("4")}>4</button>
            <button className="btn" onClick={() => onDigitClick("5")}>5</button>
            <button className="btn" onClick={() => onDigitClick("6")}>6</button>
            <button className="btn" onClick={() => onOperandClick('-')}>-</button>
          </div>
          <div>
            <button className="btn" onClick={() => onDigitClick("1")}>1</button>
            <button className="btn" onClick={() => onDigitClick("2")}>2</button>
            <button className="btn" onClick={() => onDigitClick("3")}>3</button>
            <button className="btn" onClick={() => onOperandClick('+')}>+</button>
          </div>
          <div>
            <button className="btn" onClick={() => onDigitClick("0")}>0</button>
            <button className="btn" onClick={() => onDigitClick("0")}>0</button>
            <button className="btn">.</button>
            <button className="btn" onClick={onEqualClick}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
