import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import InfoModal from  '../InfoModal';

class SettingsContainer extends React.Component {

  render() {
    const props = { ...this.props };
    const settingsArray = [
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
        title: 'Server',
        content: 'system configuration'
      },
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title: 'Database',
        content: 'configure, start/stop database'
      },
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title: 'Item3',
        content: 'short description'
      },
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title: 'Item4',
        content: 'short description'
      },
      {
        icon: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
        title: 'Item5',
        content: 'short description'
      },
    ];
    const children = settingsArray.map((item, i) => {
      const id = `settings${i}`;
      return (
        <div id={id} key={id}>	
          <InfoModal icon={item.icon} title={item.title} />
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


export default SettingsContainer;
