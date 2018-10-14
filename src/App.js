import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Home from './components/home/Home';


class App extends Component {
  render () {
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default hot(module)(App)
