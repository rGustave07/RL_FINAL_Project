import React, {Component} from 'react';
import {Polar} from 'react-chartjs-2';

class Chart2 extends Component{
  constructor(props){
    super(props);
    this.state = {
        chartData: {
          labels: ['assists', 'goals', 'mvps', 'saves', 'shots', 'wins'],
          datasets:[{
            label: 'Performance Overlook',
            data: [props.data.assists,
                   props.data.goals,
                   props.data.mvps,
                   props.data.saves,
                   props.data.shots,
                   props.data.wins],
            backgroundColor: ['blue','red','yellow','orange','black','green']
          }]
        }
    }
  }

  render(){
    return(
        <div className='Chart1'>
          <Polar
            data={this.state.chartData}
            height={250}
            width={300}
            options={
              { maintainAspectRatio: false }
            }
          />
        </div>
    )
  }
}

export default Chart2;
