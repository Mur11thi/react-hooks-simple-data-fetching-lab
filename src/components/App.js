// create your App component here
import { useState, useEffect } from "react";
import React from "react";
function App(){
const [image,setImage]=useState(null)
const [isLoaded,setIsLoaded]=useState(false)
useEffect(()=>{
 fetch("https://dog.ceo/api/breeds/image/random")
 .then(res=>res.json())
 .then(data=>{setImage(data.message)
setIsLoaded(true)})   
},[])
if (!isLoaded) return <p>Loading...</p>
return(
    <>
    <img src={image} alt="A Random Dog"></img>
    </>
)
}
export default App
