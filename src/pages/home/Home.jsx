import React from 'react'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Team from './Team'
import Faq from './Faq'
import Reviews from './Reviews'


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