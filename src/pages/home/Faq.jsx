import { useState } from 'react';
import QuestionCard from '../../components/cards/QuestionCard'
import questions from '../../components/data/questions.json'

const Faq = () => {

  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  }

  return (
    <section className='relative z-1 flex flex-col justify-center items-center bg-white3 h-auto'>
      <div>
        <h2 className='text-center text-spaceCadet text-5xl font-bold mt-12 mb-24 relative'>
          Have Questions?
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            We Have Answers 
          </span>         
        </h2>      
      </div> 

      <div className="flex flex-col justify-center items-center space-y-6">
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question.question}
            answer={question.answer}
            isOpen={index === openQuestionIndex}
            onToggle={() => handleToggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Faq;

