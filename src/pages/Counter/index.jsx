import { useState } from "react"
import { connect } from "react-redux"
import { _Actions } from "../../redux/rootReducer"

const CounterPage = (props) => {
    const [value, setValue] = useState('')
    const { count, dispatch } = props
    return (
        <>
            <h1>counter page</h1>
            <h2>{count}</h2>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value)
                dispatch({ type: _Actions.special, payload: e.target.value })
            }} />
            <button onClick={() => dispatch({ type: _Actions.inc })}>+</button>
            <button onClick={() => dispatch({ type: _Actions.dec })}>-</button>
            <button onClick={() => dispatch({ type: _Actions.special, payload: value })}>special</button>

        </>
    )
}

const mapStoreToProps = (store) => store

// currying
export default connect(mapStoreToProps)(CounterPage)
