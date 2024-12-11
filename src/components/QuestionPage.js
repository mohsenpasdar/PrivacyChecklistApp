import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { questions } from '../data/questions';

function QuestionPage({ categories, answers, handleAnswer, markCategoryComplete }) {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryData = questions[category];
  const currentQuestions = categoryData?.items || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerClick = (answer) => {
    handleAnswer(category, currentQuestions[currentQuestionIndex].id, answer);
    setFeedback(
      currentQuestions[currentQuestionIndex].feedback[answer.toLowerCase()] || ''
    );
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setFeedback(null);
      setAnswered(false);
    } else {
      markCategoryComplete(category);
      setIsCompleted(true);
    }
  };

  const handleLeaveChecklist = () => {
    // Clear recorded answers for the current category
    handleAnswer(category, null, null); // Assuming `handleAnswer` removes entries when `null` is passed
    navigate('/categories'); // Navigate back to CategorySelection
  };

  const handleReturnToCategories = () => {
    navigate('/categories');
  };

  if (!quizStarted) {
    return (
      <div>
        <h2>{category}</h2>
        <p>{categoryData?.questionsPageIntroduction}</p>
        <button onClick={handleStartQuiz}>Start Quiz</button>
        <button onClick={handleLeaveChecklist}>Leave Checklist</button>
      </div>
    );
  }

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
          {feedback && <p><strong>Feedback:</strong> {feedback}</p>}
          <div>
            {!answered ? (
              <>
                <button onClick={() => handleAnswerClick('Yes')}>Yes</button>
                <button onClick={() => handleAnswerClick('No')}>No</button>
              </>
            ) : (
              <button onClick={handleNext}>Next</button>
            )}
          </div>
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
