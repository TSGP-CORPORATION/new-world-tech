import React from 'react'
import './Home.css'
import Hero_Section from '../../Components/Hero_Section/Hero_SEction'
import Features_Section from '../../Components/Features_Section/Features_Section'
import { programsData } from '../../data/programsData'

const Home = () => {
  return (
    <div className="home-page">
      <Hero_Section />
      <Features_Section />
      
      <div className="programs-secti">
        <span>Empowering the next gen in Engineering! 💡 Hands-on training for high-paying careers in tech, electrical & solar. Join us!</span>

        <div className="progs">
          <p>Our Programs</p>
        </div>

        <div className="programs-grid">
          {programsData.slice(0,3).map((program) => (
            <div key={program.id} className="program-card">
              <div 
                className="program-card-image"
                style={{ backgroundImage: `url(${program.image})` }}
              />
              <div className="program-card-header">{program.category}</div>
              <div className="program-card-courses">
                <ul>
                  {program.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all-btn">View All Programs</button>
      </div>
    </div>
  )
}

export default Home