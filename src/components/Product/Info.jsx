import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ category }) => (
    <>
        <h1 className="font-alegreya text-2xl">{category}</h1>
    </>
)

export default Info

Info.propTypes = {
    category: PropTypes.string.isRequired,
}
