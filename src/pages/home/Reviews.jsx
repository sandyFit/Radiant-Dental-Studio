import Carousel from '../../components/cards/Carousel';
import reviewsData from '../../components/data/reviewsData.json'

const Reviews = () => {
  
  return (
    <div className='flex flex-col justify-center items-center bg-spaceCadet h-[65rem]'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-center text-white3 text-5xl font-bold'>
          What
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Our Patients 
          </span>         
          Say About Us
        </h2>     
        
        <p className='text-2xl text-white3 mt-8 w-2/3'>
          Radiant Dental Studio always appreciates feedback from our valued patients.
          To date, we're thrilled to have collected over 100 reviews with an average rating of 5 out of 5 stars.
          Please read what others are saying about Radiant Dental Studio below, and as always, we would love to
          <span className='text-azure border-b-2 border-spanishBlue' style={{ margin: ' 0 .6rem' }}>
            <a href="#">collect your feedback.</a>
          </span>
        </p>
      </div> 
        


      <div className="relative">
        
        {/* <div className="absolute top-20 right-[22rem] w-[28rem] h-[28rem] rounded-full filter blur-2xl 
          opacity-45 bg-gradient-to-r from-oceanBlue to-azure">
        </div> */}
        

        <div className='mt-16 '>
          <Carousel reviews={reviewsData} autoSlide={true} autoSlideInterval={12000} />
        </div>
      </div>

      
      <p className='font-cursive text-azure text-8xl ml-[50rem] mt-12 transform -rotate-12' >
          Thank You!
        </p>
    </div>
     
  )
}

export default Reviews
