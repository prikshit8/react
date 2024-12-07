import { DECREMENT, INCREMENT } from "./actions";

const intialState = {
  count: 0,
};

const couterReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return { ...state, count: state.count + actions.payload };
    case DECREMENT:
      return { ...state, count: state.count - actions.payload };
    default:
      return state;
  }
};

export default couterReducer;
