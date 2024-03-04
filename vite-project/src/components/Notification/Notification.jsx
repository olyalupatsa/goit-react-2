
import React from 'react';

const Notification = ({ feedback }) => {
  return (
    <div>
      {Object.values(feedback).every((value) => value === 0) && (
        <p>No feedback given yet</p>
      )}
    </div>
  );
};

export default Notification;
