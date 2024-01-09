
const TeamCards = ({imgSrc, name, title}) => {
    return (
        <div className='w-64 h-64 bg-transparent hover:bg-oceanBlue border-2 border-azure flex flex-col
            justify-center items-center mx-1 my-1'>
            <img src={imgSrc} alt={`${name} avatar`}   
              className='w-40 rounded-full border-2 border-azure'
            />
            <h5 className='text-midnight font-bold text-xl'>
              {name}
            </h5>
            <p className='text-azure font-medium text-lg'>
              {title}
            </p>
        </div>
    )
}

export default TeamCards