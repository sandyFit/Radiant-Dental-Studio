
const ServiceCard = ({ iconSrc, title, description }) => {

    const HandleClick = () => {
        
    }

    return (
        <article className='flex justify-center items-center space-x-4'>
            <div className='flex flex-col justify-center items-start w-[23rem] h-[34rem] bg-spaceCadet 
            hover:bg-midnight p-10 rounded-2xl'>
                <div className='w-32 h-32 rounded-full bg-white3 border-4 border-spanishBlue
                    flex items-center justify-center'>
                    <img src={iconSrc} alt={`${title} icon`} 
                    className='w-20 h-20 mb-2' />
                </div>

                <h4 className='text-sans text-white text-2xl font-semibold mt-6'>
                    {title}
                </h4>

                <hr className='border-2 border-spanishBlue w-36 my-3' />
                
                <p className='text-sans text-white text-large font-medium'>
                    {description}
                </p>

                <button className='transparent-btn p-3 w-72 mt-10'
                    onClick={HandleClick}
                >
                        view more
                    </button>
            </div>
        </article>
  )
}

export default ServiceCard