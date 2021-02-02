import { createStore, combineReducers } from 'redux'
import { authReducer } from './reducers/authReducer'
import { formReducer } from './reducers/formReducer'

const reducer = combineReducers({
    authReducer,
    formReducer,
})


const store = createStore(reducer, {});


export default store