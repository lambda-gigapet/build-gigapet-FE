import { REGISTER_PARENT, REGISTER_PARENT_SUCCESS, REGISTER_PARENT_FAILURE, LOGIN_PARENT, LOGIN_PARENT_SUCCESS, LOGIN_PARENT_FAILURE } from '../actions'
const initialState = {
  parent: null,
  parent_id: null,
  child: null,
  pet: null,
  pet_experience: null,
  foodIntake: [],
  isSigningUp: false,
  isLogginIn: false,
  isAddingData: false,
  isFethingData: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PARENT:
      return {
        ...state,
        isSigningUp: true
      }
    case REGISTER_PARENT_SUCCESS:
      return {
        ...state,
        parent_id: action.payload.id
      }
    case REGISTER_PARENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case LOGIN_PARENT:
      return {
        ...state,
        isLogginIn: true
      }
    case LOGIN_PARENT_SUCCESS:
      return {
        ...state,
        isLogginIn: false,
        parent_id: action.payload.id
      }
    case LOGIN_PARENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
