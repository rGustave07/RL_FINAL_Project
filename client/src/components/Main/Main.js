import React from "react";
import "./Main.css";
import { Content } from 'react-mdl';
import Home from "../Home";
import Stats from "../Stats";
import Items from "../Items";
import { Switch, Route } from "react-router-dom";

const Main = props =>
  <Content className="android-content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/stats" component={Stats} />
      <Route path="/items" component={Items} />
    </Switch>
  </Content>

export default Main;
