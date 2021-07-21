import { ADD_SCROLL_POSITION } from "../actions/listsData"

const logger = (store) => (next) => (action) => {
    const returnValue = next(action)
    const env = process.env.NODE_ENV
    if (action.type !== ADD_SCROLL_POSITION && env !== 'production') {
        console.group(action.type)
        console.log('The Action: ', action)
        console.log("The new state is: ", returnValue)
        console.groupEnd()
    }
    return returnValue
}

export default logger