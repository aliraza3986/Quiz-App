import React from 'react';

function JoinScreen({ start }) {
  return (
    <div className="join-screen">
      <h2>Join QUIZ</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <button id="start" onClick={start}>Start</button>
    </div>
  );
}

export default JoinScreen;
