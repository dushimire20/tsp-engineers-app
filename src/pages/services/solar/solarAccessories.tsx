import React, { useState } from 'react';
import { solarAccessories } from '@/data/solars/solarAccessories'; // Example data source
import ProductGrid from "@/components/ProductGrid ";
import ProductModal from "@/components/ProductModal ";
import SectionTitle from '@/common/sectionTitle';

type Props = {}

const SolarAccessories = (props: Props) => {
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
       <SectionTitle 
    
    title={"Solar Accessories Solutions"} 
    paragraph={''} />
      {/* Product Grid */}
      <ProductGrid products={solarAccessories} onProductClick={openModal} />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default SolarAccessories;