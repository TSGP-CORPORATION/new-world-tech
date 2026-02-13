import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProgramsData } from '../../data/programsData'
import './ProgramDetail.css'

const ProgramDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const programsData = getProgramsData(t)
  const program = programsData.find(p => p.id === parseInt(id))

  // SVG Icons
  const CurriculumIcon = () => (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="40" height="44" rx="2" stroke="#1a5f3a" strokeWidth="2"/>
      <path d="M14 16H46M14 24H46M14 32H46M14 40H46" stroke="#1a5f3a" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="30" cy="50" r="2" fill="#1a5f3a"/>
    </svg>
  );

  const InstructorsIcon = () => (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="18" r="6" stroke="#1a5f3a" strokeWidth="2"/>
      <path d="M14 28C14 24 18 21 22 21C26 21 30 24 30 28V32H14V28Z" stroke="#1a5f3a" strokeWidth="2"/>
      <circle cx="38" cy="18" r="6" stroke="#1a5f3a" strokeWidth="2"/>
      <path d="M30 28C30 24 34 21 38 21C42 21 46 24 46 28V32H30V28Z" stroke="#1a5f3a" strokeWidth="2"/>
      <path d="M22 33V42C22 45 20 48 16 50M38 33V42C38 45 40 48 44 50" stroke="#1a5f3a" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const CareerIcon = () => (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20H48C49.1 20 50 20.9 50 22V46C50 47.1 49.1 48 48 48H12C10.9 48 10 47.1 10 46V22C10 20.9 10.9 20 12 20Z" stroke="#1a5f3a" strokeWidth="2"/>
      <path d="M20 20V16C20 14.9 20.9 14 22 14H38C39.1 14 40 14.9 40 16V20" stroke="#1a5f3a" strokeWidth="2"/>
      <path d="M20 30C20 27.8 21.8 26 24 26H36C38.2 26 40 27.8 40 30V34H20V30Z" stroke="#1a5f3a" strokeWidth="2"/>
      <path d="M24 42V34M36 42V34" stroke="#1a5f3a" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  if (!program) {
    return (
      <div className="program-detail-not-found">
        <h2>{t('programDetail.notFound')}</h2>
        <button onClick={() => navigate('/')}>{t('programDetail.goHome')}</button>
      </div>
    )
  }

  return (
    <div className="program-detail">
      {/* Hero Section */}
      <div 
        className="program-detail-hero"
        style={{ backgroundImage: `url(${program.image})` }}
      >
        
        <div className="hero-overlay">
          <div className="hero-content">
            
            <h1 className="hero-title">{program.name}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="program-detail-container">
        {/* Sidebar */}
        <aside className="program-detail-sidebar">
          <div className="sidebar-section">
            <h4 className="sidebar-title">{t('programDetail.programDetails')}</h4>
            <div className="sidebar-item">
              <span className="sidebar-label">{t('programDetail.duration')}</span>
              <span className="sidebar-value">{program.duration}</span>
            </div>
            <div className="sidebar-item">
              <span className="sidebar-label">{t('programDetail.entryRequirements')}</span>
              <span className="sidebar-value">{program.entryConditions}</span>
            </div>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-title">{t('programDetail.specialtiesCourses')}</h4>
            <ul className="specialties-list">
              {program.specialties.map((specialty, index) => (
                <li key={index}>
                  <span className="specialty-icon">✓</span>
                  {specialty.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-cta">
            <button className="enroll-btn">{t('programDetail.enrollNow')}</button>
            <button className="info-btn">{t('programDetail.requestInfo')}</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="program-detail-main">
          <section className="program-description-section">
            <h2>{t('programDetail.whyChoose')}</h2>
            <p>{t('programDetail.whyChooseDesc')}</p>
            <p className="additional-info">{program.description}</p>
          </section>

          <section className="program-overview-section">
            <h2>{t('programDetail.overview')}</h2>
            <div className="overview-grid">
              <div className="overview-item">
                <div className="overview-icon">
                  <CurriculumIcon />
                </div>
                <h3>{t('programDetail.curriculum')}</h3>
                <p>{t('programDetail.curriculumDesc')}</p>
              </div>
              <div className="overview-item">
                <div className="overview-icon">
                  <InstructorsIcon />
                </div>
                <h3>{t('programDetail.instructors')}</h3>
                <p>{t('programDetail.instructorsDesc')}</p>
              </div>
              <div className="overview-item">
                <div className="overview-icon">
                  <CareerIcon />
                </div>
                <h3>{t('programDetail.career')}</h3>
                <p>{t('programDetail.careerDesc')}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default ProgramDetail
