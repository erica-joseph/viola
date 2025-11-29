//OpenBook

import '../App.css'

import sketchbook from '../assets/Images/PageFour_Sketchbook.png'
import tennis from '../assets/Images/PageFour_TennisBall.png'
import binocular from '../assets/Images/PageFour_Binoculars.png'
import tasse from '../assets/Images/PageFour_Tasse.png'
import matcha from '../assets/Images/PageFour_Matcha.png'

function PageFour({id}) {

  return (
    <>
    
    {/* Page Two */}
    <div id={id} className='pageFourContainer'>
      {/* Sketchbook; the base */}
      <div className='sketchbookContainerPageFour'>
        <img className='imageOnePageFour' id = 'sketchbook' style = {{height: "80vh"}} src = {sketchbook} />
        <div className='sketchbookLabelPageFour'>
          |----- ART -----|
        </div>
      </div>
      <div className='textContainerPageFour'>
        Hobbies
      </div>
      {/*Tennis Ball*/}
      <div className='tennisContainerPageFour'>
        <img className='imageTennisPageFour' style = {{height: "40vh"}} src = {tennis} />
        <div className='tennisLabelPageFour'>
          |----- TENNIS -----|
        </div>
      </div>
      {/* Binocular */}
      <div className='binocularContainerPageFour' id = 'binoculars'>
        <img className='imagePageFour' style = {{height: "40vh"}} src = {binocular} />
        <div className='binocularLabelPageFour'>
          |----- BIRD WATCHING -----|
        </div>
      </div>
      {/* Tasse */}
      <div className='potteryContainerPageFour' id = 'tasse'>
        <img className='imageOnePageFour' style = {{height: "40vh"}} src = {tasse} />
        <div className='potteryLabelPageFour'>
          |----- POTTERY -----|
        </div>
      </div>
      {/* Matcha*/}
      <div className='homecafeContainerPageFour' id = 'matcha'>
        <img className='imageTwoPageFour' style = {{height: "100vh"}} src = {matcha} />
        <div className='homecafeLabelPageFour'>
          |----- HOME CAFE -----|
        </div>
      </div>
    </div>
    </>
  )
}

export default PageFour;
