import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./screens/landingpage/Landing";
import Signup from "./screens/signuppage/SignupPage";
import Login from "./screens/loginpage/LoginPage";

import "./App.css";
import Welcome from "./screens/findflatmates/Welcome";
import Profile from "./screens/profile/Profile";
import QuizCard from "./screens/quiz/Quiz";
import PostFlat from "./screens/post_flat/PostFlat";
import FindFlats from "./screens/findflats/FindFlats";
import FlatDeets from "./screens/flatdeets/FlatDeets";
import MatchedUsers from "./screens/matchedUsers/MatchedUsers";
import { Quiz } from "@mui/icons-material";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Landing />} />
                    <Route path="/welcomepage" element={<Welcome />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/quiz" element={<QuizCard />} />
                    <Route path="/postflat" element={<PostFlat />} />
                    <Route path="/findflat" element={<FindFlats />} />
                    <Route path="/flatdeets" element={<FlatDeets />} />
                    <Route path="/matchedusers" element={<MatchedUsers />} />
                    <Route path="/findflatmates" element={<Quiz />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
