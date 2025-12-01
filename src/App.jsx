import { useState, useRef, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Model from './Model.jsx'
import Controls from './Controls.jsx'
import Interface from './Interface.jsx'
import './App.css'
import html2canvas from "html2canvas";

import theNoise from './assets/Images/Gradient_Noise_001.svg'
import portrait from './assets/Images/LandscapeIcon.svg'
import logo from './assets/Images/KEF_Logo_Outline_White.svg'

function App() {
  const [count, setCount] = useState(0)
  const [pose, setPose] = useState("Music");
  const [angle, setAngle] = useState("0"); 
  const modelRef = useRef();  
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  const handleReload = () => {
    window.location.reload();
  };

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
const [modelKey, setModelKey] = useState(0);

useEffect(() => {
  const handleResize = () => setModelKey(k => k + 1);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <>
    <div style={{
      display: !isPortrait && isModelLoaded ? 'block' : 'none',
      transition: "opacity 0.6s",
}}>
    <div className='overhead'>
      <div className ="model">
       <Model key={modelKey}  onLoaded={() => setIsModelLoaded(true)}  ref={modelRef} currentPose={pose} currentAngle ={angle}/>
      </div>
      <div className ="interface">
       <Interface/>
      </div>      
    </div>
    <div className ="controls">
      <Controls changePose={setPose} changeAngle ={setAngle}/>
    </div>

    </div>

    {isPortrait && (
      <div className="portraitScreen">
        <img className='logo' src = {portrait} />
        <h1>Please rotate your device and refresh</h1>
      </div>
    )}

    {!isPortrait && !isModelLoaded && (
      <div className="loadingScreen">
        <img className='logo' src = {logo} />
          <h1>Loading…</h1>
      </div>
    )}
    <div className='noise' style={{ backgroundImage: `url(${theNoise})` }}>
    </div> 
  </>
  )
}

export default App;
