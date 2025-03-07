import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemContent from "./ItemContent";
import CartEmpty from "./CartEmpty";
import { formatPrice } from "../../utils/formatPrice.js";
import React from "react";

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.carts);
    const newCart = { ...cart };

    newCart.totalPrice = cart?.reduce(
        (acc, cur) => acc + Number(cur?.specialPrice) * Number(cur?.quantity), 0
    );

    if (!cart || cart.length === 0) return <CartEmpty />;

    return (
        <div className="lg:px-16 sm:px-8 px-4 py-12 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                  <MdShoppingCart size={36} className="text-blue-600" />
                    Your Cart
                </h1>
                <p className="text-lg text-gray-600 mt-2">Review your selected items</p>
            </div>

            {/* Table Header */}
            <div className="grid md:grid-cols-5 grid-cols-4 gap-6 pb-3 font-semibold items-center border-b border-gray-300">
                <div className="md:col-span-2 text-left text-lg text-gray-800 lg:ps-4">
                    Product
                </div>
                <div className="text-center text-lg text-gray-800">Price</div>
                <div className="text-center text-lg text-gray-800">Quantity</div>
                <div className="text-center text-lg text-gray-800">Total</div>
            </div>

            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
                {cart && cart.length > 0 &&
                    cart.map((item, i) => <ItemContent key={i} {...item}/>)}
            </div>

            {/* Summary & Checkout */}
            <div className="border-t border-gray-300 py-6 flex flex-col sm:flex-row sm:justify-between gap-6">
                
                {/* Left Placeholder (Can be used for offers, notes, etc.) */}
                <div></div>

                {/* Summary Section */}
                <div className="flex flex-col text-sm gap-3 w-full sm:w-auto">
                    <div className="flex justify-between w-full md:text-lg text-sm font-semibold">
                        <span>Subtotal</span>
                        <span className="text-gray-900">{formatPrice(newCart?.totalPrice)}</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                        Taxes and shipping calculated at checkout
                    </p>

                    {/* Checkout Button */}
                    <Link className="w-full flex justify-end" to="/checkout">
                        <button
                            className="w-[300px] py-3 px-5 rounded-lg bg-blue-600 text-white text-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all duration-300">
                            <MdShoppingCart size={22} />
                            Checkout
                        </button>
                    </Link>

                    {/* Continue Shopping */}
                    <Link className="flex gap-2 items-center mt-3 text-gray-600 hover:text-gray-800 transition duration-300" to="/products">
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
