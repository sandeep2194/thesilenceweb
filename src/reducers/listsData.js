import { ADD_LIST_DATA } from "../actions/listsData";

export default function listsData(state = {}, action) {
    switch (action.type) {
        case ADD_LIST_DATA:
            return {
                [action.name]: { ...action.listData },
                ...state
            }
        default:
            return state;
    }
}