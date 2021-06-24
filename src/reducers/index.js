import { combineReducers } from 'redux'
import news from './news'
import { loadingBarReducer } from 'react-redux-loading'
import users from './user'
import listsData from './listsData'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
    news,
    users,
    listsData,
    toastr: toastrReducer,
    loadingBar: loadingBarReducer,
})