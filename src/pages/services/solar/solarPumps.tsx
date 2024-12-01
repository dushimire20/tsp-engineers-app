import React, { useState } from 'react';
import { solarPumps } from '@/data/solars/solarPumps'; // Example data source
import ProductGrid from "@/components/ProductGrid ";
import ProductModal from "@/components/ProductModal ";

const SolarPumps = () => {
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
      <ProductGrid products={solarPumps} onProductClick={openModal} />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default SolarPumps;
