import React from 'react'
import { useState } from 'react';
import Birthday from './TabComponents/Birthday';
import Anniversary from './TabComponents/Anniversary';
import Congratulations from './TabComponents/Congratulations';
import LoveNRomance from './TabComponents/LoveNRomance';
import ThankYou from './TabComponents/Thankyou';
import './Tabdiv.css'
function Tabdiv() {
    const [activeComponent, setActiveComponent] = useState("Component1");
    const getStyle = (componentName) => {
      return {
        backgroundColor: activeComponent === componentName ? "#f7f8f1" : "transparent",
        padding: "5px 30px 30px 30px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "0.3s",
        marginBottom:'0px',
        width:'200px',
        boxShadow:' 0 0px 0px 1px #e9e8e8',
        border:'none'
      };
    };
  return (
    <>
    <div className="icons1">
        <div className='one' style={getStyle("Component1")} onClick={() => setActiveComponent("Component1")}>
          <div className="img">
            <img src="https://i1.fnp.com/assets/images/custom/cake.png" alt="aa" />
          </div>
          <div className="text">Birthday</div>
        </div>

        <div className='one'style={getStyle("Component2")} onClick={() => setActiveComponent("Component2")}>
        <div className="img">
            <img src="https://i1.fnp.com/assets/images/custom/2.png" alt="aa" />
          </div>
          <div className="text">Anniversary</div>
        </div>

        <div className='one' style={getStyle("Component3")} onClick={() => setActiveComponent("Component3")}>
        <div className="img">
            <img src="https://i1.fnp.com/assets/images/custom/3.png" alt="aa" />
          </div>
          <div className="text">congratulations</div>
        </div>


        <div className='one' style={getStyle("Component4")} onClick={() => setActiveComponent("Component4")}>
        <div className="img">
            <img src="https://i1.fnp.com/assets/images/custom/lovely.png" alt="aa" />
          </div>
          <div className="text">Love n Romance</div>
        </div>


        <div className='one' style={getStyle("Component5")} onClick={() => setActiveComponent("Component5")}>
        <div className="img">
            <img src="https://i1.fnp.com/assets/images/custom/4.png" alt="aa" />
          </div>
          <div className="text">Thank You</div>
        </div>
    </div>
    <div className="component-section" style={{ marginTop: '20px',backgroundColor:'#f7f8f1',paddingTop:'10px',marginTop:'0px' ,borderRadius:'10px'}}>
        {activeComponent === "Component1" && <Birthday/>}
        {activeComponent === "Component2" && <Anniversary/>}
        {activeComponent === "Component3" && <Congratulations/>}
        {activeComponent === "Component4" && <LoveNRomance/>}
        {activeComponent === "Component5" && <ThankYou/>}
      </div>
    </>
  )
}

export default Tabdiv