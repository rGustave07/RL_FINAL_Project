import React from "react";
import "./NewsCard.css";

import ContainerCard from "../ContainerCard";

const NewsCard = props =>
  <div id={props.title} className="mdl-grid">
    <div className="black-border mdl-cell mdl-cell--12-col mdl-card orange-shadow">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{props.title}</h2>
      </div>
      <div className="mdl-card__media">
        <img border="0" alt="" />
      </div>
      <div className="mdl-grid nyr-copy">
        {props.children}
      </div>
    </div>
  </div>


export default NewsCard;
