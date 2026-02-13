import React from 'react'
import { useTranslation } from 'react-i18next'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  return (
    <div className="header">
        <div className="header-left">
            <div className="image-and-abbrev">
                <img onClick={() => navigate('/')} src="/public/1b1c7c53-ff2a-478f-8220-1a7e4ec1725a.png" alt="" />
                
            </div>

            <h1>{t('header.schoolName')}</h1>
            
        </div>
        <div className="middle-header"></div>
        
    </div>
  )
}

export default Header