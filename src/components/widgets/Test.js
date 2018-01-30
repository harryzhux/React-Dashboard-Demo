import React from 'react';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        title: 'Hello World',
        datasets: [
          {
            label: 'Text 1',
            color: '#E8575A',
          },
          {
            label: 'My Second dataset',
            color: '#0094D6',
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
         <h1>{this.state.data.title}</h1>
         <p><font color={this.state.data.datasets[0].color}>{this.state.data.datasets[0].label}</font></p>
	 <p><font color={this.state.data.datasets[1].color}>{this.state.data.datasets[1].label}</font></p>
      </div>
    );
  }
}

export default Test;
