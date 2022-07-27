import { useState } from "react"

export default function Counter () {
    const [result, setResult] = useState(0)

    const add = () => {
        const newResult = result + 1
        setResult(newResult)
    }

    const subtract = () => {
        const newResult = result - 1
        setResult(newResult)
    }
    return(
        <div>
            <button onClick={subtract}>-</button>
            <span>{result}</span>
            <button onClick={add}>+</button>
        </div>
    )
}