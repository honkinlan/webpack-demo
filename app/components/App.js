
import React from 'react'
import { Layout } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '@styles/common.less'
import SideMenu from '@components/SideMenu'
import Header from '@components/header'
import Wrapper from '@components/Wrap/Wrap'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    toggle() {
        console.log(11)
        // console.log(collapsed)
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        return (
            <Layout>
                <SideMenu collapsed={this.state.collapsed} />
                <Layout className="site-layout">
                    <Header collapsed={this.state.collapsed} onClick={() => this.toggle()} />
                    <Wrapper />
                </Layout>
            </Layout>
        )
    }
}