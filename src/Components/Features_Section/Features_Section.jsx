import React from 'react';
import './Features_Section.css';

const Features_Section = () => {
  // SVG Icons
  const CertificationIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="2"/>
      <path d="M30 15L35 25H45L37.5 30L40 40L30 35L20 40L22.5 30L15 25H25L30 15Z" fill="white" stroke="white" strokeWidth="1.5"/>
      <circle cx="45" cy="45" r="8" fill="#d4a017" stroke="white" strokeWidth="1.5"/>
      <path d="M43 45L44 46.5L47 44" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const PracticalIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="40" height="28" rx="2" stroke="white" strokeWidth="2" fill="none"/>
      <rect x="8" y="38" width="44" height="3" fill="white"/>
      <circle cx="30" cy="26" r="8" fill="none" stroke="white" strokeWidth="2"/>
      <path d="M30 22V30M26 26H34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const FlexibleIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="24" fill="none" stroke="white" strokeWidth="2"/>
      <circle cx="30" cy="30" r="3" fill="white"/>
      <path d="M30 12V8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M48 30H52" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M30 48V52" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 30H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M42.4 17.6L45.3 14.7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M42.4 42.4L45.3 45.3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.6 42.4L14.7 45.3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.6 17.6L14.7 14.7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const features = [
    {
      icon: <CertificationIcon />,
      title: "Industry-Recognised Qualifications",
    },
    {
      icon: <PracticalIcon />,
      title: "100% Practical",
    },
    {
      icon: <FlexibleIcon />,
      title: "Self-Paced and Flexible",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features_Section;
