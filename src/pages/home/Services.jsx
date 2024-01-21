import React, { useState } from 'react';
import ServiceCard from '../../components/cards/ServiceCard';
import ServicesModal from '../../components/ui/ServicesModal';
import serviceData from '../../components/data/services.json';


const Services = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className='bg-white flex flex-col justify-center items-center min-h-screen space-y-12 relative'>
      <div className='flex flex-col w-4/5 justify-center space-y-8'>
        <h2 className='text-center text-spaceCadet text-5xl font-bold'>
          Discover Our Exceptional  
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Dental Services
          </span>         
        </h2>

        <p className='text-lightBlue text-2xl font-semibold'>
          We provide a wide range of treatments, including cosmetic dentistry. Our commitment is rooted in
          assisting patients in preserving lifelong healthy teeth. Trust us for diverse services aimed at
          enhancing both the aesthetics and longevity of your smile.
        </p>
      </div>

      <div className='flex justify-center items-center space-x-4'>
        <ServiceCard
          iconSrc="/icons/broken-tooth.png"
          title="General Dentistry"
          description="Ensure lifelong dental health with treatments for function, aesthetics, and prevention."
          onClick={() => openModal(serviceData[0])}
        />
        <ServiceCard
          iconSrc="/icons/teeth.png"
          title="Hygiene and Therapy"
          description="Our preventive treatments safeguard against disease, promoting a consistently radiant smile."
          onClick={() => openModal(serviceData[1])}

        />
        <ServiceCard
          iconSrc="/icons/braces.png"
          title="Orthodontics"
          description="Enhance your smile with premium treatments for beautifully aligned teeth."
          onClick={() => openModal(serviceData[2])}

        />
        <ServiceCard
          iconSrc="/icons/dental-implant.png"
          title="Cosmetic Dentistry"
          description=" Tailored treatments for a beautiful, confident grin you'll proudly showcase every day."
          onClick={() => openModal(serviceData[3])}

        />
      </div>

      <div className="absolute -top-8 left-[16.5rem]">
        <ServicesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={selectedService}
        />
      </div>
    </div>
  )
}

export default Services
