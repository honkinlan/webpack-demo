import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import { connect } from 'react-redux'
import './wrapper.less'

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
    render() {
        return <Content className="site-layout-background" style={this.styles} >
            {
                this.props.frames.forEach(item => {
                   return <iframe src="{item.url}"></iframe>
                })
            }
        </Content>
    }
}