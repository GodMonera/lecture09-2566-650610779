"use client";

import { useState } from "react";

export default function CounterPage() {
  //array distructuring
  const [count, setCount] = useState(0);
  const increaseBtnOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button className="btn btn-primary" onClick={increaseBtnOnClick}>
        Increase
      </button>
    </div>
  );
}
