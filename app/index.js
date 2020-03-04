
import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../public/css/style.less'

console.log(process.env.NODE_ENV);

ReactDOM.render(
  <div>test<a href="https://www.baidu.com">baidu</a></div>,
  document.getElementById('root'),
)
