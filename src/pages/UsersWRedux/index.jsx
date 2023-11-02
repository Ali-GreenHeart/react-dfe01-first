import axios from "axios"
import { useEffect } from "react"
import { connect } from "react-redux"
const _url = "https://jsonplaceholder.typicode.com/users"


const UserWRedux = ({ dispatch, users }) => {

    useEffect(() => {
        axios.get(_url).then(({ data }) => {
            dispatch({ type: 'get_users', payload: data })
        })
    }, [])
    return (
        <>
            {
                users.map(({ id, username, name }) => {
                    return (
                        <div key={id}>
                            <h1>{username}</h1>
                        </div>
                    )
                })
            }
        </>
    )
}
const mapStoreToProps = (s) => s;

export default connect(mapStoreToProps)(UserWRedux);
