import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySelection.css'; // Assuming the styles are saved in this file

function CategorySelection({ categories, completedCategories }) {
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
      {completedCategories.length > 0 && (
        <div>
          <Link to="/results">
            <button>View Results</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategorySelection;
