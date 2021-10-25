import React, { useReducer } from "react";
import Main from "./Main";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "SHOW_TEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <div>
      <Main />
      <div>{state.count}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "SHOW_TEXT" });
          }}
        >
          INCREMENT
        </button>
      </div>
      <div>{state.showText && "Hello there"}</div>
    </div>
  );
};

export default ReducerTutorial;
