import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* re-render */}
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>reset</button>
            <button onClick={() => console.log(count)}>console</button>
            <button onClick={() => setCount(+prompt('ededi daxil edin: '))}>special</button>
        </div>
    )
}
