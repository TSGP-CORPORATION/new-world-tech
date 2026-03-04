import React from 'react'
import { useTranslation } from 'react-i18next'
import { useCookies } from '../../hooks/useCookies'
import './CookieConsent.css'

const CookieConsent = () => {
  const { t } = useTranslation()
  const {
    showBanner,
    acceptAllCookies,
    acceptEssentialOnly,
  } = useCookies()

  if (!showBanner) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>{t('cookies.title', 'Cookie Settings')}</h3>
          <p>
            {t(
              'cookies.description',
              'We use cookies to enhance your experience, analyze site traffic, and serve personalized content. By continuing to use this site, you agree to our use of cookies.'
            )}
          </p>
          <a href="/privacy-policy" className="cookie-link">
            {t('cookies.learnMore', 'Learn more about our cookie policy')}
          </a>
        </div>
        <div className="cookie-buttons">
          <button
            className="cookie-btn cookie-btn-essential"
            onClick={acceptEssentialOnly}
          >
            {t('cookies.acceptEssential', 'Accept Essential')}
          </button>
          <button
            className="cookie-btn cookie-btn-all"
            onClick={acceptAllCookies}
          >
            {t('cookies.acceptAll', 'Accept All')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
