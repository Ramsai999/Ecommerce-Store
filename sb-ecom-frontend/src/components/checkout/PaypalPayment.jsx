import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const PaypalPayment = () => {
  return (
    // Outer div to center the alert both horizontally and vertically
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
        <AlertTitle>Paypal Method Unavailable</AlertTitle>
        Paypal Method not implemented yet.
      </Alert>
    </div>
  );
};

export default PaypalPayment;
