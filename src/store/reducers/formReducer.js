import { TOTAL_DONORS, TOTAL_RECIPIENTS } from '../constants/formConstants';

const InitialState = {
    donors: null,
    recipients: null,
}

export const formReducer = (state = InitialState, action) => {
    switch (action.type) {
        case TOTAL_DONORS:

            return {
                ...state, donors: action.payload
            }
        case TOTAL_RECIPIENTS:

            return {
                ...state, recipients: action.payload
            }


    }
    return state
}