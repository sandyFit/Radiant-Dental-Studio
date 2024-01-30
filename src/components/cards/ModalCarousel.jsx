import React, { useState } from 'react'
import Modal from '../ui/Modal';

const ModalCarousel = ({ isOpen, services, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <article>
            {isOpen && (
                <div className="flex justify-center items-center">
                    <Modal 
                        isOpen={isOpen}
                        service={services[currentIndex]} 
                        onClose={onClose} 
                    />
                </div>
            )}
        </article>
    );
};

export default ModalCarousel;
