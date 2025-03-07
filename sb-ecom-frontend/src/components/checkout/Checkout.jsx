import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { useEffect, useState } from 'react';
import AddressInfo from './AddressInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAddresses } from '../../store/actions';
import React from 'react';
import toast from 'react-hot-toast';
import PaymentMethod from './PaymentMethod';
import Skeleton from '../shared/Skeleton';
import ErrorPage from '../shared/ErrorPage';
import OrderSummary from './OrderSummary';
import StripePayment from './StripePayment';
import PaypalPayment from './PaypalPayment';

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0); 
    const dispatch = useDispatch();
    const { isLoading, errorMessage } = useSelector((state) => state.errors);
    const { totalPrice, cart } = useSelector((state) => state.carts);
    const { address, selectedUserCheckoutAddress } = useSelector(
        (state) => state.auth
    );

    const { paymentMethod } = useSelector((state) => state.payment);

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleNext = () => {
        if (activeStep === 0 && !selectedUserCheckoutAddress) {
            toast.error("Please select a checkout address before proceeding.");
            return;
        }

        if (activeStep === 1 && (!selectedUserCheckoutAddress || !paymentMethod)) {
            toast.error("Please select a payment method before proceeding.");
            return;
        }
        
        setActiveStep((prevStep) => prevStep + 1);
    };

    const steps = ["Address", "Payment Method", "Order Summary", "Payment"];

    useEffect(() => {
        dispatch(getUserAddresses());
    }, [dispatch]);

    return (
        <div className="py-16 min-h-screen bg-gray-50">
            {/* Stepper Navigation */}
            <div className="lg:w-3/4 mx-auto bg-white p-6 rounded-lg shadow-md">
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step> 
                    ))}
                </Stepper>
            </div>

            {/* Main Checkout Sections */}
            <div className="mt-6">
                {isLoading ? (
                    <div className="lg:w-3/4 mx-auto py-5">
                        <Skeleton />
                    </div>
                ) : (
                    <>
                        {activeStep === 0 && <AddressInfo address={address} />}
                        {activeStep === 1 && <PaymentMethod />}
                        {activeStep === 2 && (
                            <OrderSummary 
                                totalPrice={totalPrice}
                                cart={cart}
                                address={selectedUserCheckoutAddress}
                                paymentMethod={paymentMethod}
                            />
                        )}
                        {activeStep === 3 && (
                            <>
                                {paymentMethod === "Stripe" ? <StripePayment /> : <PaypalPayment />}
                            </>
                        )}
                    </>
                )}
            </div>

            {/* Footer Navigation */}
            <div
                className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 shadow-md flex justify-between items-center px-6 sm:px-12">
                <Button
                    variant="outlined"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="text-gray-700 border-gray-500 hover:bg-gray-100 transition duration-300">
                    Back
                </Button>

                {activeStep !== steps.length - 1 && (
                    <button
                        disabled={errorMessage || (activeStep === 0 && !selectedUserCheckoutAddress) || (activeStep === 1 && !paymentMethod)}
                        className={`px-6 h-12 rounded-lg font-semibold transition duration-300 ${
                            errorMessage || 
                            (activeStep === 0 && !selectedUserCheckoutAddress) || 
                            (activeStep === 1 && !paymentMethod)
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                        onClick={handleNext}>
                        Proceed
                    </button>
                )}
            </div>

            {/* Error Message */}
            {errorMessage && <ErrorPage message={errorMessage} />}
        </div>
    );
};

export default Checkout;
