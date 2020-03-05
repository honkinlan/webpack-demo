import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';


export default function LayoutHeader(props) {
    let collapsed = props.collapsed
    const toggle = () => {
        props.onClick(!props.collapsed)
    }
    return <Header className="layout-header" style={{ padding: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
        })}
    </Header>
}