const initialState = {
    products: [],
    categories:[],
    pagination: {
        pageNumber: 0,
        pageSize: 10,
        totalElements: 0,
        totalPages: 0,
        lastPage: false,
    },
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                },
            };
            case "FETCH_CATEGORIES":
                return {
                    ...state,
                    categories: action.payload,
                    pagination: {
                        ...state.pagination,
                        pageNumber: action.pageNumber,
                        pageSize: action.pageSize,
                        totalElements: action.totalElements,
                        totalPages: action.totalPages,
                        lastPage: action.lastPage,
                    },
                    
                };
        default:
            return state;
    }
};