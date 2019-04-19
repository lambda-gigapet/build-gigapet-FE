import { REGISTER_PARENT,
  REGISTER_PARENT_SUCCESS,
  REGISTER_PARENT_FAILURE,
  LOGIN_PARENT,
  LOGIN_PARENT_SUCCESS,
  LOGIN_PARENT_FAILURE,
  ADD_CHILD,
  ADD_CHILD_SUCCESS,
  ADD_CHILD_FAILURE,
  FETCH_PARENT,
  FETCH_PARENT_SUCCESS,
  FETCH_PARENT_FAILURE,
  DELETE_CHILD,
  DELETE_CHILD_SUCCESS,
  DELETE_CHILD_FAILURE
} from '../actions'

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
  isFetchingData: false,
  isFetchingParent: false,
  error: '',
  isAddingChild: false,
  isDeleting: false
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
    case ADD_CHILD:
      return {
        ...state,
        isAddingChild: true
      }
    case ADD_CHILD_SUCCESS:
      return {
        ...state,
        isAddingChild: false,
        child: action.payload
      }
    case ADD_CHILD_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_PARENT:
      return {
        ...state,
        isFetchingParent: true
      }
    case FETCH_PARENT_SUCCESS:
      return {
        ...state,
        isFetchingParent: false,
        parent: action.payload
      }
    case FETCH_PARENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case DELETE_CHILD:
      return {
        ...state,
        isDeleting: true
      }
    case DELETE_CHILD_SUCCESS:
      return {
        ...state,
        isDeleting: false
      }
    case DELETE_CHILD_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
