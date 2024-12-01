import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  path: string; // Add path to product for dynamic routing
}

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <section
      id="Products"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      {products.map((product) => (
        <Link
          key={product.id}
          to={product.path} // Dynamic link based on product path
          className="w-72 h-96 bg-white shadow-md rounded-full duration-500 hover:scale-105 hover:shadow-xl border-2 cursor-pointer flex flex-col items-center box-border hover:border-2 hover:border-sky-400"
          style={{
            animation: 'borderCycle 2s infinite', // Add animation
          }}
        >
          {/* Image Section */}
          <div className="w-36 h-36  rounded-2xl overflow-hidden mt-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="px-4 py-3 flex-1 flex flex-col items-center text-center">
            <span className="text-gray-400 uppercase text-xs mb-2">Brand</span>
            <p className="text-lg font-bold text-black capitalize truncate">
              {product.name}
            </p>
            <p className="text-sm text-gray-600 line-clamp-3 mt-2">
              {product.description}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductGrid;
