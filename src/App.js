import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CategorySelection from './components/CategorySelection';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/ResultsPage';
import { categories } from './data/questions';

function App() {
  const [answers, setAnswers] = useState({});
  const [completedCategories, setCompletedCategories] = useState([]);
  
  const handleAnswer = (category, questionId, answer) => {
    if (questionId === null && answer === null) {
      // Clear answers for the category
      setAnswers((prev) => {
        const updated = { ...prev };
        delete updated[category];
        return updated;
      });
      return;
    }
  
    // Record individual answers
    setAnswers((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [questionId]: answer,
      },
    }));
  };
  

  const markCategoryComplete = (category) => {
    if (!completedCategories.includes(category)) {
      setCompletedCategories((prev) => [...prev, category]);
    }
  };
  console.log(answers)

  const allCategoriesCompleted = completedCategories.length === categories.length;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/categories"
          element={
            <CategorySelection
              categories={categories}
              completedCategories={completedCategories}
              allCategoriesCompleted={allCategoriesCompleted}
            />
          }
        />
        <Route
          path="/questions/:category"
          element={
            <QuestionPage
              categories={categories}
              answers={answers}
              handleAnswer={handleAnswer}
              markCategoryComplete={markCategoryComplete}
            />
          }
        />
        <Route
          path="/results"
          element={
            <ResultsPage
              answers={answers}
              categories={categories}
              completedCategories={completedCategories}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
