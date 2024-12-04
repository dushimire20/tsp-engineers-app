import React, { useState } from 'react';
import { digitalPowerSolutions } from '@/data/solars/digitalpowerSolutions'; // Example data source
import ProductGrid from "@/components/ProductGrid ";
import ProductModal from "@/components/ProductModal ";
import SectionTitle from '@/common/sectionTitle';

type Props = {}

const DPS = (props: Props) => {
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
    <div className="w-full py-56 text-center">
      <SectionTitle 
    
      title={"Digital Power Solutions"} 
      paragraph={''} />
      {/* Product Grid */}
      <ProductGrid products={digitalPowerSolutions} onProductClick={openModal} />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default DPS;