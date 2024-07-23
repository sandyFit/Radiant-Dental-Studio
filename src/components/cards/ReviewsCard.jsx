
import Stars from '../ui/Stars';

const ReviewsCard = ({name, srcImg, review}) => {
    return (
        <article className='bg-spaceCadet w-[66rem] h-auto border-8 border-spanishBlue flex flex-col justify-start 
         p-16 mt-5 space-y-4 cursor-pointer relative'>

            <Stars/>

            <div className="flex justify-start items-center space-x-4">
                <div >
                    <img src={srcImg}
                        alt={`${name} avatar`}
                        className='border-4 border-spanishBlue rounded-full'
                    />
                </div>

                <h4 className='text-spanishBlue text-4xl font-bold '>
                    {name}
                </h4>
                
            </div>


            <p className='text-spanishBlue text-[1.35rem] pb-6'>
                {review}
            </p>       
        </article>
    )
}

export default ReviewsCard
