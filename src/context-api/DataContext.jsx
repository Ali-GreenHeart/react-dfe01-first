import { createContext } from "react";

export const DataContext = createContext({})

const data = { name: 'alion', surname: 'js' }
/* children:  componentin icerisine yazdigim elementler */
const DataContextProvider = ({ children }) => {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
