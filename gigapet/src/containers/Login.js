import React, { Component } from "react";
import axios from 'axios'
import { connect } from 'react-redux'
import {Route, Link} from 'react-router-dom'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {loginParent} from '../ReduxState/actions/parentActions'
import "./Login.css";

class Login extends Component {
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
    this.props.loginParent(this.state)
      .then(()=>(
        this.props.history.push('/home')
      ))
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
        <p>Have No Account? <Route render={()=>(
          <Link to='/signup'>Sign Up</Link>
        )} />
        </p>
          {/* // <button onClick={()=>this.props.toggleLogin()}>Sign Up</button> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogginIn: state.ParentReducer.isLogginIn
  }
}

export default connect(mapStateToProps, {loginParent})(Login)