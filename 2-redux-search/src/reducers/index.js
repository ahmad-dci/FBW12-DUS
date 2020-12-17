import { act } from 'react-dom/test-utils'
import {combineReducers} from 'redux'

const resultReducer = (results = [], action) => {

    if (action.type === 'SET_RESULTS') {
        return action.payload
    }


    return results
}

export default combineReducers({
    results: resultReducer
})