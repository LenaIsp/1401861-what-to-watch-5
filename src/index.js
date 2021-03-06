import React from "react";
import ReactDOM from "react-dom";

import rootReducer from "./store/reducer/root-reducer";

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import {createAPI} from "./services/api";
import {requireAuthorization} from "./store/action";
import {fetchMovieList, checkAuth, fetchMoviePromo} from "./store/api-action";
import {AuthorizationStatus} from "./const";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";

import App from "./components/app/app";
import Error from "./components/error/error";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

// для devTools
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);


Promise.all([
  store.dispatch(checkAuth()),
  store.dispatch(fetchMovieList()),
  store.dispatch(fetchMoviePromo()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
})
.catch(() => {
  ReactDOM.render(
      <Error></Error>,
      document.querySelector(`#root`)
  );
});
