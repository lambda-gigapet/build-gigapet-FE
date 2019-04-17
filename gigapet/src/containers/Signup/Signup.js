import React, { Component } from 'react'
import axios from 'axios'
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import './Signup.css'

export default class Signup extends Component {
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
      axios.post('https://lambda-gigapet.herokuapp.com/api/auth/register', this.state)
        .then(res=>{
          console.log(res.data)
          if(res.data.token){
            this.props.auth()
            localStorage.setItem('token', res.data.token )
          }
        })
        .catch(e=>{
          console.log('Error While Signing Up', e)
        })

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
            Sign Up
          </Button>
        </form>
        <div className="go-to-login">
        <p>Already Have An Account? <button onClick={()=>this.props.toggleLogin()}>Log In</button></p>
        </div>
      </div>
    )
  }
}
