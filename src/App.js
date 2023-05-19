import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount(count + 1);
  };
  const onDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>code-next-react-counter</h1>

      <hr />

      <div>
        <h1>Count: {count}</h1>
        <button
          id="increment-btn"
          className="btn btn-success"
          onClick={onIncrementClick}
          style={{ marginRight: '8px' }}
        >
          increment
        </button>

        <button
          id="decrement-btn"
          className="btn btn-warning"
          onClick={onDecrementClick}
        >
          decrement
        </button>
      </div>
    </div>
  );
};
