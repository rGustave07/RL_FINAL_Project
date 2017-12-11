import React from "react";
import "./Buttons.css";

const Buttons = props =>

<div id={props.title} className="mdl-grid">
  <button className="mdl-button mdl-js-button mdl-button--raised"> Wheels </button>
  <button className="mdl-button mdl-js-button mdl-button--raised"> Bodies </button>
  <button className="mdl-button mdl-js-button mdl-button--raised"> Boosts </button>
  <button className="mdl-button mdl-js-button mdl-button--raised"> Antennas </button>
  <button className="mdl-button mdl-js-button mdl-button--raised"> Decals </button>
  <button className="mdl-button mdl-js-button mdl-button--raised"> Toppers </button>
  <button className="mdl-button mdl-js-button mdl-button--raised"> Trails </button>
  <button className="mdl-button mdl-js-button mdl-button--raised"> Goal Explosions </button>
  <button className="mdl-button mdl-js-button mdl-button--raised"> Paints </button>
  <button className="mdl-button mdl-js-button mdl-button--raised"> Banners </button>
</div>

export default Buttons;
