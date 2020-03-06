
import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '@styles/common.less'

// console.log(process.env.NODE_ENV);

// ReactDOM.render(
//   <div>test<a href="https://www.baidu.com">baidu</a></div>,
//   document.getElementById('root'),
// )
const mountNode = document.getElementById('root');
import { Layout } from 'antd';
import Sidebar from '@components/sidebar'
import Header from '@components/header'
import Wrapper from '@components/wrapper/wrapper'

import searchArr from '@public/config'


class SiderDemo extends React.Component {
  state = {
    searchArr,
    collapsed: false,
    tags: [], // 所有已点击导航
    currentTag: null // 当前选中的导航
  };

  toggle = (collapsed) => {
    this.setState({
      collapsed
    });
  }

  addFrame = ({key}) => {
    const tag = this.state.searchArr[key]
    let tags = [...this.state.tags]
    tags.push(tag);
    this.setState({tags});
    this.setState({currentTag: tag})
  }

  componentDidMount() {
    this.setState({currentTag: this.state.searchArr[0]});
  }

  render() {
    return (
      <Layout>
        <Sidebar collapsed={this.state.collapsed} onClick={this.addFrame} menuArr={this.state.searchArr}/>
        <Layout className="site-layout">
          <Header collapsed={this.state.collapsed} onClick={this.toggle} />
          <Wrapper current={this.state.currentTag}/>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, mountNode);