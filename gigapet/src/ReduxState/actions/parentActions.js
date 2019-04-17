import axios from 'axios'
export const REGISTER_PARENT = 'REGISTER_PARENT'
export const REGISTER_PARENT_SUCCESS = 'REGISTER_PARENT_SUCCESS'
export const REGISTER_PARENT_FAILURE = 'REGISTER_PARENT_FAILURE'

export const registerParent = (creds) => dispatch => {
  dispatch({ type: REGISTER_PARENT })
  return axios.post('https://lambda-gigapet.herokuapp.com/api/auth/register', creds)
    .then(res => {
      console.log('action-creator: ', res.data)
      localStorage.setItem('token', res.data.token)
      dispatch({ type: REGISTER_PARENT_SUCCESS, payload: res.data })
    })
    .catch(e => {
      console.log(e)
    })
}

export const LOGIN_PARENT = 'LOGIN_PARENT'
export const LOGIN_PARENT_SUCCESS = 'LOGIN_PARENT_SUCCESS'
export const LOGIN_PARENT_FAILURE = 'LOGIN_PARENT_FAILURE'

export const loginParent = (creds) => dispatch => {
  dispatch({ type: REGISTER_PARENT })
  return axios.post('https://lambda-gigapet.herokuapp.com/api/auth/login', creds)
    .then(res => {
      console.log('action-creator-login: ', res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('p_id', res.data.id)
      dispatch({ type: LOGIN_PARENT_SUCCESS, payload: res.data })
    })
    .catch(e => {
      console.log(e)
    })
}
