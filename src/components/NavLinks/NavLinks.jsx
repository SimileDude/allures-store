import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/search',
        name: 'Products',
    },
    {
        path: '/about',
        name: 'About',
    },
]

const NavLinks = () => {
    return (
        <>
            {links.map((link, index) => (
                <NavLink
                    className="uppercase text-lg font-medium mr-5 hover:text-earthYellow md:mr-20 md:text-md"
                    to={link.path}
                    key={`${link.name}-${index}`}
                >
                    {link.name}
                </NavLink>
            ))}
        </>
    )
}

export default NavLinks
