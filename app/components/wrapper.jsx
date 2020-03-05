import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

export default function Wrapper(props) {
    const styles = {
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
    }
    return <Content className="site-layout-background" style={styles} >
        <div>Content</div>
    </Content>
}