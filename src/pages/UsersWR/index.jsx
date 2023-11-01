import axios from "axios"
import { useEffect, useReducer } from "react"
import PageContainer from "../../components/PageContainer"
import { USERS_ACTIONS, reducer } from "./reducer"
import Modal from "../../components/Modal"
const _url = "https://jsonplaceholder.typicode.com/users"


const UserWR = () => {
    const [users, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        axios.get(_url).then(({ data }) => {
            dispatch({ payload: data, type: USERS_ACTIONS.get_users })
        })
    }, [])
    return (
        <PageContainer>

            <button onClick={() => dispatch({ type: USERS_ACTIONS.add_user })}>add a user</button>
            <button onClick={() => dispatch({ type: USERS_ACTIONS.rm_last_user })}>remove last user</button>
            {
                users.map(({ id, username, name }) => {
                    return (
                        <div key={id}>
                            <h1>{username} -  {name} -
                                <Modal
                                    onSubmitCallback={(value) => dispatch({ type: USERS_ACTIONS.edit_user, payload: { id, value } })}
                                />


                                -
                                <button onClick={() => dispatch({ type: USERS_ACTIONS.rm_user, payload: id })}>❌</button></h1>
                        </div>
                    )
                })
            }
        </PageContainer>
    )
}

export default UserWR;
