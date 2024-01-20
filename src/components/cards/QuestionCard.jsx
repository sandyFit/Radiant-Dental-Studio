import { Add, Remove } from '@mui/icons-material';
import React, { useState } from 'react';

const QuestionCard = ({ question, answer, isOpen, onToggle }) => {
    
    // const [accordionOpen, setAccordionOpen] = useState(false);

    // const toggleAccordion = () => {
    //     setAccordionOpen(!accordionOpen);
    // };

    return (
        <article className={`flex flex-col w-[60rem] gap-2 rounded-lg shadow-lg shadow-lightBlue 
            ${ isOpen ? 'active' : '' }`}>
            <div className="flex justify-between items-center px-12 py-8"
                onClick={onToggle}>
                
                <h4 className="text-spaceCadet text-2xl font-semibold">
                    {question}
                </h4>

                <button className={`item ${ isOpen ? 'activeIcon' : 'inactiveIcon' }`}>
                    {isOpen ? <Remove style={{ fontSize: '2rem' }} /> : <Add style={{ fontSize: '2rem' }} />}                   
                </button>
            </div>

            { isOpen && (
                <div className="text-spaceCadet text-xl content">
                    <p className='px-12 pb-12'>
                        {answer && answer.map((paragraph, index) => (
                            <React.Fragment key={index}>
                                {index !== 0 && <br />} {/* Add line break except before the first paragraph */}
                                {index !== 0 && <br />}
                                {paragraph}
                            </React.Fragment>
                            ))}
                    </p>
                </div>
            )}
        </article>
    )
}

export default QuestionCard;

