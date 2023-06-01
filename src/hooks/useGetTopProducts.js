import { useEffect, useState } from 'react'
// import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com/products'

const useGetTopProducts = () => {
    const [products, setProducts] = useState([])

    const getTopProducts = () => {
        fetch(`${BASE_URL}?limit=10`)
            .then((res) => res.json())
            .then((json) => {
                setProducts(json)
            })
    }

    useEffect(() => {
        getTopProducts()
    }, [])

    return products
}

export default useGetTopProducts
