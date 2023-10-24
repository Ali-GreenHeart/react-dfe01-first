import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../Loading"
import PageContainer from "../PageContainer"

// const _URL = 'https://jsonplaceholder.typicode.com/users'
const _URL = 'https://api.github.com/users/Ali-GreenHeart'

const UserItem = ({ id, name, username }) => {
    return (
        <Link to={`/users/${id}`}>
            <h1>{name}</h1>
            <p>{username}</p>
            <hr />
        </Link>
    )
}
// atomar
export default function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        console.log('dostlar men geldim...');
        (async () => {
            const { data } = await axios.get(_URL)
            setUsers(data)
            setLoading(false)
        })()
        return () => {
            console.log('dostlar men oldum...')
        }
    }, [])

    return (
        <PageContainer>
            {
                loading && <Loading />
            }
            {
                users.map(({ id, name, username }) => {
                    return <UserItem key={id} id={id} name={name} username={username} />
                })
            }
        </PageContainer>
    )
}
