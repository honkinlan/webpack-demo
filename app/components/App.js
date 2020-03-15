
import React from 'react'
import { Layout } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '@styles/common.less'
import SideMenu from '@components/SideMenu'
import Header from '@components/header'
import Wrapper from '@components/Wrap/Wrap'
import duArr from '@public/du'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            jiTangDu: ''
        }
    }
    RandomNum (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    getDuJiTang () {
        const index = this.RandomNum(0, duArr.length-1);
        console.log(index)
        const jiTangDu = duArr[index];
        this.setState({jiTangDu})
    }
    
    toggle() {
        console.log(11)
        // console.log(collapsed)
        this.setState({collapsed: !this.state.collapsed})
    }
    componentWillMount () {
        this.getDuJiTang();
    }
    render() {
        return (
            <Layout>
                <SideMenu collapsed={this.state.collapsed} />
                <Layout className="site-layout">
                    <Header collapsed={this.state.collapsed} onClick={() => this.toggle()} jiTangDu={this.state.jiTangDu} getDu={() => this.getDuJiTang()} />
                    <Wrapper />
                </Layout>
            </Layout>
        )
    }
}