import Carousel from '../../components/cards/Carousel';
import reviewsData from '../../components/data/reviewsData.json'

const Reviews = () => {
  
  return (
    <div className='flex flex-col justify-center items-center bg-white3 h-[60rem]'>
      <div>
        <h2 className='text-center text-spaceCadet text-5xl font-bold'>
          What
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Our Patients 
          </span>         
          Say About Us
        </h2>      
      </div> 

      <div className='mt-16'>
        <Carousel reviews={reviewsData} autoSlide={true} autoSlideInterval={5000} />
      </div>
    </div>
     
  )
}

export default Reviews
