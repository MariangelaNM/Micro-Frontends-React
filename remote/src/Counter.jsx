import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div style={{ backgroundColor: "#1e3a8a", color: "#fff", padding: "1.25rem", borderRadius: "0.5rem" }}>
      <div>Current Count: {count}</div>
      <button 
        onClick={increment}
  className="counter"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
