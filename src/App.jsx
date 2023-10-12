import React from 'react'
import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import Modal from './components/Modal/Index'
function App() {
  return (
    <>
      {/* <Counter />
      <Header
        title="aodzvsdijcxvgsvgvh"
        ad='ali'
        isMain
        onClick={() => console.log('clicked')}
      />
      <Header withReact ad="sada" title="react typescript developer" />
      { {Header("ali", "")} }
      {Header("sada", "react typescript developer")} */}
      <Modal />
    </>
  )
}

export default App
