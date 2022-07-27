import './App.css';
import {useState} from "react"
import Counter from './components/counter';

function App() {
  const [result, setResult] = useState("0")
  const [digitOne, setDigitOne] = useState("")
  const [digitTwo, setDigitTwo] = useState("")
  const [operand, setOperand] = useState(null)

  const onDigitClick = (digit) => {
    if (!operand) {
      const newDigitOne = digitOne + digit
      setDigitOne(newDigitOne)
      setResult(newDigitOne)
    } else {
      const newDigitTwo = digitTwo + digit
      setDigitTwo(newDigitTwo)
      setResult(`${digitOne} ${operand} ${newDigitTwo}`)
    }
  }

  const onOperandClick = (newOperand) => {
    setOperand(newOperand)
    setResult(`${digitOne} ${newOperand}`)
  }

  const onEqualsClick = () => {
    switch (operand) {
      case "+":
        const added = +digitOne + +digitTwo
        setResult(added)
        break
      case "-":
        setResult(+digitOne - +digitTwo)
        break
      default:
        return
    }
  }

  const onClear = () => {
    setResult("0")
    setDigitOne("")
    setDigitTwo("")
    setOperand(null)
  }



  return (
    <div className="container">
      {/* <Counter /> */}
      <div className="calculator">
        <span className="result">{result}</span>
        <div className="operations-container">
          <div>
            <button className="btn" onClick={onClear}>AC</button>
            <button className="btn">+/-</button>
            <button className="btn">%</button>
            <button className="btn" onClick={() => onOperandClick("/")}>/</button>
          </div>
          <div>
            <button className="btn" onClick={() => onDigitClick(7)}>7</button>
            <button className="btn" onClick={() => onDigitClick(8)}>8</button>
            <button className="btn" onClick={() => onDigitClick(9)}>9</button>
            <button className="btn" onClick={() => onOperandClick("*")}>*</button>
          </div>
          <div>
            <button className="btn" onClick={() => onDigitClick(4)}>4</button>
            <button className="btn" onClick={() => onDigitClick(5)}>5</button>
            <button className="btn" onClick={() => onDigitClick(6)}>6</button>
            <button className="btn" onClick={() => onOperandClick("-")}>-</button>
          </div>
          <div>
            <button className="btn" onClick={() => onDigitClick(1)}>1</button>
            <button className="btn" onClick={() => onDigitClick(2)}>2</button>
            <button className="btn" onClick={() => onDigitClick(3)}>3</button>
            <button className="btn" onClick={() => onOperandClick("+")}>+</button>
          </div>
          <div>
            <button className="btn" onClick={() => onDigitClick(0)}>0</button>
            <button className="btn" onClick={() => onDigitClick(0)}>0</button>
            <button className="btn">.</button>
            <button className="btn" onClick={onEqualsClick}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
