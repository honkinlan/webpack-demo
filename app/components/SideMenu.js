import React from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
import { UserOutlined } from '@ant-design/icons';

const SideMenu = ({ addFrame, menus }) => {
    
    return <Sider trigger={null} collapsible collapsed={false} collapsedWidth="70">
        <div>
            <div className="logo">
                <img src="../public/images/blue.svg" alt="logo" />
            </div>
            <h1 className="site-name"><a href="">好蓝搜</a></h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} defaultOpenKeys={['sub1']}>
            {
                menus.map((item, index) => {
                    console.log(index)
                    if (!item.children || item.children.length === 0) {
                        return (
                            <Menu.Item key={index} onClick={() => addFrame(item.url)}>
                                <UserOutlined />
                                <span>{item.name}</span>
                            </Menu.Item>
                        )
                    }
                    const key = `sub${index}`;
                    return (
                        <SubMenu
                            key={key}
                            title={
                                <span>
                                    <span>{item.name}</span>
                                </span>
                            }
                        >
                            {
                                item.children.map((child, cindex) => {
                                    const key = `child${cindex}`
                                    return <Menu.Item key={key} onClick={() => addFrame(child.url)}>
                                        <UserOutlined />
                                        <span>{child.name}</span>
                                    </Menu.Item>
                                })
                            }
                        </SubMenu>
                    )

                })
            }
        </Menu>

    </Sider>
}

export default SideMenu