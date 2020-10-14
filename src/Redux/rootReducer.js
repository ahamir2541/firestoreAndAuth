import { combineReducers } from 'redux'
import shopReducer from './shopReducer/shopReducer'

const rootReducer = combineReducers({
    shop : shopReducer
})

export default rootReducer
