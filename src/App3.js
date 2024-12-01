import { useState } from "react";

const App3 = () => {
  const [count, setCount] = useState(0);
//   if (show === false) {
//     return null;
//   }
  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>increase count</button>
    </div>
  );
};

export default App3;
