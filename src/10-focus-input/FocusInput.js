import { useRef } from "react"
import { useEffect } from "react"

export default function FocusInput() {
  const focusedInput = useRef()
  useEffect(()=>{
    focusedInput.current.focus()
    console.log({focusedInput})

  },[])
  return (
    <div>
      <label htmlFor='focused-input'>Focus me on page load!</label>
      <input ref={focusedInput} name='focused-input' placeholder="focus"></input>
    </div>
  )
}
