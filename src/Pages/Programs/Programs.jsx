import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProgramsData } from '../../data/programsData'
import progImg from '/programs.jpeg'
import './Programs.css'

const Programs = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const programsData = getProgramsData(t)


  return (
    <div className="programs-page">
      <div
        className="programs-hero"
        style={{ backgroundImage: `url(${progImg})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{t('programs.pageTitle')}</h1>
            <p>{t('programs.pageSubtitle')}</p>
          </div>
        </div>
      </div>

      <div className="programs-container">
        <div className="real-world-section">
          <span className="real-world-label">{t('programs.practicalExcellence')}</span>
          <h2>{t('programs.industryFocused')}</h2>
        </div>
        <div className="programs-grid">
          {programsData.map((program) => (
            <div
              key={program.id}
              className="program-card"
              onClick={() => navigate(`/program/${program.id}`)}
              data-hover-text={t('programs.seeDetails')}
            >
              <div className="program-image-container">
                <img
                  src={program.image}
                  alt={program.name}
                  className="program-image"
                  loading="lazy"
                />
              </div>
              <div className="program-card-content">
                <h3 className="program-title">{program.name}</h3>
                <div className="program-info">
                  <span className="program-specialties">
                    {program.specialties.length} {program.specialties.length === 1 ? t('programs.specialty') : t('programs.specialties')}
                  </span>
                  <span className="program-format">{t('programs.onCampus')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Programs