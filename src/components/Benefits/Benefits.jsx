import React from 'react'

import BenefitsItem from '../BenefitsItem'

const benefits = [
    {
        title: 'Shipping',
        text: 'We provide free shipping for all our products. No matter where you are, we will deliver your chosen product right to your doorstep.',
    },
    {
        title: 'Products',
        text: 'Our products are not just randomly picked. We hand-select each item with you in mind, ensuring we offer only the best for our customers.',
    },
    {
        title: 'Satisfaction',
        text: `We believe in our products. That's why we offer a 100% satisfaction guarantee for 2 weeks. If you're not satisfied, you get your money back.`,
    },
]

const Benefits = () => (
    <div className="container mx-auto text-2xl flex flex-col md:flex-row mb-20 space-y-8 md:space-y-0 md:space-x-8 sm:w-3/4 md:w-full">
        {benefits.map((item) => (
            <BenefitsItem key={item.title} item={item} />
        ))}
    </div>
)

export default Benefits
