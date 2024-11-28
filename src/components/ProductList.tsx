import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Service } from "@/types/service";

interface ProductListProps {
  services: Service[];
}

const ProductList: React.FC<ProductListProps> = ({ services }) => {
  const { serviceId, subServiceId } = useParams<{
    serviceId: string;
    subServiceId: string;
  }>();
  const navigate = useNavigate();

  const selectedService = services.find((service) => service.id === serviceId);
  const selectedSubService = selectedService?.subServices.find(
    (subService) => subService.id === Number(subServiceId)
  );

  if (!selectedSubService) return <h2>Sub-Service not found</h2>;

  const handleSelectProduct = (productId: number) => {
    navigate(`/services/${serviceId}/${subServiceId}/${productId}`);
  };

  return (
    <div>
      <h1>{selectedSubService.name} - Products</h1>
      <ul>
        {selectedSubService.products.map((product) => (
          <li key={product.id} onClick={() => handleSelectProduct(product.id)}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
