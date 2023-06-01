import React from 'react'

const BenefitsItem = ({ item }) => (
    <div className="flex flex-1">
        <div className="relative mr-4">
            <div className="absolute bg-earthYellowLight h-10 rounded-full top-0 -left-4 w-10 -z-1"></div>
        </div>
        <div>
            <h5 className="font-alegreya ">{item.title}</h5>
            <p className="mt-5">{item.text}</p>
        </div>
    </div>
)

export default BenefitsItem
