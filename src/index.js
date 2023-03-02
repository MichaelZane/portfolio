import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import {HashRouter as Router} from "react-router-dom";
import './fonts/VIDEOPHREAK.ttf';


ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById("root"));
