
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
import Wrapper from '@components/wrapper'




class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = (collapsed) => {
    this.setState({
      collapsed
    });
  }


  render() {
    return (
      <Layout>
        <Sidebar collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <Header collapsed={this.state.collapsed} onClick={this.toggle} />
          <Wrapper />
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, mountNode);