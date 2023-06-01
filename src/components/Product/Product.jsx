import React from 'react'
import PropTypes from 'prop-types'

import CartButton from '../CartButton'
import Price from '../Price'
import Image from './Image'
import Info from './Info'
import Description from './Description'
import Title from './Title'

const Product = ({ title, img, category, price, description }) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-center mb-20">
                <Image title={title} img={img} />

                <div>
                    <Title title={title} />
                    <Info title={title} category={category} />

                    <div className="flex my-10 justify-between">
                        <Price price={price} isLarge />
                        <CartButton />
                    </div>

                    <Description text={description} />
                </div>
            </div>
        </>
    )
}

export default Product

Product.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
