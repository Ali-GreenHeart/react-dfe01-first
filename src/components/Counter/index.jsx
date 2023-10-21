import { useState } from "react"
import PageContainer from "../PageContainer"

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <PageContainer>
            {/* re-render */}
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>reset</button>
            <button onClick={() => console.log(count)}>console</button>
            <button onClick={() => setCount(+prompt('ededi daxil edin: '))}>special</button>
        </PageContainer>
    )
}
