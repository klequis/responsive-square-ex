import React from 'react'
import { withRouter } from 'react-router-dom'
import App from './App'

const AppContainer = ({ animals, colors }) => {
  return (
    <App />
  )
}

export default withRouter(AppContainer)