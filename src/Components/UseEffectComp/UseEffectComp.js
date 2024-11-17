import { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("shourabh");

  useEffect(() => {
    // console.log("component did mount() beha");
    debugger;
    console.log("component did mount");

    // this fn will run once your component is unmounted
    return () => {
      debugger;
      console.log("this component has been unmounted");
    };
  },[count]);
  //   useEffect => componentDidUpdate + componentDidMount
  debugger;
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>increase count</button>
    </div>
  );
};

export default UseEffectComp;
