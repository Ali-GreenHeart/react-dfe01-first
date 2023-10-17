import React from 'react'
import TimeOut from './components/TimeOut'
import "./App.css"
import "./index.css"
function App() {
  // const [show, setShow] = useState(false)
  return (
    <>
      <TimeOut initial="4" />
      <TimeOut initial="30" />
      <TimeOut initial="30" />
      <TimeOut initial="30" />
      {/* <Input /> */}
      {/* <button onClick={() => setShow(!show)}>show hide componenet</button>
      {
        show && <Users />
      } */}
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
