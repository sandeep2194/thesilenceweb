export const ADD_LIST_DATA = 'ADD_LIST_DATA';

export const addListData = (name, listData) => {
    return {
        type: ADD_LIST_DATA,
        name,
        listData,
    }
}
