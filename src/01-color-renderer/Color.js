export default function Color ({ hex, name, makeMode}) {
  // function handleClick(){
  //   makeMode(hex)
  //   console.log(hex)
  // }
  return (
    <div
      className='color-square' style={{ backgroundColor: hex }} onClick={()=>makeMode(hex)}
    >
      <h2>{name}</h2>
    </div>
  )
}
   