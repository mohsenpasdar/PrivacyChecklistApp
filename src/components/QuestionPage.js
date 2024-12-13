import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { questions } from '../data/questions';
import '../styles/QuestionPage.css'; // Add styles here

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
    setCurrentQuestionIndex(0); // Reset question index in case of a restart
    setFeedback(null);
    setAnswered(false);
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
    handleAnswer(category, null, null); // Clear recorded answers
    navigate('/categories'); // Navigate back to CategorySelection
  };

  const handleRestartChecklist = () => {
    handleAnswer(category, null, null); // Clear recorded answers
    setQuizStarted(false);
    setIsCompleted(false);
    setCurrentQuestionIndex(0); // Reset question index
    setFeedback(null);
    setAnswered(false);
  };

  const handleReturnToCategories = () => {
    navigate('/categories');
  };

  return (
    <div className="question-page">
      {!quizStarted ? (
        <div className="question-content">
          <h2 className="question-title">{category}</h2>
          <p className="question-introduction">{categoryData?.questionsPageIntroduction}</p>
          <div className="bottom-buttons-questions">
            <button className="start-quiz-button" onClick={handleStartQuiz}>
              Start Checklist
            </button>
            <button className="leave-checklist-button" onClick={handleLeaveChecklist}>
              Leave Checklist
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="question-title">{category}</h2>
          {!isCompleted && (
            <ProgressBar
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={currentQuestions.length}
            />
          )}
          {!isCompleted ? (
            <div>
              <p className="question-text">{currentQuestions[currentQuestionIndex].text}</p>
              {feedback && <p className="feedback-text"><strong>Feedback:</strong> {feedback}</p>}
              <div>
                {!answered ? (
                  <>
                    <button className="yes-button" onClick={() => handleAnswerClick('Yes')}>
                      Yes
                    </button>
                    <button className="no-button" onClick={() => handleAnswerClick('No')}>
                      No
                    </button>
                  </>
                ) : (
                  <button className="next-button" onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
              <div className="bottom-buttons-questions">
                <button className="restart-checklist-button" onClick={handleRestartChecklist}>
                  Restart Checklist
                </button>
                <button className="leave-checklist-button" onClick={handleLeaveChecklist}>
                  Leave Checklist
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p>You have completed all questions for the {category} category!</p>
              <button className="return-categories-button" onClick={handleReturnToCategories}>
                Return to Categories
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
