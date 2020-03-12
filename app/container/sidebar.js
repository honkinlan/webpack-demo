import React from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
import { UserOutlined } from '@ant-design/icons';

import { connect } from 'react-redux'
import { addFrame } from '../redux/actions'
// import Menu from '../components/sidebar'

const SideBar = ({ dispatch }) => {

    return <Sider trigger={null} collapsible collapsed={false} collapsedWidth="70">
        <div>
            <div className="logo">
                <img src="../public/images/blue.svg" alt="logo" />
            </div>
            <h1 className="site-name"><a href="">好蓝搜</a></h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} defaultOpenKeys={['sub1']}>
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <span>Navigation One</span>
                    </span>
                }
            >
                <Menu.Item key="1" >
                            <UserOutlined />
                            <span>adf</span>
                        </Menu.Item>
            </SubMenu>

        </Menu>
    </Sider>
}

export default connect()(SideBar)