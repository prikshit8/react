import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseBy5 = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  const increaseBy5fixed = () => {
    setCount(count + 100); /// this updates the prev value immediately
    setCount((prev) => prev + 1); // 0 => 1
    setCount((prev) => prev + 1); //1 => 2
    setCount((prev) => prev + 1); // 2=> 3
    setCount(count + 100);
    setCount((prev) => prev + 1); // 3 => 4
  };
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onClick={increaseBy5fixed}>increase count by 5</button>
      <button onClick={increase}>increase count by 1</button>
    </div>
  );
};

export default Counter;
