import React, { useState } from "react";
import './index.css';
import './animations.css';
import Navbar from './component/Navbar.js';
import QuizScreen from "./component/Quizscreen.js";
import JoinScreen from "./component/Joinscreen.js";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <div className="App">
      <div className="background-animate"></div>
      <Navbar />
      <div className="quiz-container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setIsQuizStarted(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
