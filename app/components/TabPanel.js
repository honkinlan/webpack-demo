import React from 'react'
import { Tabs, Button } from 'antd';
const { TabPane } = Tabs;

import {reduceFrame, addFrame} from '../redux/actions'
import { connect } from 'react-redux'

@connect(
    // 需要的state参数
    state=>({frames: state.frames}),
    // 自动dispatch的action创建函数
    {reduceFrame, addFrame}
)
class TabPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '0'
    };
  }
  
  getActiveKey() {
    const key = this.props.frames.filter(item=>item.isActive)[0].id;
    // console.log(key)
    return key;
  }
  componentDidMount () {
    console.log(this.getActiveKey())
  }

  onChange = activeKey => {
    this.props.addFrame(this.props.frames.filter(i=> i.id===activeKey)[0])
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  remove = targetKey => {
      this.props.reduceFrame(targetKey);
  };

  render() {
    return (
        <Tabs
          hideAdd
          animated
          onChange={this.onChange}
          activeKey={this.getActiveKey()}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.props.frames.map(pane => (
            <TabPane tab={pane.name} key={pane.id}>
              <iframe src={pane.url}></iframe>
            </TabPane>
          ))}
        </Tabs>
    );
  }
}

export default TabPanel