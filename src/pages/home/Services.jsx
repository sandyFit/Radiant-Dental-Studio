import React, { useState } from 'react';
import serviceCardData from '../../components/data/servicesCardData.json';
import ServicesCarousel from '../../components/cards/ServicesCarousel';
import servicesData from '../../components/data/services.json'
import Modal from '../../components/ui/ServicesModalCarousel';

const Services = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
        console.log('Opening modal with service:', service); 
        if (service) {
            // Find the full service data, including categories
            const fullServiceData = servicesData.find(s => s.title === service.title);
            if (fullServiceData) {
                setSelectedService(fullServiceData);
            } else {
                // Fallback if service is not found in services.json
                setSelectedService(service);
            }
            setIsModalOpen(true);
        };
    };


  return (
    <div className='bg-white flex flex-col justify-center items-center min-h-screen space-y-12 relative pt-0 xl:pt-20 pb-24'>
      <div className='flex flex-col justify-center items-center space-y-8'>
        <h2 className='text-center text-spaceCadet text-3xl md:text-5xl font-bold w-2/3 
          lg:w-2/4 xl:w-2/4 2xl:w-3/5 pt-20 lg:pt-4'>
          Discover Our Exceptional  
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Dental Services
          </span>         
        </h2>

        <p className='text-lightBlue text-lg md:text-xl xl:text-2xl font-semibold w-3/4 md:w-2/4 2xl:w-3/5'>
          We provide a wide range of treatments, including cosmetic dentistry. Our commitment is rooted in
          assisting patients in preserving lifelong healthy teeth. Trust us for diverse services aimed at
          enhancing both the aesthetics and longevity of your smile.
        </p>
      </div>


      {/* Cards Render Dynamically acording to Responsive Size */}
      <div className="flex justify-center items-center space-x-4">
        <ServicesCarousel
          services={serviceCardData}
          onClick={openModal}
          autoSlide={true}
          autoSlideInterval={6000}
        />

      </div>


      <div className="absolute top-2 md:top-32 lg:top-24 left-0 md:left-[8.3rem] xl:left-[18rem] 2xl:left-[32.5rem] pb-20">
        {/* Modal rendering condition */}
        {isModalOpen && selectedService && (
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                service={selectedService}
            />
        )}
      </div>
    </div>
  )
}

export default Services;
