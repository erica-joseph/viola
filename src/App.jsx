import { useState, useRef, useEffect} from 'react'
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
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
  function checkRatio() {
    const h = window.innerHeight;
    const w = window.innerWidth;

    // portrait if h/w > 1.5 (i.e. 3:2)
    setIsPortrait(h / w > 1.5);
  }

  checkRatio(); 
  window.addEventListener("resize", checkRatio);

  return () => window.removeEventListener("resize", checkRatio);
}, []);


  return (
    <>
    <div style={{
      display: !isPortrait && isModelLoaded ? 'block' : 'none',
      transition: "opacity 0.6s",
}}>
    <div className='overhead'>
      <div className ="model">
       <Model onLoaded={() => setIsModelLoaded(true)}  ref={modelRef} currentPose={pose} currentAngle ={angle}/>
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
    </div>

    {isPortrait && (
      <div className="portraitScreen">
        <img className='logo' src ="src/assets/Images/LandscapeIcon.svg" />
        <h1>Please rotate your device</h1>
      </div>
    )}

    {!isPortrait && !isModelLoaded && (
      <div className="loadingScreen">
        <img className='logo' src ="src/assets/Images/KEF_Logo_Outline_White.svg" />
          <h1>Loading…</h1>
      </div>
    )}

  </>
  )
}

export default App;
