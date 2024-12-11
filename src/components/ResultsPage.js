import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsPage({ answers, categories, completedCategories }) {
  const navigate = useNavigate();

  const handleRestart = () => {
    // Navigate to the homepage and reload
    navigate('/');
    window.location.reload();
  };

  const handleReturnToCategories = () => {
    navigate('/categories');
  };

  const allCategoriesCompleted = completedCategories.length === categories.length;

  return (
    <div>
      <h2>Results</h2>
      {completedCategories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {Object.entries(answers[category] || {}).map(([questionId, answer]) => (
            <p key={questionId}>
              Question {questionId}: {answer}
            </p>
          ))}
        </div>
      ))}

      {!allCategoriesCompleted && (
        <button
          onClick={handleReturnToCategories}
          style={{ marginTop: '20px', backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Return to Categories
        </button>
      )}

      <button
        onClick={handleRestart}
        style={{ marginTop: '20px', backgroundColor: '#28a745', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultsPage;
