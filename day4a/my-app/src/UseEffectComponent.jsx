import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function UseEffectComponent(){
    const navigate = useNavigate();
    function back(){
        navigate("/dashboard")
    }
    const [count, setCount] = useState(0);
    
      useEffect(() => {
        console.log("Count updated:", count);
      }, [count]);
    
    return(<>
    <button onClick={back} className="nav-button">back to home</button>
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
    </>)
}
export default UseEffectComponent