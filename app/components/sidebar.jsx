import React from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { UserOutlined } from '@ant-design/icons';
import searchArr from '@public/config'

export default function Sidebar(props) {
    // console.log(searchArr)

    return <Sider trigger={null} collapsible collapsed={props.collapsed} collapsedWidth="70">
        <div>
            <div className="logo">
                <img src="../public/images/blue.svg" alt="logo" />
            </div>
            <h1 className="site-name"><a href="">好蓝搜</a></h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
                searchArr.map((item, index) => {
                    return <Menu.Item key={index}>
                        <UserOutlined />
                        <span>{item.name}</span>
                    </Menu.Item>
                })
            }
        </Menu>
    </Sider>
}
