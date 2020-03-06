import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import './wrapper.less'

export default function Wrapper(props) {
    const styles = {
        minHeight: 280,
    }
    if(!props.current){
        return ''
    }
    return <Content className="site-layout-background" style={styles} >
        <iframe src={props.current.url}></iframe>
    </Content>
}