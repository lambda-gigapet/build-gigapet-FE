import React, { Component } from "react";
import axios from 'axios'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    axios.post('https://lambda-gigapet.herokuapp.com/api/auth/login', this.state)
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

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bssize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
              autoComplete='username'
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              autoComplete='current-password'
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        <div className="go-to-sign-up">
        <p>Have No Account? <button onClick={()=>this.props.toggleLogin()}>Sign Up</button></p>
        </div>
      </div>
    );
  }
}