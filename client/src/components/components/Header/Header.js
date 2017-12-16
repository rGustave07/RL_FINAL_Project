import React from "react";
import "./Header.css";
import NewsCont from "../NewsCont";
import { Header as HeaderMDL, HeaderRow, Navigation, Spacer, Layout, Content, Drawer, HeaderTabs, Tab, Textfield } from 'react-mdl';

const Header = props =>{
  return(
    <HeaderMDL waterfall={true}>
      <HeaderRow className="android-header">
        <span className="android-title mdl-layout-title">
          <a class="statsTitle" href="/">Rocket Stats</a>
        </span>
        <Spacer />
        <div className="android-navigation-container">
          <Navigation className="android-navigation" style={{color:'blue'}}>
            <a className="mdl-typography--text-uppercase" href="/">Home</a>
            <a className="mdl-typography--text-uppercase" href="/stats">Stats</a>
            <a className="mdl-typography--text-uppercase" href="/items">Items</a>
          </Navigation>
        </div>
      </HeaderRow>
    </HeaderMDL>
  )
}

export default Header;
