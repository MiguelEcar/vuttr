
import {
    NEW_TOOL_SUCCESS,
    LIST_TOOL_PENDING,
    LIST_TOOL_SUCCESS,
    LIST_TOOL_FAILURE,
    DELETE_TOOL_PENDING,
    DELETE_TOOL_SUCCESS,
    DELETE_TOOL_FAILURE,
    CREATE_TOOL_PENDING,
    CREATE_TOOL_SUCCESS,
    CREATE_TOOL_FAILURE,
} from './actionTypes';


const initialState = { list: null, loading: false }


function toolReducer(state = initialState, action) {

    switch (action.type) {
        case NEW_TOOL_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case LIST_TOOL_PENDING:
        case DELETE_TOOL_PENDING:
        case CREATE_TOOL_PENDING:
            return {
                ...state,
                loading: true,
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case LIST_TOOL_SUCCESS:
            return {
                ...state,
                list: action.list.content,
                loading: false
            }
        case LIST_TOOL_FAILURE:
            return {
                ...state,
                list: null,
                loading: false
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case DELETE_TOOL_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case CREATE_TOOL_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case CREATE_TOOL_FAILURE:
        case DELETE_TOOL_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export { toolReducer };