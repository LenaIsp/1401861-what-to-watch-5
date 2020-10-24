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

        <Route path="/login" exact>
          <SignIn />
        </Route>

        <Route path="/mylist" exact>
          <MyList
            films={films}
          />
        </Route>

        <Route path="/films/:id?" exact>
          <MoviePage
            films={films}
          />
        </Route>

        <Route path="/films/:id/review" exact>
          <AddRewiev
            films={films}
            reviews={reviews}
          />
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
