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
  const [angle, setAngle] = useState("0"); 
  const modelRef = useRef();  

  const takeSnapshot = () => {
    if (!modelRef.current || !modelRef.current.renderer) return;

    const canvas = modelRef.current.renderer.domElement;
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "snapshot.png";
    link.click();
  };  

  return (
    <>
    <div className='overhead'>
{/*
      <div className ="model">
       <Model ref={modelRef} currentPose={pose} currentAngle ={angle}/>
      </div>
*/}
      <div className ="interface">
       <Interface/>
      </div>      

{/*
      <div className ="controls">
      <Controls changePose={setPose} changeAngle ={setAngle}/>
      <button onClick={() => takeSnapshot()}>Take Snapshot</button>
      </div>
*/}
    </div>
    </>
  )
}

export default App;
