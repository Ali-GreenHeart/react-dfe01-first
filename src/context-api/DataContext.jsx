import { createContext } from "react";

export const DataContext = createContext({})

const data = { name: 'eziz', surname: 'xan' }
/* children:  componentin icerisine yazdigim elementler */
const DataContextProvider = ({ children }) => {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
