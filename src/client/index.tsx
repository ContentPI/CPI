// Dependencies
import React from 'react'
import { render } from 'react-dom'
import App from './pages/App'

// Components
const Root = () => {
  return <App />
}

render(<Root />, document.querySelector('#root'))
