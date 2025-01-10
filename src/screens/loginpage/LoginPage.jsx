import React, { useState} from 'react';
import './loginpage.css'
import { useNavigate } from 'react-router-dom'
import { account } from '../../services/appwriteConfig';
import logo from '../../assets/logo.svg'
import bestie from '../../assets/bestie.png'

const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password : ''
  });
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
  
    try {
      const loggedUser = await account.createEmailSession(userDetails.email, userDetails.password);
      console.log(loggedUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    };
  }


  return (
    <div className="login_page">
       <div className="login_extrainfo">
       
        
        <img src={logo} alt="" srcset="" />
         <div className="login_tagline">
           Discover the Perfect Harmony:Saathi - Your Trusted Flats and Flatmates Hub
        </div>
        <div className="login_bestie"><img src={bestie} alt=""  /></div>
        
      </div>
        <div className="login_box"> <h2 className="create_account">Login</h2>
      <div className="login_container">
        <form action="" >
          <div className="login_email">
      
            <input type="email" placeholder='Email' onChange= {(e) => {
              setUserDetails({
                ...userDetails,
                email: e.target.value,
              })
            }} />
          </div>
          <div className="login_password">
         
            <input type="password" placeholder='Password' onChange= {(e) => {
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              })
            }}/>
          </div>
          <div className="login_button">
            <button type='submit' onClick={(e)=> loginUser(e)} type='submit' >Log In</button>
          </div>
          <div className="logout_button">
           <div className="ask_signup">
            New User? <a href="./signup">Sign Up</a> 
          </div>
          </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default LoginPage