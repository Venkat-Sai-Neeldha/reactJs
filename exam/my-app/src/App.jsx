import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
  let [joke,setJoke]=useState({})
  function fun(){
    axios.get("https://official-joke-api.appspot.com/random_joke").then((res)=>{
      setJoke(res.data)
    })
  }
  return(<>
      <button onClick={fun}></button>
      <div className='container'>
        {joke.setup}
        {joke.punchline}
      </div>
  </>)
}
export default App
