import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Leadership.css'

/* ── SVG Icons ── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
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
const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
)
const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)
const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
)

const Leadership = () => {
  const { t } = useTranslation()
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.12 }
    )
    cardRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const leaders     = t('leadership.leaders',     { returnObjects: true }) || []
  const statsItems  = t('leadership.stats',       { returnObjects: true }) || []
  // const boardMembers= t('leadership.boardMembers',{ returnObjects: true }) || []

  const STAT_ICONS = [<AwardIcon />, <UsersIcon />, <BriefcaseIcon />, <AwardIcon />]

  return (
    <div className="leadership-page">

      {/* ── HERO ── */}
      <div className="leadership-hero">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop"
          alt="Leadership"
          className="leadership-hero-image"
        />
        <div className="leadership-hero-overlay" />
        <div className="leadership-hero-content">
          <span className="leadership-hero-label">{t('leadership.heroLabel')}</span>
          <h1>{t('leadership.heroTitle')}</h1>
          <p>{t('leadership.heroSubtitle')}</p>
        </div>
      </div>

      {/* ── INTRO QUOTE ── */}
      <div className="leadership-quote-section">
        <div className="leadership-quote-inner">
          <div className="leadership-quote-icon"><QuoteIcon /></div>
          <blockquote>{t('leadership.quote')}</blockquote>
          <cite>{t('leadership.quoteAuthor')}</cite>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="leadership-stats-bar">
        {statsItems.map((stat, i) => (
          <div key={i} className="leadership-stat-item">
            <span className="stat-icon">{STAT_ICONS[i] || <AwardIcon />}</span>
            <div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── EXECUTIVE LEADERSHIP ── */}
      <section className="leadership-section">
        <div className="leadership-section-inner">
          <div className="leadership-section-header">
            <span className="leadership-section-label"><UsersIcon /> {t('leadership.executiveLabel')}</span>
            <h2>{t('leadership.executiveTitle')}</h2>
            <p>{t('leadership.executiveSub')}</p>
          </div>

          <div className="leaders-grid">
            {leaders.map((leader, i) => (
              <div
                key={i}
                className={`leader-card ${i === 0 ? 'leader-card--featured' : ''} ${visibleCards.has(i) ? 'leader-card--visible' : ''}`}
                ref={el => cardRefs.current[i] = el}
                data-index={i}
                style={{ '--delay': `${i * 0.1}s` }}
              >
                <div className="leader-avatar">
                  <img
                    src={leader.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=2d6a4f&color=fff&size=200`}
                    alt={leader.name}
                    onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=2d6a4f&color=fff&size=200` }}
                  />
                  <div className="leader-avatar-overlay" />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <span className="leader-role">{leader.role}</span>
                  <p className="leader-bio">{leader.bio}</p>
                  <div className="leader-social">
                    <a href={`mailto:${leader.email || 'nwtvtinstitute@gmail.com'}`} className="leader-social-btn" aria-label="Email">
                      <MailIcon />
                    </a>
                    {leader.linkedin && (
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="leader-social-btn" aria-label="LinkedIn">
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOARD MEMBERS ──
      <section className="leadership-section leadership-section--alt">
        <div className="leadership-section-inner">
          <div className="leadership-section-header">
            <span className="leadership-section-label"><BriefcaseIcon /> {t('leadership.boardLabel')}</span>
            <h2>{t('leadership.boardTitle')}</h2>
            <p>{t('leadership.boardSub')}</p>
          </div>

          <div className="board-grid">
            {boardMembers.map((member, i) => (
              <div
                key={i}
                className={`board-card ${visibleCards.has(i + 20) ? 'board-card--visible' : ''}`}
                ref={el => cardRefs.current[i + 20] = el}
                data-index={i + 20}
                style={{ '--delay': `${i * 0.08}s` }}
              >
                <div className="board-avatar">
                  {member.name.charAt(0)}
                </div>
                <div className="board-info">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CLOSING BANNER ── */}
      <div className="leadership-banner">
        <div className="leadership-banner-inner">
          <h2>{t('leadership.bannerTitle')}</h2>
          <p>{t('leadership.bannerText')}</p>
        </div>
      </div>

    </div>
  )
}

export default Leadership