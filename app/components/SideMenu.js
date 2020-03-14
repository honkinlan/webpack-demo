import React from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
import { UserOutlined } from '@ant-design/icons';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import { addFrame } from '../redux/actions'

// @connect((state, props) => ({
//     menus: menuArr,
//     addFrame: url => dispatch(addFrame(url))
// }))
@connect(
    // 需要的state参数
    state=>({menus: state.menus}),
    // 自动dispatch的action创建函数
    {addFrame}
)
export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Sider trigger={null} collapsible collapsed={false} collapsedWidth="70">
            <div>
                <div className="logo">
                    <img src="../public/images/blue.svg" alt="logo" />
                </div>
                <h1 className="site-name"><a href="">好蓝搜</a></h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} defaultOpenKeys={['sub1']}>
                {
                    this.props.menus.map((item, index) => {
                        console.log(index)
                        if (!item.children || item.children.length === 0) {
                            return (
                                <Menu.Item key={index} onClick={() => this.props.addFrame(item.url)}>
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
                                        return <Menu.Item key={key} onClick={() => this.props.addFrame(child.url)}>
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
}