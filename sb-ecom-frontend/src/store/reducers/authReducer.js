const initialState = {
    user: null,
    address: [],
    //clientSecret,
    selectedUserCheckoutAddress: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
      console.log("Setting user in state:", action.payload);
      const token = action.payload.token || action.payload.accessToken || null; // Adjust based on actual field name
      return {
        ...state,
        user: {
          ...action.payload,
          jwtToken: token,
        },
      };
        case "USER_ADDRESS":
            return { ...state, address: action.payload };
        case "SELECT_CHECKOUT_ADDRESS":
            return { ...state, selectedUserCheckoutAddress: action.payload };
        case "REMOVE_CHECKOUT_ADDRESS":
            return { ...state, selectedUserCheckoutAddress: null };
        case "CLIENT_SECRET":
            return { ...state, clientSecret: action.payload };
        case "REMOVE_CLIENT_SECRET_ADDRESS":
            return { ...state, clientSecret: null, selectedUserCheckoutAddress: null };
        case "LOG_OUT":
            return { 
                user: null,
                address: null,
             };
             
        default:
            return state;
    }
};