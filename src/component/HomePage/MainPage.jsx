import React from 'react'
import Navbar from './Navbar'
//import Navbar2 from './compone/Navbar2';
import Footer from './Footer';
import Box from './Box';
import Container from './Container';
//import Container1 from './components/Container1';
import Slider from './Slider';
import Sliderimage from './Sliderimage';






function MainPage() {
  return (
    <div>
      <Navbar />
      {/* <Navbar2 /> */}
       <Slider/>
       <Container/>
        {/* <Box/> */}
        {/* <Container1/> */}
       <Sliderimage/>
      
   
      <Footer/>
    </div>
  )
}

export default  MainPage
