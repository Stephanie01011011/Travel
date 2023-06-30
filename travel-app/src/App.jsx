//import { useState } from 'react'
import './App.css'
import banner from "./images/banner.jpg"
import Nav from './components/Navigation/Nav'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
    <Nav />
    <div className="bannerContainer" style={{display: 'flex'}}>
    
    <div className="heroBanner" style={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', height: '400px', width: '100vw', backgroundSize: 'cover'}}>
    <h1>Travel With Us</h1>
    <div className="actionArea">
    <h3 style={{width: '35vw', fontWeight: 'bold'}}>Whether you enjoy nature, a spa, or spending time with family, we have something for you</h3>
    <button id='bookBtn'>Book Now</button>
    </div>
    </div>
    </div>
   <div className="aboutArea">
    <div className="aboutText">
      <h3>WANDER is your one stop for all things adventure, relaxation, or everything in between. 
        We literally do it all. Hop on a plane and safari in Africa, or stay in a treehouse in the amazon forest. 
        Whatever floats your boat, even your literal boat, we will be there every step of the way.</h3>
        <p>Check out all of our services!</p>
        <button>Services</button>
    </div>
    <div className="aboutImage">
      
    </div>
   </div>
     <Footer /> 
    </>
  )
}

export default App
