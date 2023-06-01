import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com/products'

const formatProduct = (data) => ({
    ...data,
    category: data.category?.replace(/_/g, ' '),
    description: data.description?.replace(/<\/?[^>]+(>|$)/g, ''),
    image: `${data.image}`,
})

const useGetProduct = () => {
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getSingleProduct = useCallback(() => {
        setIsLoading(true)

        axios.get(`${BASE_URL}/${id}`).then((response) => {
            const data = formatProduct(response.data)
            setSingleProduct(data)
        })
    }, [id])

    useEffect(() => {
        getSingleProduct()
    }, [id, getSingleProduct])

    useEffect(() => {
        setIsLoading(false)
    }, [singleProduct])

    return {
        isLoading,
        singleProduct,
    }
}

export default useGetProduct
