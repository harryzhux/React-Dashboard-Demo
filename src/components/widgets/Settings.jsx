import React from 'react';
import InfoModal from  '../InfoModal';

class Settings extends React.Component {

  render() {
    const props = { ...this.props };
    const settingsArray = [
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
        title: 'Actions',
        content: 'save, reread, sanity, shutdown, ...'
      },
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title: 'Administration',
        content: 'configure, start/stop database, ...'
      },
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title: 'Network',
        content: 'hosts, processes, file system, ...'
      },
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title: 'Internal Data Structures',
        content: 'server environemnet, config params, ... '
      },
    ];
    const children = settingsArray.map((item, i) => {
      const id = `settings${i}`;
      return (
        <tr id={id} key={id}>	
          <td>
            <InfoModal icon={item.icon} title={item.title} />
          </td>
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

export default Settings;
