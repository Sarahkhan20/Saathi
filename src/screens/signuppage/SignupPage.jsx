import React,{useState} from 'react'
import './signuppage.css'
import { account }  from '../../services/appwriteConfig'
import { useNavigate } from 'react-router-dom'
import bestie from '../../assets/bestie.png'
import logo from '../../assets/logo.svg'



const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const signupUser = async (e) => {
    e.preventDefault();
    
    try {
     
      const newUser = await account.create(
        userDetails.name,
        userDetails.email,
        userDetails.password
      );
      
      account.createEmailSession(userDetails.email, userDetails.password);
      console.log(newUser);
      navigate("/profile");
       
    } catch (error) {
      console.log(userDetails)
      console.log(error);
    }
  };
  return (
    <div className="signup_page">
      <div className="signup_extrainfo">
       
        
        <img src={logo} alt="" srcset="" />
         <div className="signup_tagline">
           Discover the Perfect Harmony:Saathi - Your Trusted Flats and Flatmates Hub
        </div>
        <div className="signup_bestie"><img src={bestie} alt=""  /></div>
        
       
      </div>
      <div className="signup_box"> <h2 className="create_account">Create Account</h2>
      <div className="signup_container">
       
        <form action="" >
          <div className="signup_name">
          
            <input type="text" placeholder='Full Name' onChange={(e) => {
              setUserDetails({
                ...userDetails,
                name : e.target.value
              })}} />
          </div>
          <div className="signup_email">
          
            <input type="email" placeholder='Email' onChange={(e) => {
              setUserDetails({
                ...userDetails,
                email : e.target.value
              })}} />
          </div>
          <div className="signup_password">
        
            <input type="password" placeholder= 'Password' onChange={(e) => {
              setUserDetails({
                ...userDetails,
                password : e.target.value
              })}} />
          </div>
          <div className="signup_button">
            <button onClick={(e)=> signupUser(e)} type='submit'>Create Account</button>
          </div>
          <div className="ask_login">
            Already have an account? <a href="./login">Login</a> 
          </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default SignupPage