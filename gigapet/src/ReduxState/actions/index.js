export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export { REGISTER_PARENT,
  REGISTER_PARENT_SUCCESS,
  REGISTER_PARENT_FAILURE } from './parentActions'
export {
  LOGIN_PARENT,
  LOGIN_PARENT_SUCCESS,
  LOGIN_PARENT_FAILURE
} from './parentActions'
export {
  ADD_CHILD,
  ADD_CHILD_SUCCESS,
  ADD_CHILD_FAILURE
} from './parentActions'

export {
  FETCH_FOOD,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE
} from './childActions'

export {
  ADD_FOOD,
  ADD_FOOD_SUCCESS,
  ADD_FOOD_FAILURE
} from './childActions'

export {
  FETCH_PARENT,
  FETCH_PARENT_SUCCESS,
  FETCH_PARENT_FAILURE
} from './parentActions'

export const increment = () => {
  return {
    type: INCREMENT,
    payload: 1
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
    payload: 1
  }
}
