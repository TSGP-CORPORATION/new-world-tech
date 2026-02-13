import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Hero_Section.css';

const Hero_Section = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t('hero.slides.0.title'),
      subtitle: t('hero.slides.0.subtitle'),
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop",
      description: t('hero.slides.0.description'),
      programId: 1
    },
    {
      title: t('hero.slides.1.title'),
      subtitle: t('hero.slides.1.subtitle'),
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&h=900&fit=crop",
      description: t('hero.slides.1.description'),
      programId: 2
    },
    {
      title: t('hero.slides.2.title'),
      subtitle: t('hero.slides.2.subtitle'),
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&h=900&fit=crop",
      description: t('hero.slides.2.description'),
      programId: 6
    },
    {
      title: t('hero.slides.3.title'),
      subtitle: t('hero.slides.3.subtitle'),
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&h=900&fit=crop",
      description: t('hero.slides.3.description'),
      programId: 1
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-section">
      <div className="hero-background">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        

        <div className="hero-main">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide-content ${index === currentSlide ? 'active' : ''}`}
            >
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-cta">
                <button className="cta-primary">{t('hero.enrollNow')}</button>
                <button className="cta-secondary" onClick={() => navigate(`/program/${slide.programId}`)}>{t('hero.learnMore')}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-navigation">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${slide.title}`}
            >
              <span className="nav-label">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero_Section;