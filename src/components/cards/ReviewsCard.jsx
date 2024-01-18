import StarIcon from '@mui/icons-material/Star';

const ReviewsCard = ({name, srcImg, review}) => {
    return (
        <div className='bg-spaceCadet w-[78rem] h-auto border-8 border-spanishBlue flex flex-col justify-start 
         p-16 mt-5 space-y-4 cursor-pointer relative'>

            <div className='space-x-2'>
                    <span className='bg-spaceCadet px-4 text-spanishBlue font-bold absolute top-[-1.5rem]
                        left-8'>
                    {[...Array(5)].map((_, index) => (
                        <StarIcon key={index} style={{ fontSize: '2.8rem' }} />
                    ))}
                    </span>
                </div>

            

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


            
        </div>

    )
}

export default ReviewsCard
