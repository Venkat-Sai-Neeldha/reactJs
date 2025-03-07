
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";
function WithUseCallback (){
    const navigate = useNavigate();
function back(){
    navigate("/dashboard")
}
   const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
return(<>
<button onClick={back} className="nav-button">back to home</button>
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
</>)
}
export default WithUseCallback 