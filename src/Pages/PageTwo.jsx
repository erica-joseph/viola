//Note

import '../App.css'

function PageTwo({id}) {

  return (
    <>
    
    {/* Page Two */}
    <div id={id} className='pageTwoContainer'>
      {/* Row 1 */}
      <div className='rowOnePageTwo'>
        <img src = '/assets/Images/Note.png' className='notePageTwo'/>
      </div>
    </div>
    </>
  )
}

export default PageTwo;
