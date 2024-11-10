import "./App.css";
import Form from "./Components/Form";
import FormClass from "./Components/FormClass";
import Greet from "./Components/Greet";
import GreetClass from "./Components/GreetClass";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import SearchComp from "./Components/SearchComp";

function App() {
  return (
    <div>
      {/* <Form /> */}
      {/* <HomePage /> */}
      {/* <FormClass /> */}
      <SearchComp />
      {/* <Greet name="sourabh" age={26} />
      <GreetClass name="prateek" age={25} /> */}
    </div>
  );
}

export default App;
