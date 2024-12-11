import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySelection.css';

function CategorySelection({ categories, completedCategories, allCategoriesCompleted }) {
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
      {allCategoriesCompleted && (
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
