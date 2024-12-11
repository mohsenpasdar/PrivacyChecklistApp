import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CategorySelection.css'; // Assuming the styles are saved in this file

function CategorySelection({ categories, completedCategories }) {
  const navigate = useNavigate();

  const handleRestart = () => {
    // Navigate to the homepage and reload the app to reset state
    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <h2>Select a Category</h2>
      {categories.map((category) => (
        <button
          key={category}
          disabled={completedCategories.includes(category)}
        >
          <Link
            to={`/questions/${category}`}
            style={{ pointerEvents: completedCategories.includes(category) ? 'none' : 'auto' }}
          >
            {category}
          </Link>
        </button>
      ))}
      <div style={{ marginTop: '20px' }}>
        {completedCategories.length > 0 && (
          <Link to="/results" style={{ marginRight: '10px' }}>
            <button>View Results</button>
          </Link>
        )}
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    </div>
  );
}

export default CategorySelection;
