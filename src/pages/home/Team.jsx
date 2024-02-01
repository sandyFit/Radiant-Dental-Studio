import TeamCard from '../../components/cards/TeamCard';
import TeamBigCard from '../../components/cards/TeamBigCard';
import teamData from '../../components/data/teamData.json';
import { useState } from 'react';
import TeamMobileCard from '../../components/cards/TeamMobileCard';

const Team = () => {
  // Extract the team leader's data (assuming it's the first element in teamData)
  const [selectedTeamMember, setSelectedTeamMember] = useState(teamData[0]);

  const handleClick = (id) => {
    // Find the selected team member by id (you might want to adjust this based on your actual data structure)
    const selectedMember = teamData.find(member => member.id === id);
    setSelectedTeamMember(selectedMember);
  }

  return (
    <div className='relative flex flex-col justify-center items-center bg-spaceCadet bg-opacity-[.60] h-[80rem]'>
      <div className=" flex flex-col justify-center items-center">
        <div >
          <h2 className='text-white3 text-3xl md:text-5xl xl:text-5xl font-bold w-2/3 lg:w-2/4 xl:w-full'>
            Quality
            <span className='text-azure' style={{ margin: ' 0 1rem' }}>
              Dental Care
            </span>         
            at Your Fingerprints
          </h2>      
        </div> 

        <div className='bg-fairBlue w-0 lg:w-[75rem] h-[44rem] rounded-[50px] relative z-1 mt-12 mr-[18rem]'>
          <div className='flex flex-wrap w-[16rem] lg:w-[55rem] lg:relative lg:left-24 top-[5.5rem] z-10'>
            <TeamMobileCard
              imgSrc='/images/doc1.jpeg'
              name='Nathan Roberts'
              title='Dental Therapist'
              onClick={() => handleClick(2)}
            />
            <TeamMobileCard
              imgSrc='/images/doc7.jpeg'
              name='Joseph Gale'
              title='Dental Hygienist'
              onClick={() => handleClick(3)}
            />
            <TeamMobileCard
              imgSrc='/images/doc2.png'
              name='Gabrielle Dawson'
              title='Dental Assistant'
              onClick={() => handleClick(4)}
            />
            <TeamMobileCard
              imgSrc='/images/doc4.jpeg'
              name='Karim Asouza'
              title='Dental Therapist'
              onClick={() => handleClick(5)}
            />
            <TeamMobileCard
              imgSrc='/images/doc8.jpeg'
              name='Judy Woods'
              title='Dental Hygienist'
              onClick={() => handleClick(6)}
            />
            <TeamMobileCard
              imgSrc='/images/doc5.jpeg'
              name='Daniela Alvarado'
              title='Dental Assistant'
              onClick={() => handleClick(7)}
            />
          </div>

          <div className="hidden">
            <TeamBigCard {...selectedTeamMember} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
