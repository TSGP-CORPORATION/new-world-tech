/**@author Oliver */
import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './NavBar.css'
import { getProgramsData } from '../../data/programsData'

const NavBar = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const programsData = getProgramsData(t)

  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState(null)

  // Close menu on route change / outside click
  const overlayRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.querySelector('.header')
      if (headerElement) {
        const headerRect = headerElement.getBoundingClientRect()
        setIsHeaderVisible(headerRect.bottom > 0)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setExpandedItem(null)
  }

  const toggleExpanded = (id) => {
    setExpandedItem((prev) => (prev === id ? null : id))
  }

  const navItems = [
    {
      id: 1,
      label: t('nav.aboutUs'),
      route: '/about',
      submenu: [
        { name: t('nav.history'), route: '/about/history' },
        { name: t('nav.missionVision'), route: '/about/mission_vision' },
        { name: t('nav.leadership'), route: '/about/leadership' },
      ],
    },
    {
      id: 3,
      label: t('nav.programs'),
      route: '/programs',
      submenu: programsData.map((program) => ({
        name: program.name,
        route: `/program/${program.id}`,
      })),
    },
    {
      id: 4,
      label: t('nav.admissions'),
      route: '/admissions',
      submenu: [],
    },
  ]

  return (
    <>
      <div className="nav-bar">
        {/* Logo — animated on desktop, always visible on mobile */}
        <motion.div
          className="nav-logo-container"
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: !isHeaderVisible ? 1 : 0,
            width: !isHeaderVisible ? 'auto' : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <img
            onClick={() => { navigate('/'); closeMenu() }}
            src="/logo.png"
            alt="School Logo"
            className="nav-logo"
          />
        </motion.div>

        {/* Desktop nav items */}
        {navItems.map((item) => (
          <div key={item.id} className="nav-content-container">
            {item.submenu.length > 0 ? (
              <>
                <div className="nav-item-label">
                  <p>{item.label}</p>
                </div>
                <div className="submenu">
                  {item.submenu.map((subitem, subindex) => (
                    <Link key={subindex} to={subitem.route} className="submenu-item">
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link to={item.route} className="nav-item-label-link">
                <p>{item.label}</p>
              </Link>
            )}
          </div>
        ))}

        {/* Hamburger — only visible on mobile via CSS */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile slide-in drawer */}
      <div
        className={`nav-mobile-overlay${menuOpen ? ' open' : ''}`}
        ref={overlayRef}
      >
        <nav className="nav-mobile-menu">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-mobile-item${expandedItem === item.id ? ' expanded' : ''}`}
            >
              {item.submenu.length > 0 ? (
                <>
                  <div
                    className="nav-mobile-item-header"
                    onClick={() => toggleExpanded(item.id)}
                  >
                    {item.label}
                    <span className="nav-mobile-chevron">▼</span>
                  </div>
                  <div className="nav-mobile-submenu">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.route}
                        className="nav-mobile-submenu-item"
                        onClick={closeMenu}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.route}
                  className="nav-mobile-item-header"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}

export default NavBar