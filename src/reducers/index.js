import { combineReducers } from 'redux'
import news from './news'
import { loadingBarReducer } from 'react-redux-loading'
export default combineReducers({
    news,
    loadingBar: loadingBarReducer,
})