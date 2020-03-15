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
    state => ({ menus: state.menus }),
    // 自动dispatch的action创建函数
    { addFrame }
)
export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelect: '',
            defaultOpen: ''
        };
    }
    // 添加默认选中菜单
    addDefaultSelect() {
        let activeMenu = null;
        for (let menu of this.props.menus) {
            if (menu.children && menu.children.length > 0) {
                this.setState({ defaultOpen: menu.id })
                activeMenu = menu.children[0];
                break;
            } else {
                activeMenu = menu;
                break;
            }
        }
        this.props.addFrame(activeMenu);
        this.setState({ defaultSelect: activeMenu.id });
    }

    componentWillMount() {
        this.addDefaultSelect();
        console.log(this.props.collapsed)
    }
    render() {
        return <Sider trigger={null} collapsible collapsed={this.props.collapsed} collapsedWidth="70">
            <div>
                <div className="logo">
                    <img src="https://img.lanhongjin.com/blue/blue.svg" alt="logo" />
                </div>
                <h1 className="site-name"><a href="">蓝搜</a></h1>
            </div>
            {/* defaultSelectedKeys&defaultOpenKeys 在更改值后不会重新渲染dom， selectedKeys&openKeys会重新渲染，但是需要自己绑定点击时间来修改值 */}
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.defaultSelect]} defaultOpenKeys={[this.state.defaultOpen]}>
                {
                    this.props.menus.map(item => {

                        if (!item.children || item.children.length === 0) {
                            return (
                                <Menu.Item key={item.id} onClick={() => this.props.addFrame(item)}>
                                    <UserOutlined />
                                    <span>{item.name}</span>
                                </Menu.Item>
                            )
                        }

                        return (
                            <SubMenu
                                key={item.id}
                                title={
                                    <span>
                                        <span>{item.name}</span>
                                    </span>
                                }
                            >
                                {
                                    item.children.map(child => {
                                        return <Menu.Item key={child.id} onClick={() => this.props.addFrame(child)}>
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