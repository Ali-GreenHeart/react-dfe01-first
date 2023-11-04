import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: []
    },
    reducers: {
        get_products: (store, { payload }) => {
            store.value = payload
        },
        add_product: (store, act) => {
            store.value = store.value.concat(act.payload)
        },
        remove_first_product: (store) => {
            store.value.shift()
        },
        remove_product: (store, act) => {
            store.value = store.value.filter((p) => p.id !== act.payload)
        },
        edit_product: (store, act) => {
            store.value = store.value.map((p) => {
                if (p.id === act.payload) {
                    return { ...p, title: prompt('', p.title) ?? p.title }
                }
                return p
            })

        },
    }
})

export default productSlice;
