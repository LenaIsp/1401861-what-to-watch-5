import React from "react";
import ReactDOM from "react-dom";

import rootReducer from "./store/reducer/root-reducer";

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import {createAPI} from "./services/api";
import {requireAuthorization} from "./store/action";
import {fetchMovieList, checkAuth} from "./store/api-action";
import {AuthorizationStatus} from "./const";
import {composeWithDevTools} from "redux-devtools-extension";

import reviews from "./mocks/reviews";
import App from "./components/app/app";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

// для devTools
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchMovieList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews = {reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
