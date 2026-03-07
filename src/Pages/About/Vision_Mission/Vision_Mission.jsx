import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Vision_Mission.css'

/* ── SVG Icons ── */
const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const LightbulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18"/>
    <line x1="10" y1="22" x2="14" y2="22"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
  </svg>
)
const TrendingUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
)
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
)

const VALUE_ICONS = [<LightbulbIcon />, <ShieldIcon />, <UsersIcon />, <TrendingUpIcon />, <AwardIcon />, <HeartIcon />]

const Vision_Mission = () => {
  const { t } = useTranslation()
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleSections((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.12 }
    )
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const coreValues = t('missionVision.coreValues', { returnObjects: true }) || []
  const objectives = t('missionVision.objectives',  { returnObjects: true }) || []

  return (
    <div className="mv-page">

      {/* ── HERO ── */}
      <div className="mv-hero">
        <img
          src="/class.jpeg"
          alt="Mission & Vision"
          className="mv-hero-image"
        />
        <div className="mv-hero-overlay" />
        <div className="mv-hero-content">
          <span className="mv-hero-label">{t('missionVision.heroLabel')}</span>
          <h1>{t('missionVision.heroTitle')}</h1>
          <p>{t('missionVision.heroSubtitle')}</p>
        </div>
      </div>

      {/* ── MISSION + VISION CARDS ── */}
      <section className="mv-intro-section">
        <div className="mv-intro-inner">
          <div
            className={`mv-card mv-card--mission ${visibleSections.has(0) ? 'mv-card--visible' : ''}`}
            ref={el => sectionRefs.current[0] = el}
            data-index="0"
          >
            <div className="mv-card-icon mv-card-icon--mission"><TargetIcon /></div>
            <div className="mv-card-body">
              <span className="mv-card-tag mv-card-tag--mission">{t('missionVision.missionTag')}</span>
              <h2>{t('missionVision.missionTitle')}</h2>
              <p>{t('missionVision.missionText')}</p>
            </div>
          </div>

          <div
            className={`mv-card mv-card--vision ${visibleSections.has(1) ? 'mv-card--visible' : ''}`}
            ref={el => sectionRefs.current[1] = el}
            data-index="1"
          >
            <div className="mv-card-icon mv-card-icon--vision"><EyeIcon /></div>
            <div className="mv-card-body">
              <span className="mv-card-tag mv-card-tag--vision">{t('missionVision.visionTag')}</span>
              <h2>{t('missionVision.visionTitle')}</h2>
              <p>{t('missionVision.visionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="mv-values-section">
        <div className="mv-section-inner">
          <div className="mv-section-header">
            <span className="mv-section-label"><HeartIcon /> {t('missionVision.valuesLabel')}</span>
            <h2>{t('missionVision.valuesTitle')}</h2>
            <p>{t('missionVision.valuesSub')}</p>
          </div>
          <div className="mv-values-grid">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className={`mv-value-card ${visibleSections.has(i + 10) ? 'mv-value-card--visible' : ''}`}
                ref={el => sectionRefs.current[i + 10] = el}
                data-index={i + 10}
                style={{ '--delay': `${i * 0.08}s` }}
              >
                <div className="mv-value-icon">{VALUE_ICONS[i] || <StarIcon />}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGIC OBJECTIVES ── */}
      <section className="mv-objectives-section">
        <div className="mv-section-inner">
          <div className="mv-section-header">
            <span className="mv-section-label"><TrendingUpIcon /> {t('missionVision.objectivesLabel')}</span>
            <h2>{t('missionVision.objectivesTitle')}</h2>
            <p>{t('missionVision.objectivesSub')}</p>
          </div>
          <div className="mv-objectives-list">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className={`mv-objective-item ${visibleSections.has(i + 20) ? 'mv-objective-item--visible' : ''}`}
                ref={el => sectionRefs.current[i + 20] = el}
                data-index={i + 20}
                style={{ '--delay': `${i * 0.07}s` }}
              >
                <div className="mv-objective-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="mv-objective-check"><CheckIcon /></div>
                <div className="mv-objective-content">
                  <h3>{obj.title}</h3>
                  <p>{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING BANNER ── */}
      <div className="mv-banner">
        <div className="mv-banner-inner">
          <h2>{t('missionVision.bannerTitle')}</h2>
          <p>{t('missionVision.bannerText')}</p>
        </div>
      </div>

    </div>
  )
}

export default Vision_Mission