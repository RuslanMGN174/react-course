import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App title='This is title from index.js' />, document.getElementById('root'))
registerServiceWorker()
