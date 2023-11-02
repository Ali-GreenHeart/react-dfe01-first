import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import DataContextProvider from './context-api/DataContext'
import UserEmailContextProvider from './context-api/UserEmailContext'
import ColorModeContextProvider from './context-api/ColorModeContext'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

const _store = createStore(rootReducer)

reactRootElement.render(
    // <PageWithModes>
    <Provider store={_store}>
        <ColorModeContextProvider>
            <DataContextProvider>
                <UserEmailContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </UserEmailContextProvider>
            </DataContextProvider>
        </ColorModeContextProvider>
    </Provider>
    // </PageWithModes >
)
// render -> code to UI
// JSX -> JavaScript and XHTML 
