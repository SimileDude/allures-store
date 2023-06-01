import { SET_FILTER, SET_PRODUCTS } from './actionTypes'

export const searchReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload }

        case SET_FILTER: {
            // update the filter state
            const updatedFilters = { ...state.filters, [payload.name]: payload.value }

            let filteredProducts = [...state.products]

            if (updatedFilters.minPrice) {
                filteredProducts = state.products.filter((product) => product.price >= updatedFilters.minPrice)
            }

            if (updatedFilters.maxPrice) {
                filteredProducts = state.products.filter((product) => product.price <= updatedFilters.maxPrice)
            }

            if (updatedFilters.category) {
                filteredProducts = state.products.filter((product) => product.category === updatedFilters.category)
            }

            return {
                ...state,
                filters: updatedFilters,
                filteredProducts: filteredProducts,
            }
        }

        default:
            return state
    }
}
