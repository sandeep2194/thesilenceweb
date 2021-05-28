import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { googleOAuth2 } from '../actions/google';

class LoginWithGoogle extends Component {
    render() {
        let self = this;

        function LoginModal() {
            return (
                <Fragment>
                    <h3 style={{ textAlign: 'center' }}>Sign In with Google</h3>
                    <GoogleLogin
                        clientId="98161285619-f0p6qta2vj9tl6fe0tvbmbhlim2qugdl.apps.googleusercontent.com"
                        buttonText="Google Login"
                        onSuccess={self.props.googleOAuth2}
                        onFailure={self.props.googleOAuth2}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                </Fragment>
            );
        }

        function LoggedIn(props) {
            return (
                <GoogleLogout
                    clientId="98161285619-f0p6qta2vj9tl6fe0tvbmbhlim2qugdl.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={self.props.googleOAuth2}
                />
            );
        }

        function LoggedOut(props) {
            return (
                <LoginModal />
            );
        }

        function HandleAuth(props) {
            const isLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
                return <LoggedIn />;
            }
            return <LoggedOut />;
        }

        return (
            <HandleAuth isLoggedIn={typeof this.props.googleReducer.accessToken !== 'undefined'} />
        );
    }
};

function mapStateToProps(state) {
    return {
        ...state,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ googleOAuth2 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithGoogle);