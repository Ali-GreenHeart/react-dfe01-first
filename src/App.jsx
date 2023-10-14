import React, { useState } from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import Input from './components/Input'
import Users from './components/Users'
function App() {
  const [show, setShow] = useState(false)
  return (
    <>
      {/* <Input /> */}
      <button onClick={() => setShow(!show)}>show hide componenet</button>
      {
        show && <Users />
      }
      {/* <Counter />
      <Header
        title="aodzvsdijcxvgsvgvh"
        ad='ali'
        isMain
        onClick={() => console.log('clicked')}
      />
      <Header withReact ad="sada" title="react typescript developer" /> */}
    </>
  )
}

export default App
