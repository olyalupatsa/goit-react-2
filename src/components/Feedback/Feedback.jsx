import React from 'react';

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total > 0 && (
        <ul style={{ listStyleType: 'none' }}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {isNaN(positivePercentage) ? 0 : positivePercentage}%</li>
        </ul>
      )}
    </div>
  );
};

export default Feedback;