import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";


const App = (props) => {
  const {nameMovie, genere, realeseDate} = props;

  return (
    <Main nameMovie={nameMovie} genere={genere} realeseDate={realeseDate}/>
  );
};


App.propTypes = {
  nameMovie: PropTypes.string.isRequired,
  genere: PropTypes.string.isRequired,
  realeseDate: PropTypes.number.isRequired,
};

export default App;
