export const GOOGLE_OAUTH2 = "GOOGLE_OAUTH2";

export const googleOAuth2 = (googleResponse) => {
    return async (dispatch) => {
        if (typeof googleResponse === 'undefined') {
            googleResponse = [];
        }

        dispatch({ type: GOOGLE_OAUTH2, googleResponse });
    };
};