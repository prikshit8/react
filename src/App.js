import "./App.css";
import Counter from "./Components/Counter/Counter";
import HomePage from "./Components/Homepage/HomePage";
import Search from "./Components/Search/Search";
import UsePrevComp from "./Components/UsePrevComp/UsePrevComp";

function App() {
  // const [show, setShow] = useState(true);
  // const [count,setCount] = useState(0);
  // const prevCount = usePrev(count);
  return (
    <div>
      {/* <HomePage /> */}
      <Counter />
      {/* <Search /> */}
      {/* <h1>Current Count: {count}</h1>
      <h2>Prev Count: {prevCount}</h2>
      <button onClick={()=>setCount(count+1)}>Increase Count</button> */}
      {/* {show && <Example />} */}
      {/* {show && <StopWatch />} */}
      {/* {show && <UseEffectComp />}*/}
      {/* <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>  */}
      {/* <div>currentCount - {count}</div>
      <div>prevCount - {count}</div>
      <button onClick={() => setCount(count + 1)}>increase count</button> */}
      {/* <h2 className="heading">We are learning react</h2> */}
      {/* <Form /> */}
      {/* <HomePage />
      <TrainCard
        train={{
          name: "Rajdhani exp",
          from: "Delhi",
          to: "Mumbai",
          departureTime: "8:00 am",
          arrivalTime: "10:00 pm",
          fare: 100,
        }}
      /> */}
      {/* <FormClass /> */}
      {/* <SearchComp /> */}
      {/* <Greet name="sourabh" age={26} />
      <GreetClass name="prateek" age={25} /> */}
    </div>
  );
}

export default App;
