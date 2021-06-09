import { combineReducers } from 'redux'
import news from './news'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
    news,
    authedUser,
    toastr: toastrReducer,
    loadingBar: loadingBarReducer,
})