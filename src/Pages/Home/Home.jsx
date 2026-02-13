import React from 'react'
import { useTranslation } from 'react-i18next'
import './Home.css'
import Hero_Section from '../../Components/Hero_Section/Hero_SEction'
import Features_Section from '../../Components/Features_Section/Features_Section'
import { getProgramsData } from '../../data/programsData'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const programsData = getProgramsData(t)

  return (
    <div className="home-page">
      <Hero_Section />
      <Features_Section />

      <div className="programs-secti">
        <span>{t('home.tagline')}</span>

        <div className="progs">
          <p>{t('home.ourPrograms')}</p>
        </div>

        <div className="programs-grid">
          {programsData.slice(0,3).map((program) => (
            <div key={program.id} className="home-program-card">
              <div
                className="home-program-card-image"
                style={{ backgroundImage: `url(${program.image})` }}
              />
              <div className="home-program-card-header">{program.name}</div>
              <div className="home-program-card-courses">
                <ul>
                  {program.specialties.map((specialty, index) => (
                    <li key={index}>{specialty.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/programs')} className="view-all-btn">{t('home.viewAllPrograms')}</button>
      </div>
    </div>
  )
}

export default Home