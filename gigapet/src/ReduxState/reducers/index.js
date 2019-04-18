import { combineReducers } from 'redux'
import ParentReducer from './ParentReducer'
import ChildReducer from './ChildReducer'
export default combineReducers({ ParentReducer, ChildReducer })
