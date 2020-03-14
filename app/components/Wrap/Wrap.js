import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import { connect } from 'react-redux'
import TabPanel from '../TabPanel'
import './wrap.less'
// https://www.webpackjs.com/configuration/watch/
// https://github.com/livereload/livereload-site/blob/master/livereload.com/_articles/troubleshooting/os-x-fsevents-bug-may-prevent-monitoring-of-certain-folders.md
@connect(
    state => ({ frames: state.frames })
)
export default class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            minHeight: 280
        }
    }

    componentDidMount(){
        // 兼容Safari v12.1.2 (14607.3.9) 父元素flex:auto，子元素height:100%;不起作用。
        // this.countFrameHeight();
    }
    render() {
        return <Content className="site-layout-background" style={this.styles} >
            <TabPanel />
            {/* {
                this.props.frames.map((item, index) => {
                   return (<iframe src={item.url} key={index}></iframe>)
                })
            } */}
        </Content>
    }
}