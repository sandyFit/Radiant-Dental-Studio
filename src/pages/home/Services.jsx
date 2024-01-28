import React, { useState } from 'react';
import ServiceCard from '../../components/cards/ServiceCard';
import serviceData from '../../components/data/services.json';
import serviceCardData from '../../components/data/servicesCardData.json';
import ModalCarousel from '../../components/cards/ModalCarousel';
import MobileServiceCard from '../../components/cards/MobileServiceCard';

const Services = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };


  return (
    <div className='bg-white flex flex-col justify-center items-center min-h-screen space-y-12 relative'>
      <div className='flex flex-col justify-center items-center space-y-8'>
        <h2 className='text-center text-spaceCadet text-3xl md:text-5xl font-bold w-2/3 
          lg:w-2/4 xl:w-2/4 2xl:w-3/5 pt-20 lg:pt-4'>
          Discover Our Exceptional  
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Dental Services
          </span>         
        </h2>

        <p className='text-lightBlue text-lg md:text-xl xl:text-2xl font-semibold w-3/4 lg:w-2/4 xl:w-2/4 2xl:w-3/5'>
          We provide a wide range of treatments, including cosmetic dentistry. Our commitment is rooted in
          assisting patients in preserving lifelong healthy teeth. Trust us for diverse services aimed at
          enhancing both the aesthetics and longevity of your smile.
        </p>
      </div>

      {/* Cards Desktop */}

      <div className='hidden xl:flex justify-center items-center space-x-4'>
        {serviceCardData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        iconSrc={service.iconSrc}
                        title={service.title}
                        description={service.description}
                        onClick={() => openModal(serviceData[index])}
                    />
                ))}
      </div>

      {/* Cards Mobile */}
      <div className='lg:hidden flex flex-col justify-center items-center w-3/4 gap-4 pb-12'>
        {serviceCardData.map((service, index) => (
                    <MobileServiceCard
                        key={index}
                        iconSrc={service.iconSrc}
                        title={service.title}
                        onClick={() => openModal(serviceData[index])}
                    />
                ))}
      </div>

      <div className="absolute top-2 left-[32.5rem]">
        {isModalOpen && (
          <ModalCarousel
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          services={[selectedService]} // Wrap selectedService in an array or provide an array of services
        />
        )}
      </div>

      <div className="absolute">
        {isModalOpen && (
          <ModalCarousel
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            services={[selectedService]}
          />
        )}
      </div>


      
    </div>
  )
}

export default Services
