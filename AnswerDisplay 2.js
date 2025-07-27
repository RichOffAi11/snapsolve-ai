import React from 'react';

function AnswerDisplay({ result }) {
  return (
    <div>
      <h3><strong>Question:</strong></h3>
      <p>{result.question}</p>
      <h3><strong>Answer:</strong></h3>
      <p>{result.answer}</p>
    </div>
  );
}

export default AnswerDisplay;