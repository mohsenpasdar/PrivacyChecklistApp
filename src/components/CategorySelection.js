import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CategorySelection.css";

function CategorySelection({
  categories,
  completedCategories,
  allCategoriesCompleted,
}) {
  const navigate = useNavigate();

  const handleRestart = () => {
    // Navigate to the homepage and reload the app to reset state
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="category-selection">
      <h2 className="category-title">Select a Category</h2>
      <div className="category-box">
        <div className="category-grid">
          {categories.map((category) => (
            <button
              key={category}
              className="category-button"
              disabled={completedCategories.includes(category)}
            >
              <Link
                to={`/questions/${category}`}
                style={{
                  pointerEvents: completedCategories.includes(category)
                    ? "none"
                    : "auto",
                }}
              >
                {category}
              </Link>
            </button>
          ))}
        </div>
      </div>
      <div className="bottom-buttons">
        {completedCategories.length > 0 && (
          <Link
            to="/results"
            className={allCategoriesCompleted ? "results-completed" : ""}
          >
            <button className="results-button">
              {allCategoriesCompleted ? "View Final Results" : "View Results"}
            </button>
          </Link>
        )}
        <button className="restart-button" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default CategorySelection;
