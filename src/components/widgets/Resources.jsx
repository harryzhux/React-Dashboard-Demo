import React from 'react';
import InfoModal from '../InfoModal';

class Resources extends React.Component {

  render() {
    const props = { ...this.props };
    const dataSource = [
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
        title: 'DiscIO',
        content: '0/unlimited'
      },
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
        title: 'Resource2',
        content: '10/200'
      },
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
        title: 'Resource3',
        content: '15000/100000'
      },
    ];
    const children = dataSource.map((item, i) => {
      const id = `resources${i}`;
      return (
        <tr id={id} key={id}>
	  <td>
          <InfoModal icon={item.icon} title={item.title} />
	  </td>
	  <td> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
	  <td>
          {item.content}
	  </td>
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

export default Resources;
