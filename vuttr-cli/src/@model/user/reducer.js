
import {
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from './actionTypes';


const initialState = { loading: false }


function userReducer(state = initialState, action) {

  switch (action.type) {
    case CREATE_USER_PENDING:
      return {
        ...state,
        loading: true,
      }
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        oid: action.oid
      }
    case CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export { userReducer };