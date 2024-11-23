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
    let id = setInterval(() => {
      console.log('count increased');
      setCount(prev => prev + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return <div>{count}</div>;
};

export default StopWatch;
