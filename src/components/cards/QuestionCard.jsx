import { Add } from '@mui/icons-material';

const QuestionCard = ({question, answer}) => {
    return (
        <article className='flex justify-between items-center w-[60rem] 
            rounded-lg px-12 py-8 shadow-lg shadow-lightBlue'>
            <h4 className="text-spaceCadet text-2xl font-semibold">
                {question}
            </h4>

            <button>                
                <Add style={{fontSize: '2rem'}}/>
            </button>
        </article>
    )
}

export default QuestionCard;

