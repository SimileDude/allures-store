import React from 'react'

import clothes from './banner-clothes.png'

const HeaderBanner = () => {
    return (
        <div className="mx-6 mb-4">
            <div className="flex items-center justify-between md:px-20 bg-earthYellow w-full">
                <div>
                    <h3 className="font-alegreyaSans text-xl my-4 text-white">
                        your body, <br /> your style, <br /> your rules
                    </h3>
                </div>
                <div className="ml-4">
                    <img className="py-4" width="100" src={clothes} alt="various clothes for men and women" />
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner
