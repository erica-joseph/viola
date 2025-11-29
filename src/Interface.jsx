import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageOne from './Pages/PageOne.jsx'
import PageTwo from './Pages/PageTwo.jsx'
import PageThree from './Pages/PageThree.jsx'
import PageFour from './Pages/PageFour.jsx'
import PageFive from './Pages/PageFive.jsx'

function Interface() {


  return (
    <>
    <div className='overhead'>
      <div className='page'>
        <PageOne id = "one" />
        <PageTwo id = "two" />
        <PageThree id = "three" />
        <PageFour id = "four" />
        <PageFive id = "five" />
      </div>
    </div>
    </>
  )
}

export default Interface;
