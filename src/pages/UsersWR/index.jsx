import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import PageContainer from "../../components/PageContainer"
import { v4 } from 'uuid'
const _url = "https://jsonplaceholder.typicode.com/users"

const USERS_ACTIONS = {
    get_users: 0,
    add_user: 1,
    rm_last_user: 2,
    rm_user: 3
}

const reducer = (store, action) => {
    switch (action.type) {
        case USERS_ACTIONS.get_users:
            return action.payload;
        case USERS_ACTIONS.add_user:
            const username = prompt('enter new username')
            const name = prompt('enter new name')
            const id = v4()
            return [...store, { username, name, id }]
        case USERS_ACTIONS.rm_last_user:
            let a = [...store]
            a.pop()
            return a;
        case USERS_ACTIONS.rm_user:
            const newUsers = store.filter((us) => us.id !== action.payload)
            return newUsers;
        default:
            return store;
    }
}

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
                            <h1>{username} -  {name} -  <button onClick={() => dispatch({ type: USERS_ACTIONS.rm_user, payload: id })}>❌</button></h1>
                        </div>
                    )
                })
            }
        </PageContainer>
    )
}

export default UserWR;
