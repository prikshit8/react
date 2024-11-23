import { useState } from "react";
import { usePrev } from "../../hooks/usePrev";

const UsePrevComp = () => {
  const [count, setCount] = useState(0); // 10
  const prevCount2 = usePrev(count); // prevCount2 is using custoom hook
  // const prevCount = useRef(count); // 0

  // useEffect(() => {
  //   prevCount.current = count;
  // }, [count]); /// 0 -> 10

  return (
    <div>
      <h1>current count: {count}</h1>
      {/* <h2>prev count: {prevCount.current}</h2>  */}
      <h2>prev count: {prevCount2}</h2> {/* using custom hook */}
      <button onClick={() => setCount(count + 10)}>increase count</button>
    </div>
  );
};

export default UsePrevComp;
