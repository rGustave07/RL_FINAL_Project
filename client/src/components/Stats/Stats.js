import React from "react";
import "./Stats.css";
import { Content, Button } from 'react-mdl';
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
      <a name="top"></a>
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
          {/* {
            this.state.stats.length !== 0 && (<table className="mdl-data-table mdl-js-data-table">
            <thead>
              <tr>
                <th className="mdl-data-table__cell--non-numeric">Playlist</th>
                <th>Win Streak</th>
                <th>Skill</th>
                <th>Matches Played</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.stats[0].playlist}</td>
                <td>{this.state.stats[0].win_streak}</td>
                <td>{this.state.stats[0].skill}</td>
                <td>{this.state.stats[0].matches_played}</td>
              </tr>
              <tr>
                <td>{this.state.stats[1].playlist}</td>
                <td>{this.state.stats[1].win_streak}</td>
                <td>{this.state.stats[1].skill}</td>
                <td>{this.state.stats[1].matches_played}</td>
              </tr>
              <tr>
                <td>{this.state.stats[2].playlist}</td>
                <td>{this.state.stats[2].win_streak}</td>
                <td>{this.state.stats[2].skill}</td>
                <td>{this.state.stats[2].matches_played}</td>
              </tr>
              <tr>
                <td>{this.state.stats[3].playlist}</td>
                <td>{this.state.stats[3].win_streak}</td>
                <td>{this.state.stats[3].skill}</td>
                <td>{this.state.stats[3].matches_played}</td>
              </tr>
            </tbody>
          </table>)
          } */}
          {/* Add another chart */}
        </ContainerCard>
      </div>
    </div>
  }
}

export default Stats;
