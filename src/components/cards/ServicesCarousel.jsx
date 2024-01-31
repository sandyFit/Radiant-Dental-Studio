import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';

const Carousel = ({ services, onClick, autoSlide, autoSlideInterval }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const getVisibleCards = () => {
        const width = window.innerWidth;
        if (width < 640) return 1;
        if (width <= 1280) return 2;
        return 3;
    };

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());

    useEffect(() => {
        const handleResize = () => {
            const newVisibleCards = getVisibleCards();
            setVisibleCards(newVisibleCards);

            if (activeIndex > services.length - newVisibleCards) {
                setActiveIndex(Math.max(0, services.length - newVisibleCards));
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex, services.length]);

    const goNext = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex + visibleCards >= services.length) {
                return 0; // Go back to the start
            } else {
                return (prevIndex + 1) % services.length;
            }
        });
    };

    const goPrev = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === 0) {
                return services.length - visibleCards; // Go to the last set of items
            } else {
                return Math.max(0, prevIndex - 1);
            }
        });
    };

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(() => {
            goNext();
        }, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, goNext]);

    const renderCards = () => {
        let cards = [];
        for (let i = 0; i < visibleCards; i++) {
            const serviceIndex = (activeIndex + i) % services.length;
            const service = services[serviceIndex];
            cards.push(
                <ServiceCard key={serviceIndex} {...service} onClick={() => onClick(service)} />
            );
        }
        return cards;
    };

    return (
        <div className='flex justify-center items-center space-x-8'>
            <button className='p-3 ml-4 text-azure' onClick={goPrev}>
                <ChevronLeftRounded style={{ fontSize: '6rem' }} />
            </button>
            <div className='relative overflow-x-hidden w-auto'>
                <div className='flex gap-6'>
                    {renderCards()}
                </div>
            </div>
            <button className='p-3 mr-4 text-azure' onClick={goNext}>
                <ChevronRightRounded style={{ fontSize: '6rem' }} />
            </button>
        </div>
    );
};

export default Carousel;
