import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
function App() {
  return (
    <>
      <Counter />
      <Header
        title="aodzvsdijcxvgsvgvh"
        ad='ali'
        isMain
        onClick={() => console.log('clicked')}
      />
      <Header withReact ad="sada" title="react typescript developer" />
    </>
  )
}

export default App
