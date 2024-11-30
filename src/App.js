import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Counter from "./Components/Counter/Counter";
import HomePage from "./Components/Homepage/HomePage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Search from "./Components/Search/Search";
import Solution from "./Components/Solution/Solution";
import UsePrevComp from "./Components/UsePrevComp/UsePrevComp";
import { useOnlineStatus } from "./hooks/useOnlineStatus";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import App2 from "./App2";
import { useState } from "react";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar />
//         <Outlet />
//       </>
//     ),
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "/login", element: <Login /> },
//       { path: "/register", element: <Register /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);

function App() {
  // const [show, setShow] = useState(true);
  // const [count,setCount] = useState(0);
  // const prevCount = usePrev(count);
  // const onlineStatus = useOnlineStatus();
  // if (!onlineStatus) {
  //   return <div>No internet connection....</div>;
  // }
  const [val, setVal] = useState(1);
  const [count,setCount] = useState(0);
  return (
    <div>
      <App2 val={val} />
      <button onClick={() => setVal(val + 1)}>increase val</button>
      <br />
      <br />
      {count}
      <button onClick={()=>setCount(count +1 )}> increase count </button>
      {/* <RouterProvider router={router} /> */}
      {/* <HomePage /> */}
      {/* <Counter /> */}
      {/* <Login /> */}
      {/* <Solution /> */}
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
