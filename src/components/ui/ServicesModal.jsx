import React from 'react';
import { Close } from '@mui/icons-material';
import ServicesModalCard from '../cards/ServicesModalCard';

const ServicesModal = ({ isOpen, onClose, service }) => {
  const handleClose = () => {
    // Call the onClose function to close the modal
    onClose();
  };

  return (
    <article className={`bg-white3 flex justify-center items-center w-[85rem] h-[52rem] mt-12 rounded-xl
        relative text-white2 ${isOpen ? 'absolute' : 'hidden'}`}>
      <button className="absolute left-[82.5rem] bottom-[50rem] text-spaceCadet cursor-pointer"
        onClick={handleClose}>
        <Close />
      </button>
      <div className='flex flex-col justify-center items-center px-8 py-12 bg-spaceCadet  w-[79.5rem] h-[49rem] 
        rounded-xl'>
        {/* Check if service is defined before accessing its properties */}
        {service && (
          <>
            <h1 className='text-spanishBlue text-4xl font-bold mb-4'>
              {service.title}
            </h1>
            <p className='text-xl font-semibold'>
              {service.description}
            </p>

            <div className="flex flex-wrap w-[90%]">
              {/* Check if service.categories is an array before mapping */}
              {Array.isArray(service.categories) &&
                service.categories.map((category, index) => (
                  <div key={index}
                    className='my-6'
                  >
                    
                    {Array.isArray(category.description) ? (
                      <div className=''>
                        {category.description.map((desc, descIndex) => (
                          <ServicesModalCard key={descIndex} service={{ name: category.name, description: desc }} />
                        ))}
                      </div>
                    ) : (
                      <ServicesModalCard key={index} service={category} />                   
                    )}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default ServicesModal;
