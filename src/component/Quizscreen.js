import React, { useState } from "react";
import Questionlist from "../data/Question.json";
import QuizResult from "./QuizResult.js";
import Question from "./Question.js";

function calculateResult(markedAnswer) {
  let correct = 0;
  Questionlist.forEach((question, index) => {
    if (question.correctAnswerIndex === markedAnswer[index]) {
      correct++;
    }
  });

  return {
    total: Questionlist.length,
    correct: correct,
    percentage: Math.trunc((correct / Questionlist.length) * 100)
  };
}

function Quizscreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswer, setMarkedAnswer] = useState(new Array(Questionlist.length).fill(null));
  const isQuestionEnd = currentQuestionIndex === Questionlist.length;

  const retry = () => {
    setCurrentQuestionIndex(0);
    setMarkedAnswer(new Array(Questionlist.length).fill(null));
  };

  return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <QuizResult 
          result={calculateResult(markedAnswer)}
          retry={retry}
        />
      ) : (
        <Question
          question={Questionlist[currentQuestionIndex]}
          totalQuestion={Questionlist.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAnswer((arr) => {
              let newarr = [...arr];
              newarr[currentQuestionIndex] = index;
              return newarr;
            });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
}

export default Quizscreen;
