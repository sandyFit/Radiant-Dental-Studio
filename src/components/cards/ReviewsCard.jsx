import StarIcon from '@mui/icons-material/Star';

const ReviewsCard = ({name, review}) => {
    return (
        <div className='bg-oceanBlue hover:bg-transparent w-[65rem] h-[30rem] flex flex-col justify-start 
        py-16 px-10 mt-5 rounded-[35px] shadow-xl shadow-spanishBlue space-y-6 cursor-pointer relative'>
            <h4 className='text-midnight text-3xl font-bold'>
                {name}
            </h4>

            <p className='text-azure text-[1.5rem]'>
                {review}
            </p>

            <div className='absolute left-10 bottom-[6rem] space-x-2 mt-auto'>
                <span className='text-gold'>
                {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} style={{ fontSize: '2rem' }} />
                ))}
                </span>
            </div>
        </div>

    )
}

export default ReviewsCard
