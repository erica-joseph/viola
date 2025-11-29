//Note

import '../App.css'
import head from '../assets/Images/Contact_Header.png'
import one from '../assets/Images/Contact_TabOne.png'
import two from '../assets/Images/Contact_TabTwo.png'
import three from '../assets/Images/Contact_TabThree.png'
import four from '../assets/Images/Contact_TabFour.png'
import five from '../assets/Images/Contact_TabFive.png'
import six from '../assets/Images/Contact_TabSix.png'

function PageFive({id}) {
  const tabs = [
    {id: 1, text: "LinkedIn", img: {one}, link: "https://www.linkedin.com/in/erica-joseph-93b3501b1/"},
    {id: 2, text: "GitHub", img: {two}, link: "https://github.com/erica-joseph"},
    {id: 3, text: "Website", img: {three}, link: "https://ericajoseph.com/"},
    {id: 4, text: "Instagram", img: {four}, link: "https://www.instagram.com/hey_kidseatfree"},
    {id: 5, text: " ", img: {five}, link: ""},
    {id: 6, text: "e-mail", img: {six}, link: "ericagjoseph@outlook.com"}
  ]
  return (
    <>
    
    {/* Page Five */}
    <div id={id} className='pageFiveContainer'>
      {/* Row 1 */}
      <div className='rowOnePageFive' style ={{backgroundImage: {head}}}>
        <div className='contentPageFive'>
            <div className='contentTitlePageFive'>Swing on by to learn more!</div>

            Thank you for getting this far!
            Hopefully, you've enjoyed browsing this website. So, if you want to learn more or get in contact with me, tear off a paper strip!

        </div>
      </div>
      {/* Row 2 */}
      <div className='rowTwoPageFive'>
        {tabs.map ((tabs, index) =>(
        <div key={index} className='rowTwoColumnFirstPageFive' style = {{backgroundImage: `url('${tabs.img}')`}}>
            <a target = "_blank" href = {tabs.link}> {tabs.text} </a>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default PageFive;
