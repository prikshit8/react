import { useEffect, useRef, useState } from "react";

const UsePrevComp = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h1>current count: {count}</h1>
      <h2>prev count: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 10)}>increase count</button>
    </div>
  );
};

export default UsePrevComp;
