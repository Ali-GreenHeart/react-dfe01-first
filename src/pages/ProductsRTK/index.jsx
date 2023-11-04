import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import productSlice from "../../store/slices/productSlice"

const url = 'https://dummyjson.com/products'


const ProductsRTK = ({ }) => {
    const products = useSelector((store) => store.product.value)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch(productSlice.actions.get_products(data.products))
        })
    }, [])

    return (
        <>
            <button onClick={() => dispatch(productSlice.actions.remove_first_product())}>remove first element</button>
            <button onClick={() => dispatch(productSlice.actions.add_product({ id: 8969, title: 'iphone san-anders' }))}>add product</button>
            {
                products.map((p) => {
                    return (
                        <h1 key={p.id}>
                            {p.title}
                            <button onClick={() => dispatch(productSlice.actions.remove_product(p.id))}>❌</button>
                            <button onClick={() => dispatch(productSlice.actions.edit_product(p.id))}>🖋</button>
                        </h1>
                    )
                })
            }


        </>
    )
}

export default ProductsRTK
