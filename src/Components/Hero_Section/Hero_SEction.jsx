import React, { useState, useEffect } from 'react';
import './Hero_Section.css';

const Hero_Section = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Renewable Energy",
      subtitle: "Power the Future with Sustainable Solutions",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop",
      description: "Master solar installation, wind energy systems, and sustainable power solutions"
    },
    {
      title: "Electrical Engineering",
      subtitle: "Build Tomorrow's Infrastructure Today",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&h=900&fit=crop",
      description: "Learn circuit design, wiring systems, and electrical safety protocols"
    },
    {
      title: "CCTV & GPS Systems",
      subtitle: "Secure the Connected World",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&h=900&fit=crop",
      description: "Expert training in security systems and vehicle tracking technology"
    },
    {
      title: "Energy Audit",
      subtitle: "Optimize Efficiency, Reduce Waste",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&h=900&fit=crop",
      description: "Professional certification in energy assessment and efficiency consulting"
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
                <button className="cta-primary">Enroll Now</button>
                <button className="cta-secondary">Learn More</button>
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