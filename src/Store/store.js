import { createStore } from "redux";
import couterReducer from "./reducer";

// this store reducer
const store = createStore(couterReducer);

export default store;


// 1. create a store which is having (logic & initial state) ( reducer)
// 2. we need to wrap app with store
// 3. we will subscribe component with state that has to be used (useSelector)
// 4. we will dispatch actions on event trigger