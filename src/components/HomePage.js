import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Welcome to the Privacy Checklist!</h2>
      <p>Take control of your digital privacy by answering simple questions.</p>
      <Link to="/categories">
        <button>Start</button>
      </Link>
    </div>
  );
}

export default HomePage;
