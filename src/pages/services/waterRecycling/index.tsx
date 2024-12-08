import React, { useState } from 'react';
import { waterRecycling } from '@/data/waterRecycling'; // Example data source
import ProductGrid from "@/components/ProductGrid ";
import ProductModal from "@/components/ProductModal ";
import SectionTitle from '@/common/sectionTitle';
import RC from "@/assets/waterRecycling/RC.jpg"

type Props = {}

const WaterRecycling = (props: Props) => {
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
        <img className=" h-fit w-full object-cover" src={RC} alt="Winding mountain road" />
    </div>
    

    
    <div
        className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        
        <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-sky-800 lg:text-4xl">RECYCLING AND WASTEWATER TREATMENT</h2>
            <p className="mt-4">
            Contaminated water originating from domestic and industrial use is called wastewater. Since the content of wastewater in domestic use is in a harmonious balance in terms of carbon, nitrogen and phosphorus, we can make the treated wastewater usable for garden and recreational area irrigation by applying physical and biological wastewater treatment systems and subsequent filtration and disinfection systems.
            </p>
            
            
        </div>
        
    </div>
    

</div>
      <SectionTitle 
    
      title={"Systems for Recycling and Wastewater Treatment"} 
      paragraph={''} />
      {/* Product Grid */}
      <ProductGrid products={waterRecycling} onProductClick={openModal} />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default WaterRecycling;