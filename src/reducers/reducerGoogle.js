import { GOOGLE_OAUTH2 } from "../actions/google";

export const googleReducer = (state = [], action) => {
    switch (action.type) {
        case GOOGLE_OAUTH2: {
            return action.googleResponse;
        }
        default:
            return state;
    }
};