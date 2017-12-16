import React from "react";
import "./NewsCont.css";

import NewsCard from "../NewsCard";

const news = require("./news.json");

const NewsCont = props => <div>
                            <h1 className="margin-left">News</h1>
                            <div>
                              { news.map(e => <NewsCard {...e} />) }
                            </div>
                          </div>

export default NewsCont;
