import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HeroBanner from "./HeroBanner";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";
import { fetchProducts } from "../../store/actions";
import React from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="px-4 sm:px-8 lg:px-14">
      <div className="py-6">
        <HeroBanner />
      </div>

      <div className="py-5">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-4xl font-bold text-slate-800">Our Products</h1>
          <span className="text-slate-700">
            Discover our handpicked selection of top-rated items just for you!
          </span>
        </div>

        {isLoading ? (
          <Loader />
        ) : errorMessage ? (
          <div className="flex items-center justify-center h-48">
            <FaExclamationTriangle className="text-3xl text-slate-800 mr-2" />
            <span className="text-lg font-medium text-slate-800">
              {errorMessage}
            </span>
          </div>
        ) : (
          <div className="pt-14 pb-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {products &&
              products.slice(0, 4).map((item, i) => (
                <ProductCard key={i} {...item} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
