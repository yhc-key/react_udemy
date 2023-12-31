import { useState, useEffect } from "react";

import Card from "./Card";

const ForwardCounter = () => {
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(prev => prev+1);
    setCount(prev => prev+1);
    setCount(prev => prev+1);

  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <div>{counter}</div>
      <div>{count}</div>
      <button onClick={handleCount}>countUp</button>
    </Card>
  );
};

export default ForwardCounter;
