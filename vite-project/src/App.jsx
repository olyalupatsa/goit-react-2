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


  useEffect(() => {

    const handleBeforeUnload = () => {
      localStorage.removeItem('feedback');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options setFeedback={setFeedback} resetFeedback={resetFeedback} />
      <Feedback feedback={feedback} />
      <Notification feedback={feedback} />
    </div>
  );
};

export default App;
