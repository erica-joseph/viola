import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Model from './Model.jsx'
import Controls from './Controls.jsx'
import Interface from './Interface.jsx'
import './App.css'
import html2canvas from "html2canvas";

function App() {
  const [count, setCount] = useState(0)
  const [pose, setPose] = useState("Music");
  const [angle, setAngle] = useState("180"); 
  const modelRef = useRef();  
  const [loading, setLoading] = useState(true);


  return (
    <>
    <div className='overhead'>

      <div className ="model">
       <Model ref={modelRef} currentPose={pose} currentAngle ={angle}/>
      </div>


      <div className ="interface">
       <Interface/>
      </div>      

    </div>
  <div className ="controls">
    <Controls changePose={setPose} changeAngle ={setAngle}/>
  </div>
  <div className='noise'>
    
  </div>
  </>
  )
}

export default App;
