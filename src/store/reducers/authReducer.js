import { SIGN_IN_AUTH, SIGN_OUT_AUTH, GOOGLE_AUTH } from '../constants/authConstants';

const InitialState = {
    user: null
}


export const authReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SIGN_IN_AUTH:
            return {
                ...state, user: action.user,
            }
        case SIGN_OUT_AUTH:
            return {
                ...state, user: action.user,
            }
        case GOOGLE_AUTH:
            return {
                ...state, user: action.user,
            }

    }
    return state
}