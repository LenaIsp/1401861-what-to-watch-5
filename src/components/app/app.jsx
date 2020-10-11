import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, } from "react-router-dom";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import AddRewiev from "../add-review/add-review";


const App = (props) => {
  const {nameMovie, genere, realeseDate} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main nameMovie={nameMovie} genere={genere} realeseDate={realeseDate}/>
        </Route>
        <Route path="/login" exact component = {SignIn} />  
        <Route path="/mylist" exact component = {MyList} />
        <Route path="/films/:id?" exact component = {MoviePage} />
        <Route path="/films/:id/review" exact component = {AddRewiev} />
        <Route path="/player/:id?" exact component = {Player} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  nameMovie: PropTypes.string.isRequired,
  genere: PropTypes.string.isRequired,
  realeseDate: PropTypes.number.isRequired,
};

export default App;
