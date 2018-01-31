import React from 'react';
import InfoModal from  '../InfoModal';

class SettingsContainer extends React.Component {

  render() {
    const props = { ...this.props };
    const settingsArray = [
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
        title: 'System:node',
        green: 574,
        yellow: 8,
	cyan: 53
      },
    ];
    const children = settingsArray.map((item, i) => {
      const id = `visited${i}`;
      return (
        <tr id={id} key={id}>
	  <td>
            <InfoModal icon={item.icon} title={item.title} />
	  </td>
	  <td width="200" style={{backgroundColor:'green', textAlign:'center'}}>
          {item.green}
	  </td>
	  <td width="5" style={{backgroundColor:'orange', textAlign:'center'}}>
          {item.yellow}
	  </td>
	  <td width="25"style={{backgroundColor:'cyan', textAlign:'center'}}>
          {item.cyan}
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


export default SettingsContainer;
