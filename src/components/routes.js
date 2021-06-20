import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

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
import ChooseLangLoc from './chooseLangLoc'
import ChooseTopic from './chooseTopic';
import Settings from './settings'
import Account from './settings/account';
import Stats from './settings/statsAndReward'
import SupportForm from './settings/support';

const AllRoutes = () => {
    const token = localStorage.getItem('token')
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route
                path='/home'
                render={() => (
                    <Fragment>
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
            <Route path='/choose-language-location'
                component={ChooseLangLoc} />
            <Route path='/choose-topics'
                component={ChooseTopic} />
            <Route exact path='/settings'
                render={() => (
                    token ? <Settings /> :
                        <Redirect to="/send-otp" />
                )}
            />
            <Route exact path='/settings/Account' component={Account} />
            <Route path='/settings/ChooseLanguage'>
                <Redirect to="/choose-language-location" />
            </Route>
            <Route path='/settings/ChooseLocation'>
                <Redirect to="/choose-language-location" />
            </Route>
            <Route path='/settings/ChooseTopic'>
                <Redirect to="/choose-topics" />
            </Route>
            <Route path='/settings/AddBankDetails'>
                <Redirect to="/settings/Account" />
            </Route>
            <Route path='/stats' component={Stats} />
            <Route path='/support' component={SupportForm} />
            <Route component={FourZeroFour} />
        </Switch>
    )
}

export default AllRoutes