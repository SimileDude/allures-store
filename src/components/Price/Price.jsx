import React from 'react'
import PropTypes from 'prop-types'

const Price = ({ price, isLarge }) => (
    <div className="relative">
        <div className="absolute bg-light-grey h-10 top-0 w-50 -z-1"></div>
        <p className={`font-alegreya font-light text-${isLarge ? '5xl' : '3xl'} `}>${price} </p>
    </div>
)

export default Price

Price.propTypes = {
    price: PropTypes.string,
    isLarge: PropTypes.bool,
}

Price.defaultProps = {
    price: '0.00',
    isLarge: false,
}
