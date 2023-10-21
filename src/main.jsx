import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import "./index.css"

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))


reactRootElement.render(
    // <PageWithModes>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </PageWithModes >
)
// render -> code to UI
// JSX -> JavaScript and XHTML 
