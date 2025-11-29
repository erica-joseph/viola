import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from "react";
import './App.css'
import PageOne from './Pages/PageOne.jsx'
import PageTwo from './Pages/PageTwo.jsx'
import PageThree from './Pages/PageThree.jsx'
import PageFour from './Pages/PageFour.jsx'
import PageFive from './Pages/PageFive.jsx'
import PageSix from './Pages/PageSix.jsx'

function Interface() {
  useEffect(() => {
  const first = document.getElementById("one");
  first?.scrollIntoView({ behavior: "instant" });
}, []);
  
  let i = 0;
  const pages = [
    {id: 1, page: "one"},
    {id: 2, page: "two"},
    {id: 3, page: "three"},
    {id: 4, page: "four"},
    {id: 5, page: "five"},
    {id: 6, page: "six"}
  ]
const goToSectionRight = () => {
  const el = document.getElementById(pages[i].page);
  console.log("Right");
  console.log(i);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  if( i < 5){
    i++;
  }
};

const goToSectionLeft = () => {
  const el = document.getElementById(pages[i].page);
  console.log("Left");
  console.log(i);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  if( i > 0){
    i--;
  }
};

  return (
    <>
    <div className='overhead'>
      <div className='page'>
        <PageOne id = "one" />
        <PageTwo id = "two" />
        <PageThree id = "three" />
        <PageFour id = "four" />
        <PageFive id = "five" />
        <PageSix id = "six" />
      </div>
    </div>
    <img onClick={goToSectionLeft} className='leftArrow' src='src/assets/Images/Arrow.svg'/>
    <img onClick={goToSectionRight} className='rightArrow' src='src/assets/Images/Arrow.svg'/>
    </>
  )
}

export default Interface;
