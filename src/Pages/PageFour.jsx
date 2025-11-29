//OpenBook

import '../App.css'

function PageFour({id}) {

  return (
    <>
    
    {/* Page Two */}
    <div id={id} className='pageFourContainer'>
      {/* Sketchbook; the base */}
      <div className='sketchbookContainerPageFour'>
        <img className='imageOnePageFour' id = 'sketchbook' style = {{height: "80vh"}} src ='/assets/Images/PageFour_Sketchbook.png'/>
        <div className='sketchbookLabelPageFour'>
          |----- ART -----|
        </div>
      </div>
      <div className='textContainerPageFour'>
        Hobbies
      </div>
      {/*Tennis Ball*/}
      <div className='tennisContainerPageFour'>
        <img className='imageTennisPageFour' style = {{height: "40vh"}} src ='/assets/Images/PageFour_TennisBall.png'/>
        <div className='tennisLabelPageFour'>
          |----- TENNIS -----|
        </div>
      </div>
      {/* Binocular */}
      <div className='binocularContainerPageFour' id = 'binoculars'>
        <img className='imagePageFour' style = {{height: "40vh"}} src ='/assets/Images/PageFour_Binoculars.png'/>
        <div className='binocularLabelPageFour'>
          |----- BIRD WATCHING -----|
        </div>
      </div>
      {/* Tasse */}
      <div className='potteryContainerPageFour' id = 'tasse'>
        <img className='imageOnePageFour' style = {{height: "40vh"}} src ='/assets/Images/PageFour_Tasse.png'/>
        <div className='potteryLabelPageFour'>
          |----- POTTERY -----|
        </div>
      </div>
      {/* Matcha*/}
      <div className='homecafeContainerPageFour' id = 'matcha'>
        <img className='imageTwoPageFour' style = {{height: "100vh"}} src ='/assets/Images/PageFour_Matcha.png'/>
        <div className='homecafeLabelPageFour'>
          |----- HOME CAFE -----|
        </div>
      </div>
    </div>
    </>
  )
}

export default PageFour;
