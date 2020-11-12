import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import AddRewiev from "../add-review/add-review";

const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            onAnswer={() => {}}
          />
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

        <Route path="/player/:id?" exact>
          <Player />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default App;
