import React from "react";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import AddRewiev from "../add-review/add-review";
import PlayerPage from "../player-page/player-page";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import withLogin from "../../hocs/with-login/with-login";

const SignInWrapped = withLogin(SignIn);

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" >
          <Main />
        </Route>

        <Route path="/login" exact>
          <SignInWrapped />
        </Route>

        <PrivateRoute
          exact
          path="/mylist"
          render={() => <MyList/>}
        />

        <Route
          exact
          path="/films/:id?"
          render={(routes) => (
            <MoviePage
              routes={routes}
            />
          )}
        />

        <PrivateRoute
          exact
          path="/films/:id?/review"
          render={(routes) => {
            return (
              <AddRewiev routes={routes} />
            );
          }}
        />

        <Route
          exact
          path="/player/:id?"
          render={(routes) => (
            <PlayerPage
              routes={routes}
              onReplayButtonClick={() => routes.history.goBack()}
            />
          )}
        />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
