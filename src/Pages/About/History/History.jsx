import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './History.css'

const History = () => {
  const { t } = useTranslation()
  const [visibleItems, setVisibleItems] = useState(new Set())
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.15 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const milestones = t('history.milestones', { returnObjects: true }) || []

  return (
    <div className="history-page">
      {/* Hero Section */}
      <div className="history-hero">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop"
          alt="History Hero"
          className="history-hero-image"
        />
        <div className="history-hero-overlay" />
        <div className="history-hero-content">
          <span className="history-hero-label">{t('history.heroLabel')}</span>
          <h1>{t('history.heroTitle')}</h1>
          <p>{t('history.heroSubtitle')}</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="history-intro-section">
        <div className="history-intro-inner">
          <div className="history-intro-text">
            <p>{t('history.introText')}</p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="history-timeline-section">
        <div className="history-timeline-header">
          <span className="history-section-label">{t('history.keyDatesLabel')}</span>
          <h2>{t('history.keyDatesTitle')}</h2>
        </div>

        <div className="history-timeline">
          {milestones.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`timeline-item ${visibleItems.has(index) ? 'timeline-item--visible' : ''}`}
            >
              <div className="timeline-year">
                <span>{item.year}</span>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legacy Banner */}
      <div className="history-legacy-section">
        <div className="history-legacy-inner">
          <h2>{t('history.legacyTitle')}</h2>
          <p>{t('history.legacyText')}</p>
        </div>
      </div>
    </div>
  )
}

export default History