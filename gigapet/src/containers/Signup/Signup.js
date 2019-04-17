import React, { Component } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import {Route, Link} from 'react-router-dom'
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import {registerParent} from '../../ReduxState/actions/parentActions'
import './Signup.css'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            username: "",
            email: '',
            password: ''
        }
    }
    handleSubmit = (e)=>{
      e.preventDefault()
      this.props.registerParent(this.state)
        .then(()=>(
          this.props.history.push('/home')
          ))
    }
    handleChange = (e)=>{
      this.setState({[e.target.id]: e.target.value})
    }
    validateForm = ()=>{
      const {password, email} = this.state
      return password.length > 0 && email.length > 0
    }
  render () {
    const {name, email, username, password} = this.state
    return (
      <div className='sign-up'>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormGroup controlId='name' bissize='large'>
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type='name'
              value={name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='username' bissize='large'>
            <FormLabel>Username</FormLabel>
            <FormControl
              type='username'
              value={username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='email' bissize='large'>
            <FormLabel>Email</FormLabel>
            <FormControl
              type='email'
              value={email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='password' bissize='large'>
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              onChange={this.handleChange}
              type='password'
            />
          </FormGroup>
          <Button
            block
            bissize='large'
            disabled={!this.validateForm()}
            type='submit'
          >
            {this.props.isSigningUp ? <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' /> : 'Sign Up'}
          </Button>
        </form>
        <div className="go-to-login">
        <p>Already Have An Account? <Route render={()=>(
          <Link to='/login'>Log In</Link>
        )} />

           </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    isSigningUp: state.ParentReducer.isSigningUp
  }
}

export default connect(mapStateToProps, {registerParent})(Signup)