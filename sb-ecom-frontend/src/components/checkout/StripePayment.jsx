import { Alert, AlertTitle } from '@mui/material'
import React from "react"

//const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {

    // const StripePayment = () => {
    //     const dispatch = useDispatch();
    //     const { clientSecret } = useSelector((state) => state.auth);
    //     const { totalPrice } = useSelector((state) => state.carts);
    //     const { isLoading, errorMessage } = useSelector((state) => state.errors);      

    // useEffect(() => {
    //     if (!clientSecret) {
    //       dispatch(createStripePaymentSecret(totalPrice));
    //     }
    //   }, [clientSecret]);
    
    //   if (isLoading) {
    //     return (
    //       <div className='max-w-lg mx-auto'>
    //         <Skeleton />
    //       </div>
    //     )
    //   }
    
    
    return (
        <div 
      className="flex justify-center items-center min-h-screen"
    >
      {/* Alert component from MUI with a warning severity */}
      <Alert 
        severity="warning" 
        variant="filled" 
        style={{ maxWidth: "400px" }}
      >
        {/* Alert title */}
        <AlertTitle>Stripe Method Unavailable</AlertTitle>
        Stripe Method not implemented yet.
      </Alert>
    </div>
    )
}


export default StripePayment
