import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { useSearchState } from '../state/search-context'
import { setProducts } from '../state/actionCreators'

export const BASE_URL = 'https://fakestoreapi.com/products'

const useSearch = () => {
    const [state, dispatch] = useSearchState()
    const [isLoading, setIsLoading] = useState(true)

    const getProducts = useCallback(() => {
        setIsLoading(true)
        dispatch(setProducts([]))

        axios.get(`${BASE_URL}?limit=60`).then(({ data }) => {
            dispatch(setProducts(data))
            setIsLoading(false)
            // console.log({ data })
        })
    }, [dispatch])

    useEffect(() => {
        getProducts()
    }, [state.filters, getProducts])

    return {
        isLoading,
    }
}

export default useSearch
