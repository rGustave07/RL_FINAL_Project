import React from "react";
import "./Home.css";
import { Content, Card, CardText, CardActions, CardTitle, Button, CardMenu, IconButton } from 'react-mdl';
import NewsCont from "../NewsCont";

const Home = props =>
  <div>
    {/* <a name="top"></a> */}
    <div className="android-be-together-section mdl-typography--text-center">
      {/* <div className="logo-font android-slogan">Rocket Stats</div>
      <div className="logo-font android-sub-slogan">Your source for Rocket League stats data and item infomation.</div> */}
      <Card shadow={0} style={{width: '800px', margin: 'auto', position:'relative', top:'160px'}}>
          <CardTitle style={{color: '#fff', height: '300px', background: 'url(./images/1300113.jpeg) center / cover'}}>Welcome</CardTitle>
          <CardText>
              Your source for Rocket League stats data and item infomation.
          </CardText>
          <CardActions border>
              <Button href="/stats" colored>Search Stats</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
      </Card>
    </div>
    <div className="android-customized-section">
      <div className="android-customized-section-text">
        <div className="mdl-typography--font-light mdl-typography--display-1-color-contrast">Search Items, Find Stats.<br />Your info, Made for you.</div>
        <p className="mdl-typography--font-light">
          Find out how you stack up against other players, get your stats today. Search items, and build up your favorites into a list!
          <br />
          <a href="/items" className="android-link mdl-typography--font-light">GET STATS!</a>
        </p>
      </div>
      <NewsCont />
      <div className="android-customized-section-image"></div>
    </div>
  </div>


export default Home;
