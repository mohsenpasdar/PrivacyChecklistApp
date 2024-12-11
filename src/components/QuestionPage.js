import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { questions } from '../data/questions';

function QuestionPage({ categories, answers, handleAnswer, markCategoryComplete }) {
  const { category } = useParams();
  const navigate = useNavigate();

  const currentQuestions = questions[category] || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = (answer) => {
    handleAnswer(category, currentQuestions[currentQuestionIndex].id, answer);
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      markCategoryComplete(category);
      setIsCompleted(true);
    }
  };

  const handleLeaveChecklist = () => {
    // Clear recorded answers for the current category
    handleAnswer(category, null, null); // Assuming `handleAnswer` is designed to remove entries when `null` is passed
    navigate('/categories'); // Navigate back to CategorySelection
  };

  const handleReturnToCategories = () => {
    navigate('/categories');
  };

  if (currentQuestions.length === 0) {
    return <p>No questions available for this category.</p>;
  }

  return (
    <div>
      <h2>{category}</h2>
      {!isCompleted && (
        <ProgressBar
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={currentQuestions.length}
        />
      )}
      {!isCompleted ? (
        <div>
          <p>{currentQuestions[currentQuestionIndex].text}</p>
          <button onClick={() => handleNext('Yes')}>Yes</button>
          <button onClick={() => handleNext('No')}>No</button>
          <button onClick={handleLeaveChecklist}>Leave Checklist</button>
        </div>
      ) : (
        <div>
          <p>You have completed all questions for the {category} category!</p>
          <button onClick={handleReturnToCategories}>Return to Categories</button>
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
