import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsPage({ answers, categories, completedCategories }) {
  const navigate = useNavigate();

  const handleRestart = () => {
    // Navigate to the homepage
    navigate('/');
    window.location.reload()
  };

  if (completedCategories.length < categories.length) {
    return <p>Please complete all categories to view your results.</p>;
  }

  return (
    <div>
      <h2>Results</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {Object.entries(answers[category] || {}).map(([questionId, answer]) => (
            <p key={questionId}>
              Question {questionId}: {answer}
            </p>
          ))}
        </div>
      ))}
      <button onClick={handleRestart} style={{ marginTop: '20px' }}>
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultsPage;
