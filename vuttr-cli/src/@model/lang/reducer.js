
import {
    CHANGE_LANG_SUCCESS,
    CHANGE_LANG_FAILURE,
} from './actionTypes';


const initialState = { lang: 'en' }


function langReducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE_LANG_SUCCESS:
            return {
                lang: action.lang
            }
        case CHANGE_LANG_FAILURE:
            return state;
        default:
            return state
    }
}

export { langReducer };