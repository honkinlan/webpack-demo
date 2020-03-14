import React from 'react'
import { Tabs, Button } from 'antd';
const { TabPane } = Tabs;

import {reduceFrame} from '../redux/actions'
import { connect } from 'react-redux'

@connect(
    // 需要的state参数
    state=>({frames: state.frames}),
    // 自动dispatch的action创建函数
    {reduceFrame}
)
class TabPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '3'
    };
  }
  componentDidMount () {
    // console.log(this.props.frames)
    // this.setState({ activeKey: this.props.frames[0].id.toString() });
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  remove = targetKey => {
      this.props.reduceFrame(targetKey);
  };

  render() {
    return (
      <div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.props.frames.map(pane => (
            <TabPane tab={pane.name} key={pane.id}>
              {/* {pane.content} */}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default TabPanel