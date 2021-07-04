import { combineReducers } from 'redux'
import news from './news'
import { loadingBarReducer } from 'react-redux-loading'
import users from './user'
import listsData from './listsData'
import { reducer as toastrReducer } from 'react-redux-toastr'
import drafts from './drafts'
import usage from './usageTracking'

export default combineReducers({
    news,
    users,
    listsData,
    usage,
    drafts,
    toastr: toastrReducer,
    loadingBar: loadingBarReducer,
})