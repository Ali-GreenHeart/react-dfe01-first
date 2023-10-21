import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../Loading"
import PageContainer from "../PageContainer"

const _URL = 'https://jsonplaceholder.typicode.com/users'

const UserItem = ({ name, username }) => {
    return (
        <>
            <h1>{name}</h1>
            <p>{username}</p>
            <hr />
        </>
    )
}
// atomar
export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log('dostlar men geldim...');
        (async () => {
            const { data } = await axios.get(_URL)
            setUsers(data)
        })()
        return () => {
            console.log('dostlar men oldum...')
        }
    }, [])

    if (users.length === 0) {
        return <Loading />
    }

    return (
        <PageContainer>
            {
                users.map(({ id, name, username }) => {
                    return <UserItem key={id} name={name} username={username} />
                })
            }
        </PageContainer>
    )
}
