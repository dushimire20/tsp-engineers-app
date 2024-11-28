import React from 'react';
import { useParams } from 'react-router-dom';
import { Service } from "@/types/service";

interface ProductDetailsProps {
  services: Service[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ services }) => {
  const { serviceId, subServiceId, productId } = useParams<{
    serviceId: string;
    subServiceId: string;
    productId: string;
  }>();

  const selectedService = services.find((service) => service.id === serviceId);
  const selectedSubService = selectedService?.subServices.find(
    (subService) => subService.id === Number(subServiceId)
  );
  const selectedProduct = selectedSubService?.products.find(
    (product) => product.id === Number(productId)
  );

  if (!selectedProduct) return <h2>Product not found</h2>;

  return (
    <div>
      <h1>{selectedProduct.name}</h1>
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
      <img src={selectedProduct.image} alt={selectedProduct.name} />
    </div>
  );
};

export default ProductDetails;
