import { combineReducers } from 'redux'
import news from './news'
import { loadingBarReducer } from 'react-redux-loading'
import { googleReducer } from "./reducerGoogle"

export default combineReducers({
    news,
    googleReducer,
    loadingBar: loadingBarReducer,
})