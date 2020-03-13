
import React from 'react'
import { Layout } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '@styles/common.less'
import Sidebar from '@container/Sidebar'
import Header from '@components/header'
import Wrapper from '@components/wrapper/wrapper'


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
            <Sidebar />
            <Layout className="site-layout">
                <Header collapsed={state.collapsed} onClick={toggle} />
                <Wrapper current={state.currentTag} />
            </Layout>
        </Layout>
    )
}
export default App