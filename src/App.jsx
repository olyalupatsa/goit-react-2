import React, { useState, useEffect } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
const App = () => {
  const initialFeedbackState = JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(initialFeedbackState);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };


  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round((feedback.good / total) * 100);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options setFeedback={handleFeedback} resetFeedback={resetFeedback} />
      <Feedback feedback={feedback} positivePercentage={positivePercentage} />
      <Notification feedback={feedback} />
    </div>
  );
};

export default App;
