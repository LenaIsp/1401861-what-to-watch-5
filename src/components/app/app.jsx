import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import AddRewiev from "../add-review/add-review";


const App = (props) => {
  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            films={films}
            onAnswer={() => {}}
          />
        </Route>
        <Route
          exact
          path="/films/:id?"
          render={(routes) => (
            <MoviePage
              films={films}
              routes={routes}
            />
          )} />

        <Route
          exact
          path="/films/:id?/review"
          render={(routes) => (
            <AddRewiev
              routes={routes}
              films={films}
              reviews={reviews}
            />
          )} />

        <Route path="/mylist" exact>
          <MyList
            films={films}
          />
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

App.propTypes = {
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
