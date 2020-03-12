
import React from 'react'
import { Layout } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '@styles/common.less'
import Sidebar from '@components/sidebar'
import Header from '@components/header'
import Wrapper from '@components/wrapper/wrapper'
import searchArr from '@public/config'


const App = () => {
    let state = {
        searchArr,
        collapsed: false,
        tags: [], // 所有已点击导航
        currentTag: null // 当前选中的导航
    }
    const toggle = (collapsed) => {
        this.setState({
            collapsed
        });
    }

    const addFrame = ({ key }) => {
        const tag = this.state.searchArr[key]
        let tags = [...this.state.tags]
        tags.push(tag);
        this.setState({ tags });
        this.setState({ currentTag: tag })
    }
    return (
        <Layout>
            <Sidebar collapsed={state.collapsed} onClick={addFrame} menuArr={state.searchArr} />
            <Layout className="site-layout">
                <Header collapsed={state.collapsed} onClick={toggle} />
                <Wrapper current={state.currentTag} />
            </Layout>
        </Layout>
    )
}
export default App