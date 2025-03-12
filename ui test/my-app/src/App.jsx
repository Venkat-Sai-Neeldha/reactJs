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
      <button onClick={fun}>click me</button>
      <div className='container'>
      <b> setup:</b> {joke.setup}
       <br />
      <b>punchline:</b>  {joke.punchline}
      </div>
  </>)
}
export default App
/* <ul>
      {posts.map((obj) => (
        <li key={obj.id}>{obj.name}</li>
      ))}
    </ul> */