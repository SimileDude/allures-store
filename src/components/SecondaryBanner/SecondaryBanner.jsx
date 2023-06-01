import React from 'react'

import ButtonLink from '../ButtonLink'
import ring from './diamond-ring.png'

import './SecondaryBanner.css'

const SecondaryBanner = () => {
    return (
        <div className="banner__secondary container flex items-center justify-between mx-auto md:px-20 bg-earthYellow w-full">
            <div>
                <h3 className="font-alegreya mb-4 text-white text-2xl">
                    your body, <br /> your style, <br /> your rules
                </h3>
                <ButtonLink path="/about" text="see more" />
            </div>
            <div className="ml-4">
                <img className="py-8" width="200" src={ring} alt="A ring with a square diamond on it" />
            </div>
        </div>
    )
}

export default SecondaryBanner
