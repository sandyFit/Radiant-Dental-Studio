import React from 'react'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Team from './Team'
import Contact from './Contact'
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
        {/* <section id='contact'>
          <Contact/>
        </section> */}
      </div>
    )
} 

export default Home