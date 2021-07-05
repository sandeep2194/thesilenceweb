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
import Notification from './notifications/notifications.js'
import Settings from './settings/settings'
import Account from './settings/account';
import Stats from './settings/statsAndReward'
import SupportForm from './settings/support';
import OnBoarding from './onBoarding/onBoard';
import ChooseLang from './onBoarding/chooseLang';
import ChooseLocation from './onBoarding/chooseLocation'
import BackHeader from './common/backheader'
import ChooseTopic from './onBoarding/chooseTopic';
import VideoList from './videos/videoList'
import AddPostV2 from './post/addPostV2'
import AddPostPageTwo from './post/addPostPage2'

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
                        <VideoList />
                    </Fragment>
                )}
            />
            <Route
                path='/bookmarks'
                component={Bookmarks}
            />
            <Route
                path='/post'
                component={AddPostV2}
            />
            <Route
                path='/post-meta'
                component={AddPostPageTwo}
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
            <Route path='/settings/AddBankDetails'>
                <Redirect to="/settings/Account" />
            </Route>
            <Route path='/settings/stats' component={Stats} />
            <Route path='/settings/support' component={SupportForm} />
            <Route path='/settings/ChooseLanguage'
                render={() => (
                    <Fragment>
                        <BackHeader pageName='Choose Languages' />
                        <ChooseLang btnText='Save' />
                    </Fragment>
                )}
            />
            <Route path='/settings/ChooseLocation'
                render={() => (
                    <Fragment>
                        <BackHeader pageName='Choose Locations' />
                        <ChooseLocation btnText='Save' />
                    </Fragment>
                )}
            />
            <Route path='/settings/ChooseTopic'
                render={() => (
                    <Fragment>
                        <BackHeader pageName='Choose Topics' />
                        <ChooseTopic btnText='Save' />
                    </Fragment>
                )}
            />
            <Route path='/onBoard' component={OnBoarding} />
            <Route component={FourZeroFour} />
        </Switch>
    )
}

export default AllRoutes