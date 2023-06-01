import React from 'react'
import './UniqueSellingPoint.css'

import woman from './sitting-in-kitchen.jpeg'

const UniqueSellingPoint = () => (
    <div className="bg-light-grey pt-20 mb-20">
        <div className="container mx-auto pt-20 pb-16 flex flex-col md:flex-row items-center">
            <div className="mr-0 md:mr-4 mb-4 md:mb-0 ">
                <img
                    src={woman}
                    alt="A woman sitting in her kitchen buying something"
                    className="unique-selling-point"
                />
            </div>
            <div>
                <h2 className="font-alegreya text-4xl mb-4">Quality and Service At Their Best</h2>
                <p className=" mb-2">
                    We offer hand-selected, top-quality clothing, jewelry, and electronics. We carefully choose each
                    item with our customers in mind, providing only the best products for your needs.
                </p>
                <p className="mb-2">
                    Furthermore, we are committed to your satisfaction. That's why we provide free shipping and a 100%
                    satisfaction guarantee for two weeks. If you're not completely happy with your purchase, we'll give
                    you your money back.
                </p>
                <p>Purchase in peace and enjoy!</p>
            </div>
        </div>
    </div>
)

export default UniqueSellingPoint
