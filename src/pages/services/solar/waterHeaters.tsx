import React, { useState } from 'react';
import { waterHeaters } from '@/data/solars/waterHeaters'; // Example data source
import ProductGrid from "@/components/ProductGrid ";
import ProductModal from "@/components/ProductModal ";

const WaterHeaters = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <div className="w-full py-56">
      {/* Product Grid */}
      <ProductGrid products={waterHeaters} onProductClick={openModal} />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default WaterHeaters;
