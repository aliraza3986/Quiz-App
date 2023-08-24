import React, { useState, useEffect, useRef } from 'react';

function Question({ question, totalQuestion, currentQuestion, setAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);
  const [remainingTime, setRemainingTime] = useState(10);

  function gotonextquestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setAnswer(selectedOption);
    setSelectedOption(null);
    setRemainingTime(10); // Reset timer to 10 seconds
  }

  useEffect(() => {
    if (question && question.options) {
      progressBar.current.classList.remove("active");
      setTimeout(() => {
        progressBar.current.classList.add("active");
      }, 0);
      timer.current = setTimeout(updateTimer, 1000);
      return () => clearTimeout(timer.current);
    }
  }, [question, remainingTime]);

  function updateTimer() {
    if (remainingTime > 1) {
      setRemainingTime(remainingTime - 1);
      timer.current = setTimeout(updateTimer, 1000);
    } else {
      gotonextquestion();
    }
  }

  function handleOptionClick(index) {
    if (selectedOption === index) {
      setSelectedOption(null); // Toggle off if already selected
    } else {
      setSelectedOption(index);
    }
  }

  if (!question || !question.options) {
    return null;
  }

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="timer-container">
        <div className="timer-progress" style={{ transform: `rotate(${(10 - remainingTime) * 36}deg)` }}></div>
        <div className="timer-text">{remainingTime}</div>
      </div>
      <div className="question-count">
        <b>{currentQuestion}</b>
        of
        <b>{totalQuestion}</b>
      </div>
      <div className="main">
        <div className="title">
          <span>Question:</span>
          <p>{question.title}</p>
        </div>
        <div className="Option">
          {question.options.map((option, index) => (
            <button
              id="end"
              className={index === selectedOption ? "option active" : "option"}
              key={index}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="control">
        <button id="start" onClick={gotonextquestion}>Next Question</button>
      </div>
    </div>
  );
}

export default Question;
