import { useState, useRef } from "react"

export default function Input() {
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')

    const inputRef = useRef()
    return (
        <>
            <input
                ref={inputRef}
                type="text"
                value={n1}
                onChange={(e) => {
                    setN1(+e.target.value)
                }}
            />
            <input
                value={n2}
                type="text"
                onChange={(e) => {
                    setN2(+e.target.value)
                }}
            />
            <button
                onClick={() => {
                    // console.log(inputRef.current.value)
                    inputRef.current.focus()
                }}
            >add</button>
            <p>{n1 + n2}</p>
        </>
    )
}
