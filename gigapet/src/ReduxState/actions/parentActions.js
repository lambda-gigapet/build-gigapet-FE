import axios from 'axios'
import axiosWithHeaders from '../../utils/axiosAuth'

export const REGISTER_PARENT = 'REGISTER_PARENT'
export const REGISTER_PARENT_SUCCESS = 'REGISTER_PARENT_SUCCESS'
export const REGISTER_PARENT_FAILURE = 'REGISTER_PARENT_FAILURE'

export const registerParent = (creds) => dispatch => {
  dispatch({ type: REGISTER_PARENT })
  return axios.post('https://lambda-gigapet.herokuapp.com/api/auth/register', creds)
    .then(res => {
      console.log('action-creator: ', res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('p_id', res.data.id)
      dispatch({ type: REGISTER_PARENT_SUCCESS, payload: res.data })
    })
    .catch(e => {
      console.log(e)
    })
}

export const FETCH_PARENT = 'FETCH_PARENT'
export const FETCH_PARENT_SUCCESS = 'FETCH_PARENT_SUCCESS'
export const FETCH_PARENT_FAILURE = 'FETCH_PARENT_FAILURE'

export const fetchParent = (pId) => dispatch => {
  dispatch({ type: FETCH_PARENT })
  return axiosWithHeaders()
    .get(`https://lambda-gigapet.herokuapp.com/api/parent/${pId}`)
    .then(res => {
      dispatch({ type: FETCH_PARENT_SUCCESS, payload: res.data })
    })
    .catch(e => {
      console.log(e)
      dispatch({ type: FETCH_PARENT_FAILURE, payload: e })
    })
}

export const UPDATE_PARENT = 'UPDATE_CHILD'
export const UPDATE_PARENT_SUCCESS = 'UPDATE_PARENT_SUCCESS'
export const UPDATE_PARENT_FAILURE = 'UPDATE_PARENT_FAILURE'

export const updateParent = (id, updatedInfo) => dispatch => {
  dispatch({ type: UPDATE_PARENT })
  return axiosWithHeaders()
    .put(`https://lambda-gigapet.herokuapp.com/api/parent/${id}`, updatedInfo)
    .then(res => {
      console.log('update parent res', res.data)
      dispatch({ type: UPDATE_PARENT_SUCCESS, payload: res.data })
      // this.setState({FoodCategories: res.data})
    })
    .catch(e => {
      dispatch({ type: UPDATE_PARENT_FAILURE, payload: e })
    })
}

export const UPDATE_CHILD = 'UPDATE_CHILD'
export const UPDATE_CHILD_SUCCESS = 'UPDATE_CHILD_SUCCESS'
export const UPDATE_CHILD_FAILURE = 'UPDATE_CHILD_FAILURE'

export const updateChild = (id, updatedInfo) => dispatch => {
  dispatch({ type: UPDATE_CHILD })
  return axiosWithHeaders()
    .put(`https://lambda-gigapet.herokuapp.com/api/child/${id}`, updatedInfo)
    .then(res => {
      console.log('update child res', res.data)
      dispatch({ type: UPDATE_CHILD_SUCCESS, payload: res.data })
      // this.setState({FoodCategories: res.data})
    })
    .catch(e => {
      dispatch({ type: UPDATE_CHILD_FAILURE, payload: e })
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

export const ADD_CHILD = 'ADD_CHILD'
export const ADD_CHILD_SUCCESS = 'ADD_CHILD_SUCCESS'
export const ADD_CHILD_FAILURE = 'ADD_CHILD_FAILURE'

export const addChild = (id, child) => dispatch => {
  console.log('parent action', id, child)

  dispatch({ type: ADD_CHILD })
  return axiosWithHeaders()
    .post(`https://lambda-gigapet.herokuapp.com/api/parent/${id}/child`, child)
    .then(res => {
      console.log('add child res', res.data)
      dispatch({ type: ADD_CHILD_SUCCESS, payload: res.data })
      // this.setState({FoodCategories: res.data})
    })
    .catch(e => {
      dispatch({ type: ADD_CHILD_FAILURE, payload: e })
    })
}

export const FETCH_CHILD = 'ADD_CHILD'
export const FETCH_CHILD_SUCCESS = 'ADD_CHILD_SUCCESS'
export const FETCH_CHILD_FAILURE = 'ADD_CHILD_FAILURE'

export const fetchChild = (id) => dispatch => {
  console.log('parent action-fetchChild', id)
  dispatch({ type: FETCH_CHILD })
  return axiosWithHeaders()
    .put(`https://lambda-gigapet.herokuapp.com/api/child/${id}`)
    .then(res => {
      console.log('add child res', res.data)
      dispatch({ type: FETCH_CHILD_SUCCESS, payload: res.data })
      // this.setState({FoodCategories: res.data})
    })
    .catch(e => {
      dispatch({ type: FETCH_CHILD_FAILURE, payload: e })
    })
}

export const DELETE_CHILD = 'DELETE_CHILD'
export const DELETE_CHILD_SUCCESS = 'DELETE_CHILD_SUCCESS'
export const DELETE_CHILD_FAILURE = 'DELETE_CHILD_FAILURE'

export const DeleteChild = (id, child) => dispatch => {
  console.log('parent action', id, child)

  dispatch({ type: DELETE_CHILD })

  return axiosWithHeaders()
    .delete(`https://lambda-gigapet.herokuapp.com/api/child/${id}`)
    .then(res => {
      console.log('delete child res', res.data)
      dispatch({ type: DELETE_CHILD_SUCCESS, payload: res.data })
      // this.setState({FoodCategories: res.data})
    })
    .catch(e => {
      dispatch({ type: DELETE_CHILD_FAILURE, payload: e })
    })
}
