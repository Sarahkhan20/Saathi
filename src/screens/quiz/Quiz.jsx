import { Query } from "appwrite";
import {  databases,account } from "../../services/appwriteConfig";
import React, { useState, useEffect } from "react";
import {  useNavigate } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Quiz.css'
import { ID } from 'appwrite';


const QuizCard = () => {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answer, setanswer] = useState("")
  console.log(answer);
  const [id, setId] = useState([""])
  const updateID = id[0].toString()
  console.log(updateID)
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  useState();
       const userID = userDetails;
   const nextQuestion = () => {
    if (index < questions.length && options.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("no more questions");
      navigate('/profile')
    }
  };
 
  // getting userID 
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
  
       useEffect(() => {
              const getQuestion = databases.listDocuments("6475bc41d08143bd0b2e", "6475bc4f578738f63e3c",);
              getQuestion.then(
                     function (response) { 
                            setQuestions(response.documents);   
                  setOptions(response.documents) 
                  const documents = response.documents;
                  const documentIds = documents.map((document) => document.$id);
                  setId(documentIds);
                     }, function (error) {
    console.log(error);
});
       
       }, [])
  console.log(id);
   const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument("6475bc41d08143bd0b2e", "6477c45dbbca449075e2", ID.unique(), {
      answer, userID
      
    })
    console.log(userID);

    promise.then(
      function (response) {
        console.log(response);
        
      },
      function (error) {
        console.log(error);
      })

  }
   
 
  const currentQuestion = questions[index] || {};
  const currentOption = options[index] || {};
  
       
       return (
         <div>
           <Navbar />
           <div className="quiz_mid">
           <form action="" onSubmit={handleSubmit}>
     {currentQuestion && (
        <div className="quiz_question">
        
          <p>{currentQuestion.question}</p>
        </div>
           )}
           <div className="quiz_options">
        <div className="quiz_option1">
           {currentOption.option && (
          <>
            <input type="radio" name="option" id="" value={currentOption.option} id="" onChange={(e) => {
                     setanswer(e.target.value)
            }} />
            <label>{currentOption.option}</label>
          </>
                   )}
                 </div>
                  <div className="quiz_option2">
          {currentOption.option2 && (
          <>
            <input type="radio" name="option" id="" value={currentOption.option2} id="" onChange={(e) => {
                     setanswer(e.target.value)
            }}/>
            <label>{currentOption.option2}</label>
          </>
                   )}
                 </div>
                 <div className="quiz_option3">
              {currentOption.option3 && (
          <>
            <input type="radio" name="option" id="" value={currentOption.option3} id="" onChange={(e) => {
                     setanswer(e.target.value)
            }}/>
            <label>{currentOption.option3}</label>
          </>
                   )}
                 </div>
                 <div className="quiz_option4">
              {currentOption.option4 && (
          <>
            <input type="radio" name="option" id="" value={currentOption.option4} id="" onChange={(e) => {
                     setanswer(e.target.value)
            }} />
            <label>{currentOption.option4}</label>
          </>
                   )}
                 </div>
                 <div className="quiz_option5">
             {currentOption.option5 && (
          <>
                   <input type="radio" name="option" value={currentOption.option5} id="" onChange={(e) => {
                         setanswer(e.target.value)
 }} />
                             <label>{currentOption.option5}</label>
                       </>
                       
                        )}
                      
                 </div>
                 <div className="quiz_submit">
                       <button onClick={nextQuestion}>Continue</button>
                 </div>
                 </div>
             </form>
             
             </div>
           <Footer/>
  </div>
  );          
};

export default QuizCard;