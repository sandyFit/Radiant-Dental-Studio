import React from 'react';
import ServicesModalCard from '../cards/ServicesModalCard';

const ServicesModal = ({ title, description, services }) => {
  return (
    <div className='bg-white3 w-[35rem] h-[42rem] absolute'>
      <div className='flex flex-col justify-center items-center px-8 py-12'>
        <h1>{title}</h1>
        <p>{description}</p>

        {/* Check if services is an array before mapping */}
        {Array.isArray(services) &&
          services.map((category, index) => (
            <div key={index}>
              <h2>{category.title}</h2>
              {Array.isArray(category.service) &&
                category.service.map((service, serviceIndex) => (
                  <ServicesModalCard key={serviceIndex} service={service} />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesModal;
