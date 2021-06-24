export const ADD_LIST_DATA = 'ADD_LIST_DATA';
export const ADD_SCROLL_POSITION = 'ADD_SCROLL_POSITION'

export const addListData = (name, listData) => {
    return {
        type: ADD_LIST_DATA,
        name,
        listData,
    }
}

export const addScrollPosition = (name, scrollPosition) => {
    return {
        type: ADD_SCROLL_POSITION,
        name,
        scrollPosition,
    }
}
