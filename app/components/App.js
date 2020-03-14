
import React from 'react'
import { Layout } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '@styles/common.less'
import SideMenu from '@components/SideMenu'
import Header from '@components/header'
import Wrapper from '@components/wrapper'
import TabPanel from '@components/TabPanel'


const App = () => {
    let state = {
        collapsed: false,
        tags: [], // 所有已点击导航
        currentTag: null // 当前选中的导航
    }
    const toggle = (collapsed) => {
        this.setState({
            collapsed
        });
    }

    return (
        <Layout>
            <SideMenu />
            <Layout className="site-layout">
                <Header collapsed={state.collapsed} onClick={toggle} />
                <TabPanel />
                <Wrapper current={state.currentTag} />
            </Layout>
        </Layout>
    )
}
export default App