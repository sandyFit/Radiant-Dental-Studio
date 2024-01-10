
import ReviewsCard from '../../components/cards/ReviewsCard';

const Reviews = () => {
  return (
    <div className='flex justify-center pt-36 bg-white3 h-[66rem]'>
      <div>
        <h2 className='text-center text-spaceCadet text-5xl font-bold mb-12'>
          What
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Our Patients 
          </span>         
          Say About Us
        </h2>
        
        <div className='flex justify-center items-center space-x-10'>
          <ReviewsCard
            name='Christine Moore'
            review="After my appointment with Nathan, assisted by Gabrielle, last week, I felt comfortable and 
            safe throughout the entire process. Their thorough explanations and Dr. Nathan's expertise made my 
            treatment reassuring. Thank you and your colleagues for the excellent care!"
          />
          
          <ReviewsCard
            name='Gary Cole'
            review="Highly recommend Radiant Dental Studio, especially Dr. Karim. His attentive, painless care 
            and cons ideration for individual needs, especially for anxious patients like me, are unparalleled. 
            The entire team is exceptional!"
          />
          
          
        </div>

      </div>  

    </div>
     
  )
}

export default Reviews
