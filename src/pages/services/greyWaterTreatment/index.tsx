import React, { useState } from "react";
import { grayWaterTreatment } from "@/data/grayWaterTreatment"; // Example data source
import ProductGrid from "@/components/ProductGrid ";
import ProductModal from "@/components/ProductModal ";
import SectionTitle from "@/common/sectionTitle";
import GC from "@/assets/grayWatertreatment/GC.jpg";

type Props = {};

const GrayWaterTreatment = (props: Props) => {
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
          <img
            className=" h-fit w-full object-cover"
            src={GC}
            alt="Winding mountain road"
          />
        </div>

        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-sky-800 lg:text-4xl">
              GRAY WATER TREATMENT
            </h2>
            <p className="mt-4">
              In domestic wastewater, the water collected by the sewer system,
              the wastewater originating from sinks, bathtubs and showers, is
              called grey water. If the grey water line can be separated from
              the sewer line during construction, this water can be recovered
              with the purification systems that can be applied and can be
              reused in garden irrigation or reservoirs.
            </p>

            <p className="mt-2">
              We can purify grey water sources separated from domestic
              wastewater using MBR modules and make them suitable for reuse.
            </p>
          </div>
        </div>
      </div>
      {/* <SectionTitle
        title={"Systems for Seawater Desalination"}
        paragraph={""}
      /> */}
      {/* Product Grid */}
      {/* <ProductGrid products={grayWaterTreatment} onProductClick={openModal} /> */}

      {/* Product Modal */}
      {/* <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      /> */}
    </div>
  );
};

export default GrayWaterTreatment;
