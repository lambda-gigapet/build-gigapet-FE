import { FETCH_FOOD,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
  ADD_FOOD,
  ADD_FOOD_SUCCESS,
  ADD_FOOD_FAILURE,
  DELETE_FOOD,
  DELETE_FOOD_SUCCESS,
  DELETE_FOOD_FAILURE,
  UPDATE_FOOD_QUANTITY,
  UPDATE_FOOD_QUANTITY_SUCCESS,
  UPDATE_FOOD_QUANTITY_FAILURE
}
  from '../actions/childActions'
const initialState = {
  error: '',
  foodEntries: [],
  isFetching: false,
  isUpdating: false,
  isDeleting: false,
  quantity: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_FOOD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        foodEntries: action.payload
      }
    case FETCH_FOOD_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case ADD_FOOD:
      return {
        ...state,
        isFetching: true
      }
    case ADD_FOOD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        foodEntries: action.payload
      }
    case ADD_FOOD_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case DELETE_FOOD:
      return {
        ...state,
        isDeleting: true
      }
    case DELETE_FOOD_SUCCESS:
      return {
        ...state,
        isDeleting: false
      }
    case DELETE_FOOD_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case UPDATE_FOOD_QUANTITY:
      return {
        ...state,
        isDeleting: true
      }
    case UPDATE_FOOD_QUANTITY_SUCCESS:
      return {
        ...state,
        isDeleting: false
        // foodEntries:
      }
    case UPDATE_FOOD_QUANTITY_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
