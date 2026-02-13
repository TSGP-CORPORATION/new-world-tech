import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProgramsData } from '../../data/programsData'
import './Programs.css'

const Programs = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const programsData = getProgramsData(t)

  // Fallback image if program.image is missing or fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src)
    e.target.src = fallbackImage
  }

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <div className="programs-hero">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop"
          alt="Programs Hero"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{t('programs.pageTitle')}</h1>
          <p>{t('programs.pageSubtitle')}</p>
        </div>
      </div>

      {/* Programs Container */}
      <div className="programs-container">
        {/* Real-World Learning Section */}
        <div className="real-world-section">
          <span className="real-world-label">{t('programs.practicalExcellence')}</span>
          <h2>{t('programs.industryFocused')}</h2>
        </div>

        {/* Programs Grid */}
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
                  src={program.image || fallbackImage}
                  alt={program.name}
                  className="program-image"
                  onError={handleImageError}
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