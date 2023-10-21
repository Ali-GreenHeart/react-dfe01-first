import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const _url = 'https://jsonplaceholder.typicode.com/users'
const UserDetails = ({ }) => {
    const [user, setUser] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(_url + '/' + id)
            .then(({ data }) => {
                setUser(data)
            })
    }, [])

    return (
        <div>
            <h1>{user.username}</h1>
            <p>Company: {user.company?.name}</p>
        </div>
    )
}
export default UserDetails
