import React, { useRef, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import './Home.css'
import Hero_Section from '../../Components/Hero_Section/Hero_SEction'
import Features_Section from '../../Components/Features_Section/Features_Section'
import { getProgramsData } from '../../data/programsData'
import { useNavigate } from 'react-router-dom'

/* ── SVG icons (inline, no extra dependency) ── */
const IconPlay = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const IconPause = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
)

const IconMuted = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10.18l2.45 2.45c.05-.2.05-.41.05-.63zM19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l2 2L21 18.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
)

const IconUnmuted = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
)

const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const programsData = getProgramsData(t)

  const videoRef = useRef(null)
  const indicatorRef = useRef(null)
  const indicatorTimerRef = useRef(null)

  const [isPaused, setIsPaused] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // start muted (required for autoplay)

  /* flash the play/pause indicator for 700 ms */
  const flashIndicator = useCallback(() => {
    const el = indicatorRef.current
    if (!el) return
    el.classList.add('visible')
    clearTimeout(indicatorTimerRef.current)
    indicatorTimerRef.current = setTimeout(() => {
      el.classList.remove('visible')
    }, 700)
  }, [])

  const handleHeroClick = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPaused(false)
    } else {
      video.pause()
      setIsPaused(true)
    }
    flashIndicator()
  }, [flashIndicator])

  const handleMuteToggle = useCallback((e) => {
    e.stopPropagation() // don't trigger hero click
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }, [])

  return (
    <div className="home-page">
      {/* ── Video Hero ── */}
      <div className="video-hero" onClick={handleHeroClick}>
        <video
          ref={videoRef}
          className="video-hero__video"
          src="/video_hero.mp4"
          autoPlay
          loop
          muted        /* start muted so autoplay works in all browsers */
          playsInline
        />
        <div className="video-hero__overlay" />

        {/* Play / Pause flash indicator */}
        <div className="video-hero__pause-indicator" ref={indicatorRef}>
          {isPaused ? <IconPlay /> : <IconPause />}
        </div>

        {/* Mute / Unmute button */}
        <button
          className="video-hero__mute-btn"
          onClick={handleMuteToggle}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <IconMuted /> : <IconUnmuted />}
        </button>

        <div className="video-hero__content">
          <button
            className="video-hero__cta"
            onClick={(e) => { e.stopPropagation(); navigate('/programs') }}
          >
            {t('home.viewAllPrograms')}
          </button>
        </div>
      </div>

      <Features_Section />

      <div className="programs-secti">
        <span>{t('home.tagline')}</span>

        <div className="progs">
          <p>{t('home.ourPrograms')}</p>
        </div>

        <div className="programs-grid">
          {programsData.slice(0, 3).map((program) => (
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

        <button onClick={() => navigate('/programs')} className="view-all-btn">
          {t('home.viewAllPrograms')}
        </button>
      </div>
    </div>
  )
}

export default Home