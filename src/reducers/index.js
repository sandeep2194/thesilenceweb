import { combineReducers } from 'redux'
import news from './news'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import alerts from './alerts'

export default combineReducers({
    news,
    authedUser,
    alerts,
    loadingBar: loadingBarReducer,
})