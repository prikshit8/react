import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./Store/actions";

const ReduxApp = () => {
  //   const [count, setCount] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT, payload: 1 })}>
        increase count by 1
      </button>
      <button onClick={() => dispatch({ type: INCREMENT, payload: 5 })}>
        increase count by 5
      </button>
      <button onClick={() => dispatch({ type: DECREMENT,payload:1 })}>
        decrease count
      </button>
    </div>
  );
};

export default ReduxApp;
