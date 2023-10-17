import { useEffect, useState } from "react";

function timing(_setTime) {
    setInterval(() => {
        _setTime((t) => t === 0 ? 0 : t - 1)
    }, 1000);
}

const TimeOut = ({ initial }) => {
    const [time, setTime] = useState(initial)
    useEffect(() => {
        timing(setTime)
    }, [])
    useEffect(() => {
        console.log('rendered')
    }, [time])
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>{time}</h1>
        </>
    )
}
export default TimeOut
