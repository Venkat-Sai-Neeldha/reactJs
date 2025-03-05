import { useState } from "react"
import Onchange from "./Onchange";
import Onblur from "./Onblur";
import Onmouseover from "./Onmouseover";
import Onkeypress from "./Onkeypress";
import "./App.css"

function App(){
  let [Count , setCount]=useState(0);
  let [c1,setC1]=useState(0);
  let [c2,setC2]=useState(0);
  let[c3,setC3]=useState(0);
  let fun=(e)=>{
     setCount(e.target.value.length)
  }
  let fun1=(e)=>{
    setC1(e.target.value.length)
  }
  let fun2=(e)=>{
    setC2(e.target.value.length)
  }
  let fun3=(e)=>{
    setC3(e.target.value.length)
  }
  return(<>
  <h1>Events and states</h1>
   <p>on change event</p>
  <Onchange fun={fun} />
  <div className="one">count is {Count}</div>
  <p>on blur event</p>
  <Onblur fun1={fun1}/>
  <div className="two">count is {c1}</div>
  <p>on onMouseOver event</p>
  <Onmouseover fun2={fun2}/>
  <div className="three">count is {c2}</div>
  <p>on keydown event</p>
  <Onkeypress fun3={fun3}/>
  <div className="four">count is {c3}</div>
  </>)
}
export default App
