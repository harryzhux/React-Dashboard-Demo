import React from 'react';
import ListTable from '../ListTable';

class Workload extends React.Component {
  render () {
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

    return (
      <ListTable data={data} pagination={false} />
    );
  }
}

export default Workload;
