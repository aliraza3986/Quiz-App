import React from 'react';

function QuizResult({ result, retry }) {
  return (
    <div className="result-screen">
      <h2>Result: {result.percentage}%</h2>
      <p>Selected {result.correct} correct Option out of {result.total} Question.</p>
      <button id="start" onClick={retry}>Retry</button>
    </div>
  );
}

export default QuizResult;
