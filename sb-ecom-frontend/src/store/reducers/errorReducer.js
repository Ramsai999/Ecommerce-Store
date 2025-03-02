const initialState = {
    isLoading: false,
    errorMessage: null,
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "IS_FETCHING":
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            };
            break;
        case "IS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
            };

            break;
        case "IS_ERROR":
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            };

            break;
        default:
            return state;
    }
}

export default errorReducer;
