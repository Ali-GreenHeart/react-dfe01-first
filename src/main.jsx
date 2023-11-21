import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ColorModeContextProvider from './context-api/ColorModeContext'
import DataContextProvider from './context-api/DataContext'
import UserEmailContextProvider from './context-api/UserEmailContext'
import store from './store'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

// const _store = createStore(rootReducer)

reactRootElement.render(
    // <PageWithModes>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ColorModeContextProvider>
                <DataContextProvider>
                    <UserEmailContextProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </UserEmailContextProvider>
                </DataContextProvider>
            </ColorModeContextProvider>
        </ThemeProvider>
    </Provider>
    // </PageWithModes >
)
// render -> code to UI
// JSX -> JavaScript and XHTML 
