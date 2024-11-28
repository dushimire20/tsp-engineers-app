import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Service } from "@/types/service";

interface SubServiceListProps {
  services: Service[];
}

const SubServiceList: React.FC<SubServiceListProps> = ({ services }) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const selectedService = services.find((service) => service.id === serviceId);

  if (!selectedService) return <h2>Service not found</h2>;

  const handleSelectSubService = (subServiceId: number) => {
    navigate(`/services/${serviceId}/${subServiceId}`);
  };

  return (
    <div>
      <h1>{selectedService.name} - Sub-Services</h1>
      <ul>
        {selectedService.subServices.map((subService) => (
          <li
            key={subService.id}
            onClick={() => handleSelectSubService(subService.id)}
          >
            <h3>{subService.name}</h3>
            <p>{subService.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubServiceList;
