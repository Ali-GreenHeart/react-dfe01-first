import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: []
    },
    reducers: {
        getUsers: () => {
            return ['ali', 'sada', 'idris']
        }
    }
})

export default usersSlice;
