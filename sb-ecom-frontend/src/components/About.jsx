import React from "react";
import { FaBuilding, FaMapMarkerAlt, FaRegHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-gray-800 text-4xl font-bold text-center mb-8">About Chandhana Bros</h1>
      
      {/* Company Overview */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-x-12">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img
            src="https://embarkx.com/sample/placeholder.png"
            alt="Company Building"
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
          <p className="text-lg mb-4">
            At Chandhana Bros, we blend tradition with innovation to bring you exquisite fabrics and garments. 
            Our commitment to excellence ensures premium quality materials crafted with precision and care. 
            Experience elegance, comfort, and superior craftsmanship with every purchase.
          </p>
        </div>
      </div>

      {/* Company Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaBuilding className="text-purple-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Legacy</h2>
          <p className="text-gray-600">With a rich heritage in textiles, we have been serving customers with dedication and excellence.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaMapMarkerAlt className="text-red-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h2>
          <p className="text-gray-600">Conveniently located in the heart of the city, making quality products accessible to all.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaRegHandshake className="text-green-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Commitment</h2>
          <p className="text-gray-600">We prioritize quality and customer satisfaction, ensuring a seamless shopping experience.</p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="text-center mt-12 py-6 border-t">
        <p className="text-gray-600">&copy; 2025 Chandhana Bros. All Rights Reserved.</p>
        <p className="text-gray-500 text-sm">Licensed under Chandhana Bros License.</p>
      </footer>
    </div>
  );
};

export default About;
