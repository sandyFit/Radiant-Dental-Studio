import React from 'react'
import Hero from './Hero'
import Services from './Services'
import About from './About'
// import TeamMobile from '../../components/ui/TeamMobile'
import Faq from './Faq'
import Reviews from './Reviews'
import Team from './Team'


const Home = () => {
    return (
      <div>
        <section>        
            <Hero />
        </section>
        <section id="about">
          <About/>
        </section>
        <section id='services'>
            <Services/>
        </section>
        <section id='team'>
          <Team/>
        </section>
        <section id='reviews'>
          <Reviews/>
        </section>
        <section id='faq'>
          <Faq/>
        </section>
      </div>
    )
} 

export default Home