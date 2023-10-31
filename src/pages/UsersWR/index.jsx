import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import PageContainer from "../../components/PageContainer"
import { v4 } from 'uuid'
const _url = "https://jsonplaceholder.typicode.com/users"

const reducer = (users, action) => {
    switch (action.type) {
        case 'get_users':
            return action.payload;
        case 'add_user':
            const username = prompt('enter new username')
            const name = prompt('enter new name')
            const id = v4()
            return [...users, { username, name, id }]
        case "rm_last_user":
            let a = [...users]
            a.pop()
            return a;
        case 'rm_user':
            const newUsers = users.filter((us) => us.id !== action.payload)
            return newUsers;
    }
}

const UserWR = () => {
    const [users, dispatch] = useReducer(reducer, [])
    useEffect(() => {
        axios.get(_url).then(({ data }) => {
            dispatch({ payload: data, type: 'get_users' })
        })
    }, [])
    return (
        <PageContainer>
            <button onClick={() => dispatch({ type: 'add_user' })}>add a user</button>
            <button onClick={() => dispatch({ type: 'rm_last_user' })}>remove last user</button>
            {
                users.map(({ id, username, name }) => {
                    return (
                        <div key={id}>
                            <h1>{username} -  {name} -  <button onClick={() => dispatch({ type: 'rm_user', payload: id })}>❌</button></h1>
                        </div>
                    )
                })
            }
        </PageContainer>
    )
}

export default UserWR;
