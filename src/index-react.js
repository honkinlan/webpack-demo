

import React from 'react'
import ReactDom from 'react-dom'

function App() {
    return <div style={{color: 'red'}}>this is a react page</div>
}

ReactDom.render(<App></App>, document.getElementById('root'))