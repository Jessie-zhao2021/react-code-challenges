export default function DarkMode (props) {

  return (
    <div className='page'>
      <button className='dark-mode-button' onClick = {props.darkMode}>Dark Mode</button>
      <button className='light-mode-button' onClick = {props.lightMode}>Light Mode</button>
    </div>
  )
}
