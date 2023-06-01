import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title }) => (
    <div className="mt-6 mb-2 lg:mt-0">
        <h3 className="font-alegreya font-bold text-3xl">{title}</h3>
    </div>
)

export default Title

Title.propTypes = {
    title: PropTypes.string.isRequired,
}
