import React, { useState, useEffect } from "react";
import { client, databases } from "../../services/appwriteConfig";
import { Query } from "appwrite";

const App = () => {
       const [currentUser, setCurrentUser] = useState([]);
       const [answers, setAnswers] = useState([]);
       const [all, setAll] = useState([]);
        const [matchingAnswers, setMatchingAnswers] = useState([]);

const userID = "sarah";
useEffect(() => {
  const answer = currentUser.map((user) => user.answer);
  setAnswers(answer);
}, [currentUser]);
  useEffect(() => {
              const getProfile = databases.listDocuments("6475bc41d08143bd0b2e", "6477c45dbbca449075e2",
                     [Query.equal('userID', userID)]);
              getProfile.then(
                     function (response) {
                            setCurrentUser(response.documents);
                     }, function (error) {
                            console.log(error);
              }); 
       
  }, []);
         useEffect(() => {
              const getAll = databases.listDocuments("6475bc41d08143bd0b2e", "6477c45dbbca449075e2");
              getAll.then(
                     function (response) {
                            setAll(response.documents);
                     }, function (error) {
                            console.log(error);
                     });       
       
         }, []);
   useEffect(() => {
    const matches = all.filter((user) => answers.includes(user.answer));
    const matchingAnswersData = matches.map((match) => ({
      userID: match.userID,
      answer: match.answer,
    }));
    setMatchingAnswers(matchingAnswersData);
  }, [answers, all]);

  console.log(matchingAnswers);
  return (
  <div>
    <h1>Users</h1>
    {matchingAnswers.map((match) => {
      if (match.userID !== "sarah") {
        return (
          <div key={match.userID}>
            <p>User ID: {match.userID}</p>
            <p>Answer: {match.answer}</p>
          </div>
        );
      }
      return null;
    })}
  </div>
);

};

export default App;