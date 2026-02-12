
/**@author Oliver */
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './NavBar.css'
import { getProgramsData } from '../../data/programsData'

const NavBar = () => {
  const { t } = useTranslation()
  const programsData = getProgramsData(t)

  const navItems = [
    {
      id: 1,
      label: t('nav.aboutUs'),
      route: '/about',
      submenu: [
        { name: t('nav.history'), route: '/about/history' },
        { name: t('nav.missionVision'), route: '/about/mission' },
        { name: t('nav.leadership'), route: '/about/leadership' }
      ]
    },
    {
      id: 3,
      label: t('nav.programs'),
      route: '/programs',
      submenu: programsData.map((program) => ({
        name: program.name,
        route: `/program/${program.id}`
      }))
    },
    {
      id: 4,
      label: t('nav.admissions'),
      route: '/admissions',
      submenu: []
    },
    {
      id: 5,
      label: t('nav.contact'),
      route: '/contact',
      submenu: []
    },
  ]

  return (
    <div className="nav-bar">
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
    </div>
  )
}

export default NavBar