import React from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

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

  const calculateScore = (category) => {
    const categoryQuestions = questions[category]?.items || [];
    const totalQuestions = categoryQuestions.length;
    const answeredYes = Object.values(answers[category] || {}).filter(
      (answer) => answer === 'Yes'
    ).length;
    return Math.round((answeredYes / totalQuestions) * 100);
  };

  const getScoreFeedback = (score, category) => {
    if (score <= 35) return questions[category]?.scoreFeedback.low;
    if (score <= 75) return questions[category]?.scoreFeedback.medium;
    return questions[category]?.scoreFeedback.high;
  };

  const allCategoriesCompleted = completedCategories.length === categories.length;

  return (
    <div>
      <h2>Results</h2>
      {completedCategories.map((category) => {
        const score = calculateScore(category);
        const feedback = getScoreFeedback(score, category);
        const recommendations = questions[category]?.items
          .filter((item) => answers[category]?.[item.id] === 'No')
          .map((item) => item.recommendation);

        return (
          <div key={category}>
            <h3>{category}</h3>
            <p>{questions[category]?.resultsIntroduction}</p>
            <p>Score: {score}%</p>
            <p>{feedback}</p>
            {recommendations.length > 0 && (
              <div>
                <h4>Recommendations:</h4>
                <ul>
                  {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}

      {!allCategoriesCompleted && (
        <button onClick={handleReturnToCategories}>
          Return to Categories
        </button>
      )}

      <button onClick={handleRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultsPage;
