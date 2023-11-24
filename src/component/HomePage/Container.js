// import React from 'react';
// import './Container.css';
// import { Img } from '@chakra-ui/react';

// const Container = () => {

//   return (
//     <div >
      
//       <div className="contentBox" style={{backgroundColor:"#e47b8d"}}>
//         <p>
//           <div>
//           <img style={{width:"500px"}} src='https://www.ed.ac.uk/sites/default/files/styles/panel_breakpoints_theme_uoe_mobile_1x/public/thumbnails/image/gettyimages-652180044_hanibaram_900x400.jpg?itok=wo_kEd53' alt=''/></div>
//           Sri Satya Sai Campus, Sehore came into existence in year 1999 with Sri Satya Sai Institute of Science & Technology (SSSIST). SSSIST initially had three branches in engineering education with total intake of 180.

// In 2012, because of the vision of promoters, the Sehore Campus was operating twelve Colleges, having twenty undergraduate courses & twenty Postgraduate courses, one post-graduate Diploma course & one Diploma course, with total intake of 3054  students. Sri Satya Sai Group of Institutions attracts large number of students from faraway places & States, due to quality of education at affordable cost, without any hidden fees policy. In its history of fourteen years, various Institutions under umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
// Majority of population is agriculture dependent & percentage of population living at low standard of living is 80.6. Growth rate recorded recently is 21.5%.

// Literacy rate of Sehore district is 71.11% which was 63.07% in 2001. Gender wise, male and female literacy were 82.37 and 58.86 respectively in year 2011, which in 2001 census, were 77.28% and 47.36%. 9 % of mothers between 17-55 years of age can read and this percentage is bound to increase in future. Sri Satya Sai Group of Institutions can humbly claim some role in these statistics.
// Now with establishment of Sri Satya Sai University of Technology & Medical Sciences, the overall scenario is expected to improve further.
    
        
//         </p>
        
//       </div>
//       </div>
//   );
// }

// export default Container;
import React from 'react'
import './Container.css'
import posImage2 from './campus.jpg'

const Container = () => {
  return (
    <>
    <br></br><br></br>
    <div className="we-are-block">
  <div id="about-us-section">
    <div className="about-us-image">
      <img
        src={posImage2}
        width={808}
        height={458}
        alt="Lobby Image"
      />
    </div>
    <div className="about-us-info">
      {/* <h2>We are Digital Upgrade</h2> */}
      <p>
      Sri Satya Sai Group of Institutions attracts large number of students from faraway places & States,
      due to quality of education at affordable cost, without any hidden fees policy. In its history of fourteen years, 
      various Institutions under umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & 
      nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
      Majority of population is agriculture dependent & percentage of population living at low standard of living is 80.6. 
      Growth rate recorded recently is 21.5%.
      </p>
      <a href="#" title="About Us Button">
        ABOUT US
      </a>
    </div>
  </div>
  <div id="history-section">
    <div className="history-image">
      <img
        src="https://images.static-collegedunia.com/public/college_data/images/campusimage/1477396585acdemic3.PNG"
        width={951}
        height={471}
        alt="Building Pic"
      />
    </div>
    <div className="history-info">
      <h2>Preserving Local History</h2>
      <p>
      Sri Satya Sai Campus, Sehore came into existence in year 1999 with Sri Satya Sai Institute of Science & Technology (SSSIST). 
      SSSIST initially had three branches in engineering education with total intake of 180.
      In 2012, because of the vision of promoters, the Sehore Campus was operating twelve Colleges, 
      having twenty undergraduate courses & twenty Postgraduate courses, one post-graduate Diploma course & one Diploma course, 
      with total intake of 3054  students.
      </p>
      <a href="#" title="History Button">
        HISTORY
      </a>
    </div>
  </div>
</div><br></br><br></br>
 
<div id='Section' style={{marginLeft:'150px'}}>
  
<img style = {{width:'120px',marginLeft:"20px"}}src='https://goteachersintouch.com/wp-content/uploads/2021/06/graduation-cap.png' alt=''/>
<h3 style={{fontWeight:"bolder",marginLeft:"150px",marginTop:'-65px'}}> 16000+ </h3>
<p style={{marginLeft:"150px"}}>students</p>

<img style = {{width:'120px',marginLeft:"300px",marginTop:'-155px'}}src='https://assets-global.website-files.com/62164f49d41615f2747ae420/62827f197eb1776532379171_chalkboard-user-light.svg' alt=''/>
<h3 style={{fontWeight:"bolder",marginLeft:"450px",marginTop:'-100px'}}> 950+ </h3>
<p style={{marginLeft:"450px"}}>Faculty</p>

<img style = {{width:'120px',marginLeft:"620px",marginTop:'-165px'}}src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhPl5ZCXnD8FvH4zxy-H9vS1AcW5M7117TBM9PVaLE2tdURZIc' alt=''/>
<h3 style={{fontWeight:"bolder",marginLeft:'750px',marginTop:'-105px'}}> 850+ </h3>
<p style={{marginLeft:"750px"}}>Staff</p>

<img style = {{width:'120px',marginLeft:"880px",marginTop:'-185px'}}src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJe_QWwXBAkkahfPZJmN1a3FATT94G6N-dJDB6wAlWqX3-mi_u' alt=''/>
<h3 style={{fontWeight:"bolder",marginLeft:'1000px',marginTop:'-105px'}}> 1100+ </h3>
<p style={{marginLeft:"1000px"}}>Projects</p>


</div>


</>
  )
}

export default Container;



