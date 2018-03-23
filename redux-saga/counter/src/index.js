import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";

import Counter from "./Counter";
import reducer, { INCREMENT, DECREMENT } from "./reducer";

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()));

const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action(INCREMENT)}
      onDecrement={() => action(DECREMENT)}
    />,
    document.getElementById("root")
  );
}

registerServiceWorker();
render();
store.subscribe(render);
