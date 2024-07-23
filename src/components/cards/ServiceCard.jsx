
const ServiceCard = ({ index, iconSrc, title, description, onClick }) => {
    const isEven = index % 2 === 0;

    return (
        <article className='flex justify-center items-center space-x-4'>
            <div className={`flex flex-col justify-center items-start w-[23rem] h-[34rem] hover:bg-spaceCadet 
            p-10 rounded-2xl gradient-border`}>
                <div className='w-32 h-32 rounded-full bg-white3 border-4 border-blue-400
                    flex items-center justify-center'>
                    <img src={iconSrc} alt={`${title} icon`} 
                    className='w-20 h-20 mb-2' />
                </div>

                <h4 className='text-sans text-white text-2xl font-semibold mt-6'>
                    {title}
                </h4>

                <hr className='border-2 border-blue-600 w-36 my-3' />
                
                <p className='text-sans text-white text-[1.08rem] font-medium'>
                    {description}
                </p>

                <button className='btn-filled p-3 w-72 mt-10'
                    onClick={onClick}
                >
                        view more
                </button>
            </div>
        </article>
  )
}

export default ServiceCard;

