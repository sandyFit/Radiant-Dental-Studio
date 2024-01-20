import React from 'react';

const ServicesModalCard = ({ service }) => {
  return (
    <div className='border-2 border-spaceCadet w-[20rem] h-[12rem] p-4'>
      <div className='flex items-center'>
        <img src={service.icon} alt={`${service.name} icon`} className='mr-2' />
        <h4>{service.name}</h4>
      </div>
          <p>{Array.isArray(service['service-description']) ?
              service['service-description'].join(' ') :
              service['service-description']}
          </p>
    </div>
  );
};

export default ServicesModalCard;