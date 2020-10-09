import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  NAME_MOVIE: `Grand Budapest Hotel`, GENERE: `Drama`, REALESE_DATE: 2014
};

ReactDOM.render(
    <App
      nameMovie={Settings.NAME_MOVIE} genere={Settings.GENERE} realeseDate ={Settings.GENERE}
    />,
    document.querySelector(`#root`)
);
