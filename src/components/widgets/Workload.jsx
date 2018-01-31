import React from 'react';
import ListTable from '../ListTable';

class Workload extends React.Component {
  render () {
    const props = { ...this.props };
    const data = [
      {
        key: 'wl1',
        name: 'Running jobs',
        result: 10,
        address: '#runningjobs',
	space: '     ',
      },
      {
        key: 'wl2',
        name: 'Jobs in queue',
        result: 42,
        address: '#jobsinqueue',
	space: '     ',
      },
      {
        key: 'wl3',
        name: 'Longest wait time',
        result: '21s',
        address: '#',
	space: '     ',
      },
      {
        key: 'wl4',
        name: 'Jobs/Hour',
        result: 32,
        address: '#jobshour',
	space: '     ',
      },
      {
        key: 'wl5',
        name: 'FairShare',
        result: 'On',
        address: '#fairshare',
	space: '     ',
      },
      {
        key: 'wl6',
        name: 'Preemption',
        result: '',
        address: '#preemption',
	space: '     ',
      },
      {
        key: 'wl7',
        name: 'Job classes',
        result: '',
        address: '#jobclasses',
	space: '     ',
      },
    ];
    const children = data.map((item, i) => {
      const id = `job${i}`;
      return (
        <tr id={id} key={id}>
          <td><a href=""><b>{item.name}</b></a></td>&nbsp; &nbsp; &nbsp; &nbsp;<td></td><td>{item.result}</td>
        </tr>
      );
    });
    return (
      <table {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <tbody>
        {children}
        </tbody>
      </table>
    );
  }
}

export default Workload;
