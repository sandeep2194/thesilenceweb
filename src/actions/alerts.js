
export const SUCCESS_ALERT = 'SUCCESS_ALERT'
export const FAILED_ALERT = 'FAILED_ALERT'

export function successAlert(message) {
    return {
        type: SUCCESS_ALERT,
        message,
    }
}
export function failedAlert(message) {
    return {
        type: FAILED_ALERT,
        message,
    }
}