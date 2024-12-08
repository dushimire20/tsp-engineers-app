import React, { useState } from 'react';
import { surfaceWaterTreatment } from '@/data/surfaceWatertreatment'; // Example data source
import ProductGrid from "@/components/ProductGrid ";
import ProductModal from "@/components/ProductModal ";
import SectionTitle from '@/common/sectionTitle';
import swt from "@/assets/surfaceWaterTreatment/SWT.jpg"

type Props = {}

const SurfaceWaterTreatment = (props: Props) => {
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
        <img className=" h-fit w-full object-cover" src={swt} alt="Winding mountain road" />
    </div>
    

    
    <div
        className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        
        <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-sky-800 lg:text-4xl">SURFACE WATER TREATMENT</h2>
            <p className="mt-4">
            Surface water treatment systems are the systems selected when streams, lakes, rivers and similar sources are used as sources. Since surface waters will vary with natural events such as rain, snow and the like, for the treatment of the source, the raw water characteristics should be examined seasonally and the treatment system should be selected according to the worst possible analysis value.
            </p>

            <p className='mt-2'>
            We can design and implement surface water treatment systems using conventional treatment, ultrafiltration or classical treatment systems, depending on water characteristics.
            </p>
            
            
        </div>
        
    </div>
    

</div>
      <SectionTitle 
    
      title={"Systems for Surface Water Treatment"} 
      paragraph={''} />
      {/* Product Grid */}
      <ProductGrid products={surfaceWaterTreatment} onProductClick={openModal} />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default SurfaceWaterTreatment;