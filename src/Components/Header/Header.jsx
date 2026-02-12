import React from 'react'
import { useTranslation } from 'react-i18next'
import './Header.css'

const Header = () => {
  const { t } = useTranslation()
  
  return (
    <div className="header">
        <div className="header-left">
            <div className="image-and-abbrev">
                <img src="/src/assets/1b1c7c53-ff2a-478f-8220-1a7e4ec1725a.png" alt="" />
                
            </div>

            <h1>{t('header.schoolName')}</h1>
            <p>{t('header.vocationTraining')}</p>
        </div>
        <div className="middle-header"></div>
        <div className="right-header">
            <button className="btn btn-primary">{t('header.applyNow')}</button>

        </div>
    </div>
  )
}

export default Header