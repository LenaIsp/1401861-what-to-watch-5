import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, } from "react-router-dom";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MoviePage from "../movie-page/movie-page";


const App = (props) => {
  const {nameMovie, genere, realeseDate} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main nameMovie={nameMovie} genere={genere} realeseDate={realeseDate}/>
        </Route>

        <Route path="/login" exact component = {SignIn} />
        
        <Route path="/films/:id?" exact component = {MoviePage} />

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
