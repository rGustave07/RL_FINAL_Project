import React, {Component} from 'react';
import ContainerCard from "../ContainerCard";
import {Bar, Line, Pie, Doughnut, Radar} from 'react-chartjs-2';

class Chart1 extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
        chartData: {
          labels: ['Playlist 10', 'Playlist 11', 'Playlist 12', 'Playlist 13'],
          datasets:[{
            label: 'Performance Relative to Max',
            data: [
              245,
              333,
              222,
              432
            ],
            backgroundColor: 'green'
          }]
        }
    }
  }

  render(){
    return(
      <ContainerCard title="Graph">
        <div className='Chart1'>
          <Radar
            data={this.state.chartData}
            height={250}
            width={300}
            options={
              { maintainAspectRatio: false }
            }
          />
        </div>
      </ContainerCard>
    )
  }
}

export default Chart1;
