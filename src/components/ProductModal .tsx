import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white w-full h-full flex">
        {/* Image Section */}
        <div className="w-1/2 h-full flex items-center justify-center bg-gray-100">
          <img src={product.image} alt={product.name} className="rounded-2xl" />
        </div>
        {/* Details Section */}
        <div className="w-1/2 h-full p-10 overflow-auto relative">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 absolute top-5 right-5 text-3xl"
          >
            &times;
          </button>
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              {product.name}
            </h2>
            <p className="text-gray-600 text-lg">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
