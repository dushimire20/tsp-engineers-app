import React from 'react';
import { Service } from "@/types/service";
import { useNavigate } from 'react-router-dom';

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  const navigate = useNavigate();

  const handleSelectService = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id} onClick={() => handleSelectService(service.id)}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
