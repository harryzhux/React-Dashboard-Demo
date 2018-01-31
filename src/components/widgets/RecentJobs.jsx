import React from 'react';
import ListTable from '../ListTable';

class RecentJobs extends React.Component {
  render () {
    const props = { ...this.props };
    const data = [
      {
        key: 'jl0',
        status: 'Queued',
        name: '000247813',
        result: 'vw /home/hhzhu/vov/2017/linux64/scripts/vovboot vovsh -n -f 2018.01.24/sls_1516843440438.tcl > /dev/nul',
      },
      {
        key: 'jl1',
        status: 'Queued',
        name: '000247814',
        result: 'vw /home/hhzhu/vov/2017/linux64/scripts/vovboot vovsh -n -f 2018.01.24/sls_1516843440535.tcl > /dev/null',
      },
      {
        key: 'jl2',
        status: 'Queued',
        name: '000247815',
        result: 'vw /home/hhzhu/vov/2017/linux64/scripts/vovboot vovsh -n -f 2018.01.24/sls_1516843440626.tcl > /dev/null',
      },
      {
        key: 'jl3',
        status: 'Queued',
        name: '000247816',
        result: 'vw /home/hhzhu/vov/2017/linux64/scripts/vovboot vovsh -n -f 2018.01.24/sls_1516843440716.tcl > /dev/null',
      },
      {
        key: 'jl4',
        status: 'Queued',
        name: '000247817',
        result: 'vw /home/hhzhu/vov/2017/linux64/scripts/vovboot vovsh -n -f 2018.01.24/sls_1516843440802.tcl > /dev/null',
      },
    ];
    const children = data.map((item, i) => {
      const id = `job${i}`;
      return (
        <tr id={id} key={id}>
	  <td><a href="">{item.name}</a></td>
	  <td>&nbsp;<b>{item.status}</b></td>
	  <td>&nbsp;{item.result}</td>
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

export default RecentJobs;
