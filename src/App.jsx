import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <div>
        <Header
          title="aodzvsdijcxvgsvgvh"
          ad='ali'
          isMain
          onClick={() => console.log('clicked')}
        />
        <Header withReact ad="sada" title="react typescript developer" />
        {/* {Header("ali", "")} */}
        {/* {Header("sada", "react typescript developer")} */}
      </div>
    </>
  )
}

export default App
