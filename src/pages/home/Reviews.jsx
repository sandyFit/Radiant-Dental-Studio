import Carousel from '../../components/cards/Carousel';
import reviewsData from '../../components/data/reviewsData.json'

const Reviews = () => {
  
  return (
    <div className='flex flex-col justify-center items-center bg-spaceCadet h-[60rem]'>
      <div>
        <h2 className='text-center text-white3 text-5xl font-bold'>
          What
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Our Patients 
          </span>         
          Say About Us
        </h2>      
      </div> 

      <div className="relative">
        
        {/* <div className="absolute top-20 right-[22rem] w-[28rem] h-[28rem] rounded-full filter blur-2xl 
          opacity-45 bg-gradient-to-r from-oceanBlue to-azure">
        </div> */}
        

        <div className='mt-16 '>
          <Carousel reviews={reviewsData} autoSlide={true} autoSlideInterval={12000} />
        </div>
      </div>

    </div>
     
  )
}

export default Reviews
