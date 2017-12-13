import React from "react";
import "./Stats.css";
import { Button } from 'react-mdl';
import ContainerCard from "../ContainerCard";
import Chart1 from "../Chart1";
import Chart2 from "../Chart2";
import API from "../../utils/API";

class Stats extends React.Component {
  state = {
    id: 1234567,
    stats: [],
    gas: null,
    //gas stands for GOALS ASSISTS SAVES
  }

  handleText = event => {
    this.setState({ id: event.target.value });
  }

  genChart = () => {
    return (
        <div>
          <ContainerCard title="Advanced Stats">
            <Chart1 data={this.state.stats}/>
            <Chart2 data={this.state.gas}/>
          </ContainerCard>
        </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({stats: []});
    this.setState({gas: null});
    API.searchInfo(this.state.id)
       .then(res => {
          this.setState({ stats: res.data });
          console.log(res.data);
       });
       // Create another API.searchinfo function that hits a different route
    API.searchStats(this.state.id)
       .then( res => {
            this.setState({ gas: res.data });
        })
        // this.setState({ GAS: res.data});
  }

  render() {
    return <div>
      <a name="top">View your statistics</a>
      <div className="android-be-together-section mdl-typography--text-center">
        <ContainerCard title="Stats Search">
          <div className="flex">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="sample3" onChange={this.handleText} value={this.state.id} />
                <label className="mdl-textfield__label" htmlFor="sample3">Enter Steam ID</label>
              </div>
            </form>
            <Button disabled={!!!this.state.id} onClick={this.handleSubmit.bind(this)} ripple={true}> Submit </Button>
          </div>
          {this.state.stats.length !== 0 && this.state.gas !== null && this.genChart()}
        </ContainerCard>
      </div>
    </div>
  }
}

export default Stats;
