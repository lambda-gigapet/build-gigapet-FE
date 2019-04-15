import React, { Component } from 'react'
import './App.css'
import Signup from './containers/Signup/Signup'
import Home from './containers/MainPage/Home'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAuth: false
    }
  }

  authenticateUser = ()=>{
    this.setState({isAuth: !this.state.isAuth})
  }

  render () {
    return (
      <div className='App'>
      {this.state.isAuth ? 
        <Home />
        :
        <Signup auth={this.authenticateUser} />
    }
      </div>
    )
  }
}

export default App
