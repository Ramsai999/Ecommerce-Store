
const initialState = {
    products: null,
    categories: null,
    pagination: {},
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                pagination: {
                        ...state.pagination,
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalPages: action.totalPages,
                    totalElements: action.totalElements,
                    lastPage: action.lastPage,
                },
            };

        default:
            return state;
    }

};

export default productReducer;