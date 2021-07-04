export const SAVE = 'SAVE'

export function save(article) {
    return {
        type: SAVE,
        article,
    }
}
