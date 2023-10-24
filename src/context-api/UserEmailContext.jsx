import axios from 'axios'
import { useState, useEffect, createContext } from "react";

export const UserEmailContext = createContext('')
const _url = 'https://jsonplaceholder.typicode.com/users'

const UserEmailContextProvider = ({ children }) => {
    const [email, setEmail] = useState('')

    useEffect(() => {
        axios.get(_url).then(({ data }) => {
            setEmail(data[0].email)
        })
    }, []);

    return (
        <UserEmailContext.Provider value={email}>
            {children}
        </UserEmailContext.Provider>
    )
}

export default UserEmailContextProvider;
