import React from 'react';

function ProgressBar({ currentQuestionIndex, totalQuestions }) {
  return (
    <div style={{ margin: '10px 0', fontSize: '16px', fontWeight: 'bold' }}>
      Question {currentQuestionIndex + 1} of {totalQuestions}
    </div>
  );
}

export default ProgressBar;
