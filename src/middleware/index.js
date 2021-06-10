import { applyMiddleware } from 'redux'
import logger from './logger'
import thunk from 'redux-thunk'
import authCheck from './authChecker'
import LogRocket from 'logrocket';

export default applyMiddleware(
    thunk,
    authCheck,
    logger,
    LogRocket.reduxMiddleware(),
)