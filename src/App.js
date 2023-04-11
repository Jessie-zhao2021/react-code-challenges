import './App.css'
import DarkMode from './02-dark-mode/DarkMode'
import {useState} from "react"

function App () {
  const [Mode, setMode] = useState(true)
  function darkMode(){
    setMode(true)
  }
  function lightMode(){
    setMode(false)
  }
  return (
    // <div style={{backgroundColor: Mode ? "black" : "white"}}>
    <div className={Mode ? "dark-mode" : ""}>
      <DarkMode darkMode={darkMode} lightMode={lightMode}/>
      wertyui
    </div>
  )
}

export default App
