import { useState, useEffect } from 'react';
import './App.css';
import PageOne from './Pages/PageOne.jsx';
import PageTwo from './Pages/PageTwo.jsx';
import PageThree from './Pages/PageThree.jsx';
import PageFour from './Pages/PageFour.jsx';
import PageFive from './Pages/PageFive.jsx';
import PageSix from './Pages/PageSix.jsx';
import Model from './Model.jsx'

function Interface() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = [
    { id: 0, page: 'one' },
    { id: 1, page: 'two' },
    { id: 2, page: 'three' },
    { id: 3, page: 'four' },
    { id: 4, page: 'five' },
    { id: 5, page: 'six' },
  ];

  // Scroll to the first section on mount
  useEffect(() => {
    const first = document.getElementById('one');
    first?.scrollIntoView({ behavior: 'auto', inline: 'start', block: 'nearest' });
  }, []);

  const goToSectionRight = () => {
    const nextIndex = Math.min(currentIndex + 1, pages.length - 1);
    const el = document.getElementById(pages[nextIndex].page);
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setCurrentIndex(nextIndex);
  };

  const goToSectionLeft = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    const el = document.getElementById(pages[prevIndex].page);
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <div className='overhead'>
        <div className='page'>
          <PageOne id='one' />
          <PageTwo id='two' />
          <PageThree id='three' />
          <PageFour id='four' />
          <PageFive id='five' />
          <PageSix id='six' />
        </div>
      </div>
      <img
        onClick={goToSectionLeft}
        className='leftArrow'
        src='/src/assets/Images/Arrow.svg'
      />
      <img
        onClick={goToSectionRight}
        className='rightArrow'
        src='/src/assets/Images/Arrow.svg'
      />
    </>
  );
}

export default Interface;
