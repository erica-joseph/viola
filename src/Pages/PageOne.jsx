//Cover

import '../App.css'

function PageOne({id}) {

  return (
    <>
    
    {/* Page One */}
    <div id={id} className='pageOneContainer'>
      {/* Row 1 */}
      <div className='rowOnePageOne'>
        <img src = '/src/assets/Images/Viola_Images_002.png' className='headerPageOne'/>
      </div>

      {/* Row 2 */}
      <div className='rowTwoPageOne'>
        <div className='nameLPageOne'>
          ER
        </div>
        <img src = '/src/assets/Images/Viola_Center.png' className='imagePageOne'/>
        <div className='nameRPageOne'>
          ICA
        </div>
      </div>
      {/* Row 3 */}
      <div className='rowThreePageOne'>
        <div className='tagLPageOne'>
          |------ 
        </div>
        <div className='tagPageOne'>
          Welcome to Me
        </div>
        <div className='tagRPageOne'>
          ------|
        </div>
      </div>

    </div>
    </>
  )
}

export default PageOne;
