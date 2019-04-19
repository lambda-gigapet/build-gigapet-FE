import axiosWithHeaders from '../../utils/axiosAuth'

export const FETCH_FOOD = 'FETCH_FOOD'
export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS'
export const FETCH_FOOD_FAILURE = 'FETCH_FOOD_FAILURE'

export const fetchFood = (id) => dispatch => {
  console.log(id)
  dispatch({ type: FETCH_FOOD })
  return axiosWithHeaders()
    .get(`https://lambda-gigapet.herokuapp.com/api/child/${id}/entries`)
    .then(res => {
      console.log('child food res', res.data)
      dispatch({ type: FETCH_FOOD_SUCCESS, payload: res.data })
      // this.setState({FoodCategories: res.data})
    })
    .catch(e => {
      dispatch({ type: FETCH_FOOD_FAILURE, payload: e })
    })
}

export const UPDATE_FOOD_QUANTITY = 'FETCH_FOOD'
export const UPDATE_FOOD_QUANTITY_SUCCESS = 'UPDATE_FOOD_QUANTITY'
export const UPDATE_FOOD_QUANTITY_FAILURE = 'UPDATE_FOOD_QUANTITY_FAILURE'

export const updateFoodQuantity = (id, updatedInfo) => dispatch => {
  dispatch({ type: UPDATE_FOOD_QUANTITY })
  return axiosWithHeaders()
    .put(`https://lambda-gigapet.herokuapp.com/api/entries/${id}`, { quantity: updatedInfo })
    .then(res => {
      console.log('child food res', res.data)
      dispatch({ type: UPDATE_FOOD_QUANTITY_SUCCESS, payload: res.data })
      // this.setState({FoodCategories: res.data})
    })
    .catch(e => {
      dispatch({ type: UPDATE_FOOD_QUANTITY_FAILURE, payload: e })
    })
}

export const DELETE_FOOD = 'DELETE_FOOD'
export const DELETE_FOOD_SUCCESS = 'DELETE_FOOD_SUCCESS'
export const DELETE_FOOD_FAILURE = 'DELETE_FOOD_FAILURE'

export const DeleteFood = (id) => dispatch => {
  dispatch({ type: DELETE_FOOD })
  return axiosWithHeaders()
    .delete(`https://lambda-gigapet.herokuapp.com/api/entries/${id}`)
    .then(res => {
      console.log('child food res', res.data)
      dispatch({ type: DELETE_FOOD_SUCCESS, payload: res.data })
      // this.setState({FoodCategories: res.data})
    })
    .catch(e => {
      dispatch({ type: DELETE_FOOD_FAILURE, payload: e })
    })
}

export const ADD_FOOD = 'ADD_FOOD'
export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS'
export const ADD_FOOD_FAILURE = 'ADD_FOOD_FAILURE'

export const AddFood = (id, newFood) => dispatch => {
  dispatch({ type: ADD_FOOD })
  return axiosWithHeaders()
    .post(`https://lambda-gigapet.herokuapp.com/api/child/${id}/entries`, newFood)
    .then(res => {
      console.log(newFood)
      console.log('add food res', res.data)
      dispatch({ type: ADD_FOOD_SUCCESS, payload: res.data })
    })
    .catch(e => {
      console.log('add food err', e)
      dispatch({ type: ADD_FOOD_FAILURE, payload: e })
    })
}

export const UPDATE_FOOD = 'UPDATE_FOOD'
export const UPDATE_FOOD_SUCCESS = 'UPDATE_FOOD_SUCCESS'
export const UPDATE_FOOD_FAILURE = 'UPDATE_FOOD_FAILURE'

export const UpdateFood = (id, updatedFood) => dispatch => {
  dispatch({ type: UPDATE_FOOD })
  return axiosWithHeaders()
    .put(`https://lambda-gigapet.herokuapp.com/api/child/${id}/entries`, updatedFood)
    .then(res => {
      console.log(updatedFood)
      console.log('update food res', res.data)
      dispatch({ type: UPDATE_FOOD_SUCCESS, payload: res.data })
    })
    .catch(e => {
      console.log('add food err', e)
      dispatch({ type: UPDATE_FOOD_FAILURE, payload: e })
    })
}
