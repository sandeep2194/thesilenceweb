import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../utils/history'
import { handleGetNews } from '../actions/news'
import LogRocket from 'logrocket';
import { handleReceiveBookmarksData } from '../actions/authedUser'

import LoadingBar from 'react-redux-loading'
import ReduxToastr from 'react-redux-toastr'
import NewsList from './newslist';
import LogoHeader from './logoheader';
import FourZeroFour from './404';
import GettingStarted from './gettingStarted'
import UploadProfilePic from './uploadProfilePic'
import Search from './search'
import SingleNews from './singleNews';
import SendOtp from './sendOtp';
import VerifyOtp from './verifyOtp';
import Comment from './comment'
import Profile from './profile'
import VideoList from './videoList'
import Bookmarks from './bookmarks'
import AddPost from './addPost'
import Notification from './notifications'

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
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route
              path='/home'
              render={() => (
                this.props.loading === true ? null
                  : <Fragment>
                    <LogoHeader />
                    <NewsList />
                  </Fragment>
              )}
            />
            <Route
              path='/videos'
              render={() => (
                <Fragment>
                  <LogoHeader />
                  <VideoList />
                </Fragment>
              )}
            />
            <Route
              path='/bookmarks'
              render={() => (
                <Bookmarks />
              )}
            />
            <Route
              path='/post'
              render={() => (
                <AddPost />
              )}
            />
            <Route
              path='/notifications'
              render={() => (
                <Notification />
              )}
            />
            <Route
              path='/send-otp'
              render={() => (
                <SendOtp />
              )}
            />
            <Route
              path='/verify'
              component={VerifyOtp}
            />
            <Route
              path='/getting-started'
              component={GettingStarted}
            />
            <Route
              path='/upload-profile-pic'
              component={UploadProfilePic}
            />
            <Route
              path='/search'
              component={Search}
            />
            <Route
              path='/news/:newsId'
              component={SingleNews}
            />
            <Route
              path='/comment/:itemId'
              component={Comment}
            />
            <Route path='/profile/:userId'
              component={Profile} />
            <Route component={FourZeroFour} />
          </Switch>
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
function mapStateToProps({ news, authedUser }) {
  return {
    loading: news.length === 0,
    authedUser,
  }
}
export default connect(mapStateToProps)(App);
