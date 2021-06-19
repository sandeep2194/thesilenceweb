import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../utils/history'
import { handleGetNews } from '../actions/news'
import LogRocket from 'logrocket';
import { handleReceiveBookmarksData } from '../actions/authedUser'

import LoadingBar from 'react-redux-loading'
import ReduxToastr from 'react-redux-toastr'

import AllRoutes from './routes'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleGetNews(1, 10))
    dispatch(handleReceiveBookmarksData())

    const token = localStorage.getItem('token')
    const { authedUser } = this.props
    if (token) {
      LogRocket.identify(authedUser._id, {
        name: authedUser.name,
        email: authedUser.email,
        // Add your own custom user variables here, ie:
      });
    }
  }
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#2F80ED', height: '5px' }} />
          <AllRoutes />
          <ReduxToastr
            timeOut={6000}
            newestOnTop={true}
            position="bottom-right"
            getState={(state) => state.toastr} // This is the default
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick />
        </Fragment>
      </Router>

    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(App);
