import React from 'react';

const ServicesModalCard = ({ service }) => {
  return (
    <div className='w-[33rem] h-auto px-4'>
      <div className='flex items-center'>
        {/* <img src={service.icon} alt={`${service.name} icon`} className='mr-2' /> */}
        <h4 className='text-spanishBlue text-3xl font-semibold text-center'>{service.name}</h4>
      </div>

      <div className="flex mt-4">
        {Array.isArray(service.description) ? (
          <ul>
            {service.description.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ul>
        ) : (
          <p className='text-lg font-medium'>{service.description}</p>
        )}
      </div>
    </div>
  );
};

export default ServicesModalCard;

