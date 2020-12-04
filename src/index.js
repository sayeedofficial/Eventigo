import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./app/layouts/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configstore";
import Scrolltotop from "./app/common/util/scrolltotop";

const store = configureStore();
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Scrolltotop>
        <App />
      </Scrolltotop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
