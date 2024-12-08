import React, { useState } from 'react';
import { waterDisalination } from '@/data/waterDisalination'; // Example data source
import ProductGrid from "@/components/ProductGrid ";
import ProductModal from "@/components/ProductModal ";
import SectionTitle from '@/common/sectionTitle';
import M6 from "@/assets/waterTreatments/M6.jpg"

type Props = {}

const WaterDisalination = (props: Props) => {
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
    <div className="w-full py-32 ">
      


<div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl py-16">

    
    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img className=" h-fit w-full object-cover" src={M6} alt="Winding mountain road" />
    </div>
    

    
    <div
        className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        
        <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-sky-800 lg:text-4xl">Seawater Desalination</h2>
            <p className="mt-4">
            Seawater purification systems can be applied to ships, boats, hotels, and sites where there is no clean water source. Seawater varies depending on the region where the source is located. For example, while the TDS value in the Marmara Sea is around 15,000-20,000 ppm, this value can reach 42,000 ppm for the Red Sea.
            </p>
            
            
        </div>
        
    </div>
    

</div>
      <SectionTitle 
    
      title={"Systems for Seawater Desalination"} 
      paragraph={''} />
      {/* Product Grid */}
      <ProductGrid products={waterDisalination} onProductClick={openModal} />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default WaterDisalination;