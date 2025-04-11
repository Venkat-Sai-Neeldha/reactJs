import React from 'react'
import '../styling/Nav.css'

function Nav() {
  return (
  <div className="nav">
    <div className="navone">
         <div className="search">
        <p>what are you looking for?</p>
        <div id="icon">
            <select>
                <option>shots</option>
            </select>
            <img src="data:image/png;base64,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" alt="aa" />
        </div>
    </div>
    <div className="options">
        <select>
            <option>Explore</option>
        </select>
        <select>
            <option>Hire a designer</option>
        </select>
        <p>Find jobs</p>
        <p>blog</p>
    </div>
    </div>
    <div className="nav2">
        <button>sign up</button>
        <button id='login'>Log in</button>
    </div>
   
  </div>
  )
}

export default Nav