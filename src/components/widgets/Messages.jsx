import React from 'react';

class Messages extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        title: 'problems? call x34444 or email admin@rdtda.com',
        datasets: [
          {
            label: 'Urgent host ft01 shutdown',
            color: '#E8575A',
          },
          {
            label: 'Host ft09 maintenance window Fri 9:00pm-9:30pm',
            color: '#0094D6',
          },
          {
            label: 'Host ft07 maintenance window Fri 9:00pm-9:30pm',
            color: '#0094D6',
          },
          {
            label: 'Host ft12 maintenance window Fri 9:00pm-9:30pm',
            color: '#0094D6',
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
         <h4>{this.state.data.title}</h4>
         <p><font color={this.state.data.datasets[0].color}>{this.state.data.datasets[0].label}</font></p>
	 <p><font color={this.state.data.datasets[1].color}>{this.state.data.datasets[1].label}</font></p>
      </div>
    );
  }
}

export default Messages;
