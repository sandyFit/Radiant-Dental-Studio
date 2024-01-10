import React from 'react'
import TeamCards from '../../components/cards/TeamCards'

const Team = () => {
    return (
      <div className='relative z-1 flex justify-start pl-48 pt-16 bg-spaceCadet bg-opacity-[.60] h-[70rem]'>

        <div className='bg-fairBlue w-[75rem] h-[44rem] rounded-[50px] relative z-10 mt-32'>
          <div className='flex flex-wrap w-[55rem] relative left-24 top-[5.5rem] z-10'>           
            <TeamCards
              imgSrc='/images/doc8.jpeg'
              name='Judy Woods'
              title='Dental Hygienist'
            />
            <TeamCards
              imgSrc='/images/doc7.jpeg'
              name='Joseph Gale'
              title='Dental Hygienist'
            />
            <TeamCards
              imgSrc='/images/doc4.jpeg'
              name='Karim Asouza'
              title='Dental Therapist'
            />
            <TeamCards
              imgSrc='/images/doc1.jpeg'
              name='Nathan Roberts'
              title='Dental Therapist'
            />
            <TeamCards
              imgSrc='/images/doc2.png'
              name='Gabrielle Dawson'
              title='Dental Assistant'
            />
            <TeamCards
              imgSrc='/images/doc5.jpeg'
              name='Daniela Alvarado'
              title='Dental Assistant'
            />
          </div>
          <div className='bg-spaceCadet w-[35rem] h-[42rem] absolute right-[-20rem] bottom-[-5rem] rounded-[38px]
            flex flex-col justify-center items-center px-14 space-y-8 shadow-xl shadow-midnight'
          >
            <h2 className='text-center text-white2 text-5xl font-bold'>
              Our
              <span className='text-azure' style={{ margin: ' 0 1rem' }}>
                Team
              </span>         
            </h2>

            <hr className='border-2 border-spanishBlue w-36 my-3'/>

            <p className='text-white3 text-xl font-medium'>
              We take pride in genuinely caring for each of our patients as individuals. 
              <br/><br/>
              This is reflected in our team's dedication to training and self-development, emphasizing the significance
              of consistently updating our skills.
              <br/><br/>
              As new dental techniques and products continue to emerge, our commitment remains steadfast in ensuring
              that we can offer the best available options.
            </p>
            
            </div>

        </div>

      </div>
    )
}

export default Team