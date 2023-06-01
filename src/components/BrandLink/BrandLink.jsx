import React from 'react'
import { Link } from 'react-router-dom'

const BrandLink = ({ classes }) => (
    <Link className={`font-alegreya text-2xl uppercase font-bold md:text-3xl lg:text-4xl pt-2`} to="/">
        Allures
    </Link>
)

export default BrandLink
