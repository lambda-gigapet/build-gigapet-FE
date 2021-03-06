import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Signup from './containers/Signup/Signup'
import Home from './containers/MainPage/Home'
import Login from './containers/Login'
import Nav from './containers/Navbar/Nav'
import Child from './containers/Children/Child'
import PrivateRoute from './containers/PrivateRoute/PrivateRoute'
import FoodHistory from './containers/History/FoodHistory';
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAuth: false,
      registerOpen: false,
      toggleLogin: true,
      isOpen: false,
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
  toggle = ()=>{
    this.setState({isOpen: !this.state.isOpen})
  }

  render () {
    return (
      <div className='App'>
      <Route path='/' render={(props)=>(
        <Nav {...props} />
      )} />
      <PrivateRoute exact path='/home' component={Home} />
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route exact path='/child/:id' render={(props)=>(
        <Child {...props} />
      )} />
      <Route exact path='/child/:id/progress' render={(props)=>(
        <FoodHistory {...props} />
      )} />
      
        
      {/* <Route path='/Pet' component={Pet} />
      <Route path='/InfoEntry/AddInfo' component={InfoEntry} />
      <Route path='/FoodEntries/AddFood' component={FoodEntries} /> */}

      </div>
    )
  }
}






export default App