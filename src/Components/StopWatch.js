import { useEffect, useState } from "react";

// cars24, jiocinema, tekion , mmt
const StopWatch = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, 1000);
  //   }, [count]);
  useEffect(() => {
    setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }, []);
  return <div>{count}</div>;
};

export default StopWatch;
