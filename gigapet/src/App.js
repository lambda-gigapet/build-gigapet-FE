import React, { Component } from 'react'
import {Route, Link } from 'react-router-dom'
import Signup from './containers/Signup/Signup'
import Home from './containers/MainPage/Home'
import AddFood from './containers/FoodEntries/AddFood';
import RegisterChild from './containers/RegisterChild/RegisterChild';
import AddInfo from './containers/InfoEntry/AddInfo';
import Login from './containers/Login'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAuth: false,
      registerOpen: false,
      toggleLogin: false
    }
  }

  authenticateUser = ()=>{
    this.setState({isAuth: !this.state.isAuth})
  }

  toggleRegister =()=> {
    this.setState({registerOpen: !this.state.registerOpen})
  }
  toggleLogin = ()=>{
    this.setState({toggleLogin: !this.state.toggleLogin})
  }

  render () {
    return (
      <div className='App'>
      {this.state.isAuth ? 
        <>
        <Navbar toggleRegister={this.toggleRegister} />
        <Home registerStatus={this.state.registerOpen} />
        </>
        :
        this.state.toggleLogin ? <Login toggleLogin={this.toggleLogin}/> : <Signup auth={this.authenticateUser} toggleLogin={this.toggleLogin}/>
    }
      </div>
    )
  }
}


const Navbar = (props) => {

  return (
    <div>
            <button onClick={()=> props.toggleRegister()}>
              Register My Child
            </button>
    </div>
  )
}



export default App
