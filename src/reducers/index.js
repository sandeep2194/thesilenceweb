import { combineReducers } from 'redux'
import news from './news'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import users from './user'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
    news,
    authedUser,
    users,
    toastr: toastrReducer,
    loadingBar: loadingBarReducer,
})