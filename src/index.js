import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';

// для devTools
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews = {reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
