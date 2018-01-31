import React from 'react';
import InfoModal from '../InfoModal';

class Reports extends React.Component {

  render() {
    const props = { ...this.props };
    const dataSource = [
      {
        img: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
        title: 'Who',
        content: ''
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
        title: 'Job Statistics',
        content: ''
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title: 'Slave Load',
        content: ''
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title: 'HW Utilization',
        content: ''
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
        title: 'Resource Statistics',
        content: '' },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title: 'My Jobs',
        content: ''
      },
    ];
    const children = dataSource.map((item, i) => {
      const id = `reports${i}`;
      return (
        <div id={id} key={id}>
          <InfoModal icon={item.img} title={item.title} />
          {item.content}
        </div>
      );
    });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        {children}
      </div>
    );
  }
}

export default Reports;
