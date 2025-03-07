import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ProductViewModal from './ProductViewModal';
import { useDispatch } from "react-redux";
import truncateText from '../../utils/truncateText';
import { addToCart } from '../../store/actions';
import toast from "react-hot-toast";

const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice
}) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0;
    const dispatch = useDispatch();

    const handleProductView = (product) => {
        setSelectedViewProduct(product);
        setOpenProductViewModal(true);
    };

    const addToCartHandler = (cartItems) => {
        dispatch(addToCart(cartItems, 1, toast));
    };

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            {/* Product Image */}
            <div 
                onClick={() => handleProductView({
                    productId,
                    productName,
                    image,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice
                })}
                className="w-full h-78 cursor-pointer overflow-hidden">
                <img 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    src={image}
                    alt={productName}
                />
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h2 
                    onClick={() => handleProductView({
                        productId,
                        productName,
                        image,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice
                    })}
                    className="text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600 transition-colors">
                    {truncateText(productName, 50)}
                </h2>
                
                <p className="text-gray-600 text-sm mb-3 min-h-20">
                    {truncateText(description, 80)}
                </p>

                {/* Price Section */}
                <div className="flex items-center justify-between">
                    {specialPrice ? (
                        <div className="flex flex-col">
                            <span className="text-gray-400 line-through text-sm">
                                ${Number(price).toFixed(2)}
                            </span>
                            <span className="text-xl font-bold text-gray-800">
                                ${Number(specialPrice).toFixed(2)}
                            </span>
                        </div>
                    ) : (
                        <span className="text-xl font-bold text-gray-800">
                            ${Number(price).toFixed(2)}
                        </span>
                    )}

                    {/* Add to Cart Button */}
                    <button
                        disabled={!isAvailable}
                        onClick={() => addToCartHandler({
                            image,
                            productName,
                            description,
                            specialPrice,
                            price,
                            productId,
                            quantity,
                        })}
                        className={`flex items-center justify-center w-36 py-2 px-3 rounded-lg transition duration-300 ${
                            isAvailable ? "bg-blue-500 hover:bg-blue-600 text-white" 
                            : "bg-gray-400 text-gray-700 cursor-not-allowed"
                        }`}>
                        <FaShoppingCart className="mr-2" />
                        {isAvailable ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>

            {/* Product View Modal */}
            <ProductViewModal
                open={openProductViewModal}
                setOpen={setOpenProductViewModal}
                product={selectedViewProduct}
                isAvailable={isAvailable}
            />
        </div>
    );
}

export default ProductCard;
