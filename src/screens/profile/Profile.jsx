import React, {useEffect,useState} from 'react'

import { account,databases }  from '../../services/appwriteConfig'

import {  useNavigate, Link } from 'react-router-dom'
import { Query } from 'appwrite';

const Profile = () => {
       const [userDetails, setUserDetails] = useState();
       const [Profile, setProfile] = useState();
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
       console.log(userDetails);

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
              [Query.equal('userID',userID)]);
              getProfile.then(
                     function (response) { 
                            setProfile(response.documents);   
                     }, function (error) {
    console.log(error);
              });
              console.log(getProfile);
       
       }, [])
  return (
         <>
               
                {userDetails ? (
                        <>
                <h3>UID : { userID}</h3>
                              </>
                ) : (
                       <div>Please login</div>
                )}
                
         </>
         
  )
}

export default Profile