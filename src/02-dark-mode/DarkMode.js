export default function DarkMode (props) {


  return (
    <div className='page'>
      <button className='dark-mode-button' onClick = {()=>props.toggle('dark')}>Dark Mode</button>
      <button className='light-mode-button' onClick = {()=>props.toggle('light')}>Light Mode</button>
    </div>
  )
}
