import { combineReducers } from 'redux'
import news from './news'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import { toastsReducer as toasts } from 'react-toasify-redux';

export default combineReducers({
    news,
    authedUser,
    toasts,
    loadingBar: loadingBarReducer,
})