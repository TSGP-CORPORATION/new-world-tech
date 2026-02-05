
/**@author Oliver */
import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const navItems = [
    {
      id: 1,
      label: 'About Us',
      route: '/about',
      submenu: [
        { name: 'History', route: '/about/history' },
        { name: 'Mission & Vision', route: '/about/mission' },
        { name: 'Leadership', route: '/about/leadership' }
      ]
    },
    {
      id: 2,
      label: 'Academics',
      route: '/academics',
      submenu: [
        { name: 'Programs', route: '/academics/programs' },
        { name: 'Resources', route: '/academics/resources' }
      ]
    },
    {
      id: 3,
      label: 'Admissions',
      route: '/admissions',
      submenu: []
    },
    {
      id: 5,
      label: 'Contact',
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