import React from 'react';
import { formatPriceCalculation } from '../../utils/formatPrice';

const OrderSummary = ({ totalPrice, cart, address, paymentMethod }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-wrap">
        {/* Left Section - Billing & Payment */}
        <div className="w-full lg:w-8/12 pr-0 lg:pr-6">
          <div className="space-y-6">
            {/* Billing Address */}
<div className="bg-white p-6 border rounded-lg shadow-md space-y-3">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
    Billing Address
  </h2>
  <div className="text-gray-700 space-y-2 leading-relaxed">
    <p><span className="font-medium text-gray-900">Building Name:</span> {address?.buildingName}</p>
    <p><span className="font-medium text-gray-900">City:</span> {address?.city}</p>
    <p><span className="font-medium text-gray-900">Street:</span> {address?.street}</p>
    <p><span className="font-medium text-gray-900">State:</span> {address?.state}</p>
    <p><span className="font-medium text-gray-900">Pincode:</span> {address?.pincode}</p>
    <p><span className="font-medium text-gray-900">Country:</span> {address?.country}</p>
  </div>
</div>

{/* Payment Method */}
<div className="bg-white p-6 border rounded-lg shadow-md mt-6 space-y-3">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
    Payment Method
  </h2>
  <p className="text-gray-700 text-lg">
    <span className="font-medium text-gray-900">Method:</span> {paymentMethod}
  </p>
</div>


            {/* Order Items */}
            <div className="bg-white p-6 border rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">Order Items</h2>
              <div className="space-y-4">
                {cart?.map((item) => (
                  <div key={item?.productId} className="flex items-center border-b pb-4">
                    <img
                      src={`${import.meta.env.VITE_BACK_END_URL}/images/${item?.image}`}
                      alt="Product"
                      className="w-16 h-16 rounded-lg object-cover border"
                    />
                    <div className="ml-4 text-gray-700">
                      <p className="font-medium">{item?.productName}</p>
                      <p className="text-sm text-gray-500">
                        {item?.quantity} x ${item?.specialPrice} = $
                        {formatPriceCalculation(item?.quantity, item?.specialPrice)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full lg:w-4/12 mt-6 lg:mt-0">
          <div className="bg-white border rounded-lg shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Products</span>
                <span className="font-medium">${formatPriceCalculation(totalPrice, 1)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (0%)</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-900 border-t pt-4">
                <span>SubTotal</span>
                <span>${formatPriceCalculation(totalPrice, 1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
