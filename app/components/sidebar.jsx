import React from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
import { UserOutlined } from '@ant-design/icons';

export default function Sidebar(props) {
    // console.log(searchArr)

    return <Sider trigger={null} collapsible collapsed={props.collapsed} collapsedWidth="70">
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
                {
                    props.menuArr.map((item, index) => {
                        return <Menu.Item key={index} onClick={props.onClick}>
                            <UserOutlined />
                            <span>{item.name}</span>
                        </Menu.Item>
                    })
                }
            </SubMenu>

        </Menu>
    </Sider>
}
