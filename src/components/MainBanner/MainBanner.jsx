import React from 'react'

import ButtonLink from '../ButtonLink'

import womanJacket from './woman-jacket.png'
import bg from './bg-ovals.png'

const MainBanner = () => (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center mt-0 md:mt-20 mb-10">
        <div>
            <h1 className="font-alegreya text-3xl font-semibold md:text-5xl mb-4 md:mb-10 uppercase">
                Free Shipping Today!
            </h1>
            <p className="mb-6">
                {/* This project is built with data from a MakeUp API using Axios, Tailwind CSS, ReactJS, PropTypes, React
                Context API and React Router. */}
                Allures is an online store that sells clothes, accessories, jewelery and electronics. We have a wide
                range of products for you can choose from. Shipping is always free!
            </p>
            <p className="mb-6">
                {/* Webtwo ipsum divvyshot. disqus elgg klout. Jumo wufoo hulu spotify trulia, twitter nuvvo. Omgpop tumblr
                odeo mog palantir squidoo balihoo nuvvo, etsy yuntaa elgg reddit kiko oovoo. Kno revver oovoo, blyve. */}
            </p>
            <ButtonLink path="/search" text="see more" isMain />
        </div>
        <div className="relative flex justify-center mx-auto  md:ml-4 mb-4 md:mb-0 py-10 md:py-0 w-2/3 md:w-full ">
            <img
                src={bg}
                alt="multi-coloured ovals"
                className="absolute top-0 w-full h-full object-cover rounded-2xl"
            />
            <img src={womanJacket} alt="A woman's jacket" className="h-auto z-20" />
        </div>
    </div>
)

export default MainBanner
