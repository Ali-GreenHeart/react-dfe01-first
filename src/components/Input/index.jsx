import { useState, useRef, useEffect } from "react"

export default function Input() {
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()

    // life-cycle 
    useEffect(() => {
        setN1(+localStorage.getItem('n1Value'))
        setN2(+localStorage.getItem('n2Value'))
    }, [])
    useEffect(() => {
        localStorage.setItem('n1Value', n1)
    }, [n1])
    useEffect(() => {
        localStorage.setItem('n2Value', n2)
    }, [n2])

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
