import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import worriedwoman from '../../assets/worried_woman.svg'
import './findflatmates.css'
import Footer from '../../components/footer/Footer'


const Welcome = () => {
  return (
         <div>
                  <Navbar />
                <div className="welcome_page" >
                       <div className="welcome_page_image"><img src={worriedwoman} alt="" srcset="" />  </div>
                       <div className="welcome_page_text"> Roommate Roulette got you spinning? <br/>Take a breath, we're here to help!</div> 
                       <div className="welcome_page_buttons">
                               <a href='#' className="welcome_page_skip">Skip</a> 
                              <button className="welcome_page_continue ">Continue</button >
                              </div>
                             
                </div>
                
          
                <Footer/>
    </div>
  )
}

export default Welcome