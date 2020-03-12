
import React from 'react'
import ReactDOM from 'react-dom'
// import '@styles/common.less' @desc： ？？为啥这里样式就覆盖不成功，App.js里才能成功

// console.log(process.env.NODE_ENV);

const mountNode = document.getElementById('root');
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
const store = createStore(rootReducer)
import App from '@components/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, mountNode);