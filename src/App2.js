import React from "react";

import { useCallback, useMemo, useState } from "react";

const App2 = ({ val }) => {
  console.log("this component re-rendered");
  const expensive = useCallback(() => {
    // console.log("value of val--->", val);
    let sum = 0;
    // console.log("expensive fn ran.....");
    for (let i = 0; i < val; i++) {
      sum++;
    }
    return sum;
  }, [val]);
  const [count, setCount] = useState(0);
  const sumVal = useMemo(expensive, [val]);
  return (
    <div>
      {sumVal}
      <br />
      {count}
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default React.memo(App2);
// App2 will be re - rendered only when props are changed
// if we are using React.memo
