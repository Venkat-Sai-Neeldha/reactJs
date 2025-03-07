import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    console.log("Navigating to dashboard...");
    navigate("/dashboard");
  };

  const handleUseMemoClick = () => {
    console.log("Navigating to useMemo example...");
    navigate("/use-memo");
  }; 

  const handleUseCallbackClick = () => {
    console.log("Navigating to useCallback example...");
    navigate("/dashboard/use-callback");
  };

  return (
    <div className="card">
      
      <nav>
        <ul>
          <li>
            <button 
              onClick={handleHomeClick}
              className="nav-button home-button"
            >
              Dashboard
            </button>
          </li>
          <li>
            <Link to="/use-effects">useEffect Example</Link>
          </li>
          <li>
            <button 
              onClick={handleUseMemoClick}
              className="nav-button"
            >
              useMemo Example
            </button>
          </li>
          <li>
            <button 
              onClick={handleUseCallbackClick}
              className="nav-button"
            >
              useCallback Example
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
