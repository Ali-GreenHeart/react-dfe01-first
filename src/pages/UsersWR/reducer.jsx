import { v4 } from "uuid";

export const USERS_ACTIONS = {
    get_users: 0,
    add_user: 1,
    rm_last_user: 2,
    rm_user: 3,
    edit_user: 4
}

export const reducer = (store, action) => {
    switch (action.type) {
        case USERS_ACTIONS.get_users:
            return action.payload;
        case USERS_ACTIONS.add_user:
            const username = prompt('enter new username')
            const name = prompt('enter new name')
            const id = v4()
            return [...store, { username, name, id }]
        case USERS_ACTIONS.rm_last_user:
            let a = [...store]
            a.pop()
            return a;
        case USERS_ACTIONS.rm_user:
            const newUsers = store.filter((us) => us.id !== action.payload)
            return newUsers;
        case USERS_ACTIONS.edit_user:
            const _newUsers = store.map((user) => {
                if (user.id === action.payload.id) {
                    return { ...user, username: action.payload.value }
                }
                return user;
            })
            return _newUsers
        default:
            return store;
    }
}
