import { ADD_LIST_DATA, ADD_SCROLL_POSITION } from "../actions/listsData";

export default function listsData(state = {}, action) {
    const oldListData = state[action.name]
    switch (action.type) {
        case ADD_LIST_DATA:
            return {
                ...state,
                [action.name]: { ...oldListData, ...action.listData }
            }
        case ADD_SCROLL_POSITION:
            return {
                ...state,
                [action.name]: { ...oldListData, scrollPosition: action.scrollPosition }
            }
        default:
            return state;
    }
}