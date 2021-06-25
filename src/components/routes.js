import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NewsList from './post/newslist';
import LogoHeader from './common/logoheader';
import FourZeroFour from './404';
import Search from './search/search'
import SingleNews from './post/singleNews';
import SendOtp from './login/sendOtp';
import VerifyOtp from './login/verifyOtp';
import Comment from './post/comment'
import Profile from './profile/profile'
import Bookmarks from './post/bookmarks'
import AddPost from './post/addPost'
import Notification from './notifications/notifications.js'
import ChooseLangLoc from './settings/chooseLangLoc'
import ChooseTopic from './settings/chooseTopic';
import Settings from './settings/settings'
import Account from './settings/account';
import Stats from './settings/statsAndReward'
import SupportForm from './settings/support';
import VideoCard1 from './videos/videoCard1'
import OnBoarding from './onBoarding/onBoard';

const AllRoutes = () => {
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
                        <LogoHeader pageName='Videos' />
                        <VideoCard1 />
                    </Fragment>
                )}
            />
            <Route
                path='/bookmarks'
                component={Bookmarks}
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
                render={() => {
                    const token = localStorage.getItem('token')
                    if (token) {
                        return <Settings />
                    } else {
                        return <Redirect to="/send-otp" />
                    }
                }}
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
            <Route path='/onBoard' component={OnBoarding} />
            <Route component={FourZeroFour} />
        </Switch>
    )
}

export default AllRoutes