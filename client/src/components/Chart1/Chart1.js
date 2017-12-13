import React, {Component} from 'react';
import ContainerCard from "../ContainerCard";
import {Bar, Line, Pie, Doughnut, Radar} from 'react-chartjs-2';

class Chart1 extends Component{
  constructor(props){
    super(props);
    this.state = {
        chartData: {
          labels: ['Playlist 10', 'Playlist 11', 'Playlist 12', 'Playlist 13'],
          datasets:[{
            label: 'Performance Relative to Max',
            data: [
              props.data[0].skill,
              props.data[1].skill,
              props.data[2].skill,
              props.data[3].skill
            ],
            backgroundColor: 'grey'
          }]
        },
        data2: props.data2
    }
  }

  render(){
    return(
      <ContainerCard title="Advanced Stats">
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
