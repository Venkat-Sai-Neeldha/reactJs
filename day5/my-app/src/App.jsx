import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
  let [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      setPosts(res.data)
    })
  },[])
  return(<>
  <ul>
      {posts.map((obj) => (
        <li key={obj.id}>{obj.name}</li>
      ))}
    </ul>
  </>)
}

export default App
