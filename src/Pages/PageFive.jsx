//Note

import '../App.css'

function PageFive() {
  const tabs = [
    {id: 1, text: "LinkedIn", img: "src/assets/Images/Contact_TabOne.png", link: "https://www.linkedin.com/in/erica-joseph-93b3501b1/"},
    {id: 2, text: "GitHub", img: "src/assets/Images/Contact_TabTwo.png", link: "https://github.com/erica-joseph"},
    {id: 3, text: "Website", img: "src/assets/Images/Contact_TabThree.png", link: "https://ericajoseph.com/"},
    {id: 4, text: "Instagram", img: "src/assets/Images/Contact_TabFour.png", link: "https://www.instagram.com/hey_kidseatfree"},
    {id: 5, text: " ", img: "src/assets/Images/Contact_TabFive.png", link: ""},
    {id: 6, text: "e-mail", img: "src/assets/Images/Contact_TabSix.png", link: "ericagjoseph@outlook.com"}
  ]
  return (
    <>
    
    {/* Page Five */}
    <div className='pageFiveContainer'>
      {/* Row 1 */}
      <div className='rowOnePageFive'>
        <div className='contentPageFive'>
            <div className='contentTitlePageFive'>Swing on by to learn more!</div>

            Thank you for getting this far!
            Hopefully, you've enjoyed browsing this website. So, if you want to learn more or get in contact with me, tear off a paper strip!

        </div>
      </div>
      {/* Row 2 */}
      <div className='rowTwoPageFive'>
        {tabs.map ((tabs, index) =>(
        <div className='rowTwoColumnFirstPageFive' style = {{backgroundImage: `url('${tabs.img}')`}}>
            <a target = "_blank" href = {tabs.link}> {tabs.text} </a>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default PageFive;
