import { useState, useEffect } from "react"

export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  const[image, setImage] = useState("https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg")
  
  // const getImg = async () => {
  //   const response = await fetch('https://dog.ceo/api/breeds/image/random')
  //   const dog = await response.json()
  //   return dog.message
  // }

  // useEffect(() => {
  //   getImg().then(image => setDogPic(image))
  // }, [])

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
     .then(res=>res.json())
     .then(data=>setImage(data.message))
  },[])
  
  function handleClick(){
    // setImage("https://images.dog.ceo/breeds/doberman/n02107142_3709.jpg")
    fetch("https://dog.ceo/api/breeds/image/random")
     .then(res=>res.json())
     .then(data=>setImage(data.message))
    console.log("clicked!")
  }
  

  return (
    <div className='dog-pics'>
      <img src={image} alt="pic"/>
      <button onClick={handleClick}>🐶</button>
      {/* <button onClick={async e => setImage(await getImg())}>🐶</button> */}

    </div>
  )
}
