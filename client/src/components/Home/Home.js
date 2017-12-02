import React from "react";
import "./Home.css";
import { Content } from 'react-mdl'

const Home = props =>
    <div>
      <a name="top"></a>
      <div className="android-be-together-section mdl-typography--text-center">
        <div className="logo-font android-slogan">Rocket Stats</div>
        <div className="logo-font android-sub-slogan">Your source for rocket league stats data and item infomation.</div>
      </div>
      <div className="android-customized-section">
        <div className="android-customized-section-text">
          <div className="mdl-typography--font-light mdl-typography--display-1-color-contrast">Search Items, Find Stats.<br />Your info, Made for you.</div>
          <p className="mdl-typography--font-light">
            Find out how you stack up against other players, get your stats today. Search items, and build up your favorites into a list!
            <br />
            <a href="/items" className="android-link mdl-typography--font-light">Find Items</a>
          </p>
        </div>
        <div className="android-customized-section-image"></div>
      </div>
    </div>

export default Home;
