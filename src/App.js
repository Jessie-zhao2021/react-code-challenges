import './App.css'
import ColorRenderer from './01-color-renderer/ColorRenderer'
import {useState} from "react"

function App () {
  const[color, setColor] = useState("black")
  
  return (
    <div className='App' style={{backgroundColor:color}}>
      <ColorRenderer colorRendererPropSetColor={setColor}/>
    </div>
  )
}

export default App
