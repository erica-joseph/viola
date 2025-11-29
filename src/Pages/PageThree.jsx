//Phones

import '../App.css'
import cat from '../assets/Images/Phones_Cat.png'
import clear from '../assets/Images/Phones_Clear.png'
import flower from '../assets/Images/Phones_Flower.png'
import minus from '../assets/Images/Phones_Minus.png'

function PageThree({id}) {

  const phoneContents = [
    {id: 1, img: cat, content: "Hello World!", link: "https://www.youtube.com/embed/NyAhEUBHj_8?si=YPWO3m1_QhUnW2fS"},
    {id: 2, img: clear, content: "Hello World!", link: "https:/ericajoseph.com/"},
    {id: 3, img: flower, content: "Hello World!", link: "https://erica-joseph.github.io/Portfolio/"},
    {id: 4, img: minus, content: "Hello World!", link: "https://www.lakay25.com/"}
  ]

  return (
    <>
    
    {/* Page Two */}
    <div id={id} className='pageTwoContainer'>
      {/* Row 1  ${menu_background}*/}
      <div className='rowOnePageTwo'>
        {phoneContents.map((phone, index) => (
        <div key={index} className='phonePageThree' style = {{backgroundImage: `url(${phone.img})`}}>
          <div className='phoneScreenPageThree'>
            <div className='phoneLightPageThree'>
              <div className="box">
                <iframe className = 'myFrame' src={phone.link} width = "100%" height = "500px">
                </iframe>
              </div> 
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default PageThree;
