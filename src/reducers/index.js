import { combineReducers } from 'redux'
import news from './news'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'

export default combineReducers({
    news,
    authedUser,
    loadingBar: loadingBarReducer,
})