import { ADD_SCROLL_POSITION } from "../actions/listsData"

const logger = (store) => (next) => (action) => {
    const returnValue = next(action)
    if (action.type !== ADD_SCROLL_POSITION) {
        console.group(action.type)
        console.log('The Action: ', action)
        console.log("The new state is: ", returnValue)
        console.groupEnd()
    }
    return returnValue
}

export default logger