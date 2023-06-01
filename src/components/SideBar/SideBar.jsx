import React from 'react'

import { setFilter } from '../../state/actionCreators'
import { useSearchState } from '../../state/search-context'

import CategoriesBar from '../CategoriesBar'
import PriceRange from '../PriceRange'

const SideBar = () => {
    const [, dispatch] = useSearchState()

    const handleOnChange = (e) => {
        const { name, value } = e.target
        dispatch(setFilter(name, value))
        console.log({ name }, { value })
    }

    const handleOnSelect = (value) => {
        dispatch(setFilter('category', value))
    }

    return (
        <div className="pl-6 border-r-2 border-earthYellowLight h-full">
            <PriceRange onChange={handleOnChange} />

            <div className=" px-6 py-2 mb-4 text-sm">
                <CategoriesBar onSelect={handleOnSelect} />
            </div>
        </div>
    )
}

export default SideBar
