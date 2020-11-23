import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import AddRewiev from "../add-review/add-review";
import PlayerPage from "../player-page/player-page";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route
          exact
          path="/films/:id?"
          render={(routes) => (
            <MoviePage
              routes={routes}
            />
          )} />

        <Route
          exact
          path="/films/:id?/review"
          render={(routes) => (
            <AddRewiev
              routes={routes}
            />
          )} />

        <Route path="/mylist" exact>
          <MyList />
        </Route>

        <Route path="/login" exact>
          <SignIn />
        </Route>

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
