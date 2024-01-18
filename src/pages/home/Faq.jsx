import QuestionCard from '../../components/cards/QuestionCard'
import questions from '../../components/data/questions.json'

const Faq = () => {
  return (
    <div className='relative z-1 flex flex-col justify-center items-center bg-white3 h-[70rem]'>
      <div>
        <h2 className='text-center text-spaceCadet text-5xl font-bold mt-30 mb-12'>
          Have Questions?
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            We Have Answers 
          </span>         
        </h2>      
      </div> 

      <div className="flex flex-col justify-center items-center space-y-6">
        {questions.map((question, index) => (
          <QuestionCard key={index} question={question.question}  />
        ))}
      </div>
    </div>
  );
}

export default Faq;

