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
                        {...services[currentIndex]} 
                        onClose={onClose} // Pass the onClose prop to Modal
                    />
                </div>
            )}

        </article>
    )
}

export default ModalCarousel;
