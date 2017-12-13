import React from "react";
import "./NewsCard.css";

import ContainerCard from "../ContainerCard";

const NewsCard = props =>
  <ContainerCard className="max-width" title={props.title}>
    <a href={props.link} >
      <img className="max-image" src={props.img} alt=""/>
      <p>{props.summary}</p>
    </a>
  </ContainerCard>

export default NewsCard;
