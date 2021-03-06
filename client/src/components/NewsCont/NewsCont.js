import React from "react";
import "./NewsCont.css";

import NewsCard from "../NewsCard";

const news = require("./news.json");

console.log(news);

const NewsCont = props => <div>
                            <h1 className="margin-left">News</h1>
                            <div>
                              { news.map((e,i) => <NewsCard key={i} {...e} />) }
                            </div>
                          </div>

export default NewsCont;
