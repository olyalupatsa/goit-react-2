import React, { useState, useEffect } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

 const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };


   const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <Description />
      <Options onFeedback={handleFeedback} />
      <Feedback 
        good={feedback.good} 
        neutral={feedback.neutral} 
        bad={feedback.bad} 
        total={total} 
        positivePercentage={positivePercentage} 
      />
      <Notification feedback={feedback} />
    </div>
  );
};

export default App;