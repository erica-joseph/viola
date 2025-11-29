//Note

import '../App.css'
import note from '../assets/Images/Note.png'

function PageTwo({id}) {

  return (
    <>
    
    {/* Page Two */}
    <div id={id} className='pageTwoContainer'>
      {/* Row 1 */}
      <div className='rowOnePageTwo'>
        <img src = {note} className='notePageTwo'/>
      </div>
    </div>
    </>
  )
}

export default PageTwo;
