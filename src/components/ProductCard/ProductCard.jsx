import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Price from '../Price'

const ProductCard = ({ id, title, category, imgUrl, price }) => {
    const [cleanTitle, setCleanTitle] = useState('')

    useEffect(() => {
        if (title) {
            const truncatedTitle = title.length > 12 ? title.substring(0, 11) + '...' : title
            setCleanTitle(truncatedTitle)
        }
    }, [title])

    function formatPrice(price) {
        return Number(price).toFixed(2)
    }

    return (
        <Link
            className="flex flex-col align-center rounded-md mb-6 mr-6 px-4 py-6 border-2 border-transparent  hover:border-earthYellow  transition delay-30 duration-300 ease-in-out"
            to={`/product/${id}`}
        >
            <div className="flex flex-1 flex-col justify-center mb-4">
                <img width="120" src={imgUrl} alt={title} className="mx-auto" />
            </div>
            <div>
                <p className="text-earthYellow font-alegreya  lowercase">{cleanTitle}</p>

                <p className="mb-4">{category}</p>

                <Price price={formatPrice(price)} />
            </div>
        </Link>
    )
}

export default ProductCard
