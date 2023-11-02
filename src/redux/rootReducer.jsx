const initialStore = {
    count: 0,
    users: []
}
export const _Actions = {
    inc: 0,
    dec: 1,
    special: 2
}
const rootReducer = (store = initialStore, action) => {
    switch (action.type) {
        case _Actions.inc:
            return { ...store, count: store.count + 1 }
        case _Actions.dec:
            return { ...store, count: store.count - 1 }
        case _Actions.special:
            return { ...store, count: action.payload }
        // users
        case 'get_users':
            return { ...store, users: action.payload }
        default:
            return store;
    }
}
export default rootReducer;
