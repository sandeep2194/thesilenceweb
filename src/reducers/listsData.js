import { ADD_LIST_DATA, ADD_SCROLL_POSITION } from "../actions/listsData";

export default function listsData(state = {}, action) {
    switch (action.type) {
        case ADD_LIST_DATA:
            return {
                ...state,
                [action.name]: { ...action.listData }
            }
        case ADD_SCROLL_POSITION:
            const oldListData = state[action.name]
            return {
                ...state,
                [action.name]: { ...oldListData, scrollPosition: action.scrollPosition }
            }
        default:
            return state;
    }
}