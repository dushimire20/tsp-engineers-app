import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  return (
    <section
      id="Products"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="w-72 h-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:border-sky-800 border-2 cursor-pointer flex flex-col"
          onClick={() => onProductClick(product)}
        >
          {/* Image Section */}
          <div className="h-1/2 bg-gray-100 rounded-t-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="px-4 py-3 flex-1 flex flex-col">
            <span className="text-gray-400 uppercase text-xs mb-2">Brand</span>
            <p className="text-lg font-bold text-black capitalize truncate">
              {product.name}
            </p>
            <p className="text-sm text-gray-600 line-clamp-3 mt-2">
              {product.description}
            </p>
            {/* Engaging Call to Action */}
            <div className="mt-auto flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline hover:text-blue-800 transition duration-300">
              <span>Click for more details</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;
