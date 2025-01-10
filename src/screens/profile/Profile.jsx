import React, {useEffect,useState} from 'react'

import { account,databases }  from '../../services/appwriteConfig'

import {  useNavigate, Link } from 'react-router-dom'
import { Query } from 'appwrite';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Profile.css'
import GoBack from '../../assets/go_back.png'
import ProfilePicha from '../../assets/Profilepicha.png'
import EditProfile from '../../assets/editprofile.svg'
import GraduationCap from '../../assets/Graduation_cap.png';
import Books from '../../assets/books.png';
const Profile = () => {
       const [userDetails, setUserDetails] = useState(null);
       const [Profile, setProfile] = useState([""]);
       const userID = "sarah";
              // userDetails;

       const navigate = useNavigate();
       useEffect( () => {
              const getData = account.get();
              getData.then(
                     function (response) {
                            setUserDetails(response.$id)
                     },
                     function (error) {
                            console.log(error);
                     }
              )
       }, [userDetails]);
       // console.log(userDetails);

       // const handleLogout = async () => {
       //        try {
       //               await account.deleteSession("currentUser");
       //               navigate('/')
       //        } catch (error) {
       //               console.log(error);
       //        }
        
       // }
       
       useEffect(() => {
              const getProfile = databases.listDocuments("6475bc41d08143bd0b2e", "6477c45dbbca449075e2",
                     [Query.equal('userID', userID)]);
              getProfile.then(
                     function (response) {
                            setProfile(response.documents);
                     }, function (error) {
                            console.log(error);
                     });
              console.log(getProfile);
              
       
       }, []);
      const modifyAnswer = (answer) => {
  switch (answer) {
    case 'Hosting small gatherings at home':
      return 'Introvert';
    case "I'm a night owl, I love staying up late":
                return 'night owl';
         case "No dogs":
                return 'Not a dog person';
         case "Yes, I would prefer":
                return "Female Flatmate";
         case "Someone who's respectful of privacy":
                return "Privacy freak"
         case "Any song that feels good":
                return "Music lover";
         case "I can be messy, but I clean up after myself":
                return "Messy, but cleans";
    default:
      return null;
  }
       };
       const getInterestingFacts = () => {
    const interestingFacts = Profile.filter((profile) => profile.category === 'Interesting Facts');
    return interestingFacts.map((profile) => (
      <div key={profile.$id}>
        <h4>{profile.answer ? modifyAnswer(profile.answer) : ''}</h4>
      </div>
    ));
  };

  return (
         <>
                <Navbar/>
                <div className="quiz_mid_container">
                       <div className="quiz_mid_container_back">
                     <div className="quiz_mid_container_back_circle"> <img src={GoBack} alt="" srcset="" /></div> <a href="./matchedUsers">Go back</a> 
                       </div>
<div className="quiz_mid_profileinfo">
                              <div className="profileinfo_container">
                                     <div className="profileinfo_container1">
                                            <img src={ProfilePicha} alt="" srcset="" className='profile_picha'/>
                <div className="profile_deets">
                                            {userDetails ? (
                                                   <>
                                                         
                <h3> { userID}</h3>
                              </>
                ) : (
                       <div>Please login</div>
                                                   )}
                                                   Female   20
                                                   <br />
                                                   <button className="edit_profile">
                                                          <img src={EditProfile} alt="" srcset="" />
                                                          
                                                   Edit Profile
                                            </button>
                                            </div>
                                            
                                     </div>
                                     <div className="profileinfo_container2">
                                          <h4> Bio </h4>

                                            Friendly and happy going
                                            <br />
                                            <div className="bio_salutation"> - posted by {userID}</div>
                                            
                                     </div>
                                     <div className="profileinfo_container3"> <div className="university">
                                            <img src={GraduationCap} alt="" srcset="" /> Attending Thadomal Shahani Engineeering College</div>
                                            <div className="branch">
                                            <img src={Books} alt="" srcset="" /> Majoring in Information Technoloy</div></div>
                                     <div className="profileinfo_container4">
                                           <h3> Interesting Facts  </h3>
               
         {Profile.map((profile) => (
        <div key={profile.$id} >
          <h4 className='letsdivide'>{profile.answer ? modifyAnswer(profile.answer) : ''}</h4>
        </div>
         ))}  
                                     </div>
                                     <div className="profileinfo_container5">
                                   
                                            
                                     </div>
                                     <div className="profileinfo_container6"><h3>Compatibility Preference</h3></div>
                              </div>
                       </div>  
                       </div>
                 <Footer/>
         </>
        
  )
}

export default Profile