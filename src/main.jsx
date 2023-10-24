import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import DataContextProvider from './context-api/DataContext'
import UserEmailContextProvider from './context-api/UserEmailContext'
import ColorModeContextProvider from './context-api/ColorModeContext'

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))


reactRootElement.render(
    // <PageWithModes>
    <ColorModeContextProvider>
        <DataContextProvider>
            <UserEmailContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </UserEmailContextProvider>
        </DataContextProvider>
    </ColorModeContextProvider>
    // </PageWithModes >
)
// render -> code to UI
// JSX -> JavaScript and XHTML 
