// Options.jsx
import React from 'react';

const Options = ({ setFeedback, resetFeedback }) => {
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [type]: prevFeedback[type] + 1 }));
  };

  return (
    <div>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      <button onClick={resetFeedback}>Reset</button>
    </div>
  );
};

export default Options;
