//import { useState } from 'react'
import './App.css'
import banner from "./images/banner2.jpg"
import Nav from './components/Navigation/Nav'
import Footer from './components/Footer/Footer'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {
  

  return (
    <>
    <Nav />
    <div className="bannerContainer" style={{display: 'flex'}}>
    
    <div className="heroBanner" style={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', height: '600px', width: '100vw', backgroundSize: '100vw 600px'}}>
    
    <div className="actionArea">
    <h1>Travel With Us</h1>
    <p style={{width: '35vw', position: 'absolute', right: '120px', textAlign: 'right'}}>Whether you enjoy nature, a spa, or spending time with family, we have something for you</p>
    
    <Popup trigger=
                {<button id='bookBtn'>Book Now</button>}
                modal nested>
                  {
                    close => (
                      
                        <div className='modal'>
                          <button className="close" onClick={close}>
          &times;
        </button>
                            <div className='content'>
                                <p id='modalHeader'>Book Your <br/>Next Vacation.</p>
                                <form action="">
                                  <label htmlFor="Name">Name:</label>
                                  <input type="text" />
                                  <label htmlFor="Destination">Destination</label>
                                  <input type="text" />
                                  <label htmlFor="Zip">Zip Code</label>
                                  <input type="text" />
                                  <label htmlFor="Phone">Phone Number</label>
                                  <input type="text" style={{marginBottom: '50px'}}/>
                                </form>
                            </div>
                            <div>
                            <button id='submit'>Submit</button>
                                
                                
                            </div>
                        </div>
                    )
                }
            
                </Popup>
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
