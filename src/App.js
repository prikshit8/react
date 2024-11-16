import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import FormClass from "./Components/FormClass";
import Greet from "./Components/Greet";
import GreetClass from "./Components/GreetClass";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import SearchComp from "./Components/SearchComp";
import TrainCard from "./Components/TrainCard";
import StopWatch from "./Components/StopWatch";

function App() {
  return (
    <div>
      <StopWatch />
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
