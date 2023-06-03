import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./screens/landingpage/Landing";
import Signup from "./screens/signuppage/SignupPage";
import Login from "./screens/loginpage/LoginPage";

import "./App.css";
import Welcome from "./screens/findflatmates/Welcome";
import Profile from "./screens/profile/Profile";
import QuizCard from "./screens/quiz/Quiz";
import PostFlat from "./screens/post_flat/PostFlat";

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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
