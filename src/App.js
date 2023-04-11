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
  function changeMode(target) {
    if (target==='dark') setMode(true)
    else setMode(false)
  }
  return (
    // <div style={{backgroundColor: Mode ? "black" : "white"}}>
    <div className={Mode ? "dark-mode" : ""}>
      <DarkMode toggle={changeMode} darkMode={darkMode} lightMode={lightMode}/>
      wertyui
    </div>
  )
}

export default App
