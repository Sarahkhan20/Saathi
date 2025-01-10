import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import LP1 from '../../assets/LP1.svg'
// import LP2 from '../assets/LP2.svg'
// import LP3 from '../assets/LP3.svg'
import LP_right1 from '../../assets/LP_right1.svg'
import LP_right2 from '../../assets/LP_right2.svg'
import LP_right3 from '../../assets/LP_right3.svg'
import './landing.css'
import container1 from '../../assets/container1.svg'
import container2 from '../../assets/container2.svg'
import container3 from '../../assets/container3.svg'
import Footer from '../../components/footer/Footer'
import { account } from '../../services/appwriteConfig'
import { useNavigate } from 'react-router-dom'



const Landing = () => {
  const navigate = useNavigate();
  const [animation, setAnimation] = useState([
    { src: LP1 },
    
  ]);
  const handleSignUp = () => {
    navigate('/signup');
  };
  const handleFlat = () => {
    navigate('/findflat');
  };
  const handleFlatmate = () => {
    navigate('/quiz');
  };
  const handlePost = () => {
    navigate('/postflat');
  };
  return (
    <div>
      <Navbar />
      
  

      {/* main  */}
      <div className="main_LP">
       <img src={LP1} alt="" srcset="" />
      </div>
      <div className="midLP">
        <div className="midLP_left">
          <div className="CTA_head">New To a city ? We Got You Covered!</div> 
          <div className="CTA_text">Sign in for a more personalized experience</div>
      
          <button className='CTA_button' onClick={handleSignUp}>Sign Up</button>
        </div>
        <div className="midLP_right">
          <img src={LP_right1} alt="" srcset="" />
          <img src={LP_right2} alt="" srcset="" />
          <img src={LP_right3} alt="" srcset="" />
        </div>
        </div>
        <div className="lowLP">
        <div className="lowLP_container1">
          <div className="dabbe_k_andar_dabba">
          <img src={container1} alt="" srcset="" />
          <div className="lowLP_container_header"> Find Flats</div>
         <div className="lowLP_container_text">
            Find your perfect flat with Saathi's extensive collection of verified listings and immersive photo experience.
            </div>
            <button className="lowLP_container_button" onClick={handleFlat}>Browse Flats</button>
            </div>
          </div>
        <div className="lowLP_container2">
           <div className="dabbe_k_andar_dabba">
          <img src={container2} alt="" srcset="" />
          <div className="lowLP_container_header"> 
            Find Flatmates
          </div>
          <div className="lowLP_container_text">
            Looking for the perfect flatmate? We've got you covered. Our platform connects you with like-minded individuals based on your preferences.
            </div>
            <button className="lowLP_container_button" onClick={handleFlatmate}>Find roommate</button>
            </div>
          </div>
        <div className="lowLP_container3">
           <div className="dabbe_k_andar_dabba">
          <img src={container3} alt="" srcset="" />
          <div className="lowLP_container_header"> 
            Post Flat
          </div>
          <div className="lowLP_container_text">
            Ready to rent out your property? Post your flat on our platform and reach a wider audience of potential tenants.
            </div>
            <button className="lowLP_container_button" onClick={handlePost}>Post a Flat</button>
          </div>
          </div>
      </div>
      {/* footer  */}
      <div className="footer">
        <Footer/>
      </div>
        
    </div>
  )
}

export default Landing