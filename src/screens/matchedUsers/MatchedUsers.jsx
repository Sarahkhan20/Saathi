import React, { useState, useEffect } from "react";
import { client, databases } from "../../services/appwriteConfig";
import { Query } from "appwrite";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './MatchedUsers.css';
import ProfilePicha from '../../assets/Profilepicha.png';
import ProfileIcon from '../../assets/ProfileIcon.png';
import HomeIcom from '../../assets/HomeIcon.png';
import YourProfileIcon from '../../assets/YourProfileIcon.png';
import UpgradeIcon from '../../assets/UpgradeIcon.png';
import CoolDude from '../../assets/CoolDude.png';

const MatchedUsers = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [all, setAll] = useState([]);
  const [matchingAnswers, setMatchingAnswers] = useState([]);
  const displayedUserIDs = [];
  const displayedAnswers = [];
  const userID = "sarah";

  useEffect(() => {
    const answer = currentUser.map((user) => user.answer);
    setAnswers(answer);
  }, [currentUser]);

  useEffect(() => {
    const getProfile = databases.listDocuments("6475bc41d08143bd0b2e", "6477c45dbbca449075e2", [Query.equal('userID', userID)]);
    getProfile.then(
      function (response) {
        setCurrentUser(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    const getAll = databases.listDocuments("6475bc41d08143bd0b2e", "6477c45dbbca449075e2");
    getAll.then(
      function (response) {
        setAll(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
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

  const displayingAnswer = (answer) => {
    switch (answer) {
      case 'Hosting small gatherings at home':
        return 'Introvert';
      case "I'm a night owl, I love staying up late":
        return 'Night owl';
      case "No dogs":
        return 'Not a dog person';
      case "Yes, I would prefer":
        return "Female Flatmate";
      case "Someone who's respectful of privacy":
        return "Privacy freak";
      case "Any song that feels good":
        return "Music lover";
      case "I can be messy, but I clean up after myself":
        return "Messy, but cleans";
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="matchedUsersMid">
        <div className="part1MU">
          <h4> <img src={ProfilePicha} alt="" srcSet="" className="ProfilePicha" /> {userID}</h4>
          <p><img src={ProfileIcon} alt="" srcSet="" /><a href='./matchedUsers'>Your Matches</a></p>
                              <p><img src={HomeIcom} alt="" srcSet="" /><a href='./findflat'>Find Flats</a></p>
           <p><img src={YourProfileIcon} alt="" srcSet="" /><a href='./profile'>Your Profile</a></p>
          <p><img src={UpgradeIcon} alt="" srcSet="" />Upgrade</p>
        </div>
        <div className="part2MU">
          <h2>Your Matches</h2>
          {matchingAnswers.map((match) => {
            if (match.userID !== "sarah" && !displayedUserIDs.includes(match.userID)) {
              displayedUserIDs.push(match.userID);
              return (
                <div key={match.userID}>
                  <div className="matchusercontainer">
                    <img src={CoolDude} alt="" srcSet="" />
                    <div className="match_info">
                      <h4>{match.userID}</h4>
                      <div className="request">
                        <button>Request</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="part3MU">
          <h2>Match Preferences</h2>
          {matchingAnswers.map((match) => {
            if (match.userID !== "sarah" && !displayedAnswers.includes(match.answer)) {
              displayedAnswers.push(match.answer);
              const displayedAnswerText = displayingAnswer(match.answer);
              return (
                <div key={match.userID}>
                  <p>{displayedAnswerText}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MatchedUsers;