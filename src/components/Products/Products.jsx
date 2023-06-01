import React from 'react'
import { useSearchState } from '../../state/search-context'

import ProductCard from '../ProductCard'

const Products = () => {
    const [{ products, filteredProducts }] = useSearchState()

    const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : products

    return (
        <div className="flex flex-wrap justify-center">
            {productsToDisplay.length === 0 ? (
                <div className="text-center mt-8">
                    <h4 className="font-alegreya">Sorry, no products</h4>
                    <p>Please try changing your filters</p>
                </div>
            ) : (
                <>
                    {productsToDisplay.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            category={product.category}
                            imgUrl={product.image}
                            price={product.price}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

export default Products
