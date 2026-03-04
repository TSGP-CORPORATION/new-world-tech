import { useState, useEffect } from 'react'

export const useCookies = () => {
  const [cookies, setCookies] = useState({
    analytics: false,
    marketing: false,
    preferences: true,
  })
  const [cookiesAccepted, setCookiesAccepted] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  // Load cookies from localStorage on mount
  useEffect(() => {
    const savedCookies = localStorage.getItem('cookieConsent')
    if (savedCookies) {
      try {
        const parsed = JSON.parse(savedCookies)
        setCookies(parsed)
        setCookiesAccepted(true)
        setShowBanner(false)
      } catch (err) {
        console.error('Error parsing saved cookies:', err)
        setShowBanner(true)
      }
    } else {
      setShowBanner(true)
    }
  }, [])

  const acceptAllCookies = () => {
    const newCookies = {
      analytics: true,
      marketing: true,
      preferences: true,
    }
    saveCookies(newCookies)
  }

  const acceptEssentialOnly = () => {
    const newCookies = {
      analytics: false,
      marketing: false,
      preferences: true,
    }
    saveCookies(newCookies)
  }

  const updateCookies = (newCookies) => {
    saveCookies({ ...cookies, ...newCookies })
  }

  const saveCookies = (cookieSettings) => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookieSettings))
    setCookies(cookieSettings)
    setCookiesAccepted(true)
    setShowBanner(false)
    
    // Load analytics if accepted
    if (cookieSettings.analytics) {
      loadGoogleAnalytics()
    }
  }

  const loadGoogleAnalytics = () => {
    // This is a placeholder for Google Analytics initialization
    // In a real implementation, you would load the Google Analytics script here
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
      })
    }
  }

  const resetCookies = () => {
    localStorage.removeItem('cookieConsent')
    setShowBanner(true)
    setCookiesAccepted(false)
  }

  return {
    cookies,
    cookiesAccepted,
    showBanner,
    acceptAllCookies,
    acceptEssentialOnly,
    updateCookies,
    resetCookies,
  }
}
