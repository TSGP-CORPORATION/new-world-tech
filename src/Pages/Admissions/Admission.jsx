import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Admissions.css'

/* ── SVG Icon Components ── */
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const BookOpenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)
const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)
const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
)
const CreditCardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)
const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)
const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

/* ── Component ── */
const Admission = () => {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState(null)

  const programs      = t('admissions.programs',      { returnObjects: true }) || []
  const steps         = t('admissions.steps',         { returnObjects: true }) || []
  const documents     = t('admissions.documents',     { returnObjects: true }) || []
  const faqs          = t('admissions.faqs',          { returnObjects: true }) || []
  const testimonials  = t('admissions.testimonials',  { returnObjects: true }) || []
  const paymentMethods= t('admissions.paymentMethods',{ returnObjects: true }) || []
  const requirements  = t('admissions.requirements',  { returnObjects: true }) || []
  const accredCards   = t('admissions.accredCards',   { returnObjects: true }) || []

  const reqIcons    = [<BookOpenIcon />, <UserIcon />, <BriefcaseIcon />, <FileTextIcon />]
  const accredIcons = [<AwardIcon />, <BriefcaseIcon />, <UsersIcon />]
  const dotClasses  = ['pay-dot--mtn', 'pay-dot--orange', 'pay-dot--bank', 'pay-dot--cash']

  return (
    <div className="admission-page">

      {/* ── HERO ── */}
      <div
        className="admission-hero"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop)` }}
      >
        <div className="admission-hero-overlay" />
        <div className="admission-hero-content">
          <span className="admission-hero-label">{t('admissions.heroLabel')}</span>
          <h1>{t('admissions.heroTitle')} <span>{t('admissions.heroYear')}</span></h1>
          <p>{t('admissions.heroSubtitle')}</p>
          <div className="admission-hero-cta">
            <a href="#apply-steps" className="btn-primary">
              {t('admissions.startApplication')}
              <span className="btn-icon"><ArrowRightIcon /></span>
            </a>
            <a href="https://wa.me/237678587861" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <span className="btn-icon"><WhatsAppIcon /></span>
              {t('admissions.chatWhatsapp')}
            </a>
          </div>
        </div>
      </div>

      {/* ── INFO STRIP ── */}
      <div className="admission-info-strip">
        <div className="info-strip-item">
          <span className="strip-icon"><CalendarIcon /></span>
          <div>
            <strong>{t('admissions.strip.admissionPeriodLabel')}</strong>
            <p>{t('admissions.strip.admissionPeriod')}</p>
          </div>
        </div>
        <div className="info-strip-item">
          <span className="strip-icon"><ClockIcon /></span>
          <div>
            <strong>{t('admissions.strip.officeHoursLabel')}</strong>
            <p>{t('admissions.strip.officeHours')}</p>
          </div>
        </div>
        <div className="info-strip-item">
          <span className="strip-icon"><MapPinIcon /></span>
          <div>
            <strong>{t('admissions.strip.locationLabel')}</strong>
            <p>{t('admissions.strip.location')}</p>
          </div>
        </div>
        <div className="info-strip-item">
          <span className="strip-icon"><PhoneIcon /></span>
          <div>
            <strong>{t('admissions.strip.phoneLabel')}</strong>
            <p>{t('admissions.strip.phone')}</p>
          </div>
        </div>
      </div>

      {/* ── PROGRAMS ── */}
      <section className="admission-section" id="programs">
        <div className="section-inner">
          <span className="section-label"><BookOpenIcon /> {t('admissions.programsLabel')}</span>
          <h2>{t('admissions.programsTitle')}</h2>
          <p className="section-sub">{t('admissions.programsSub')}</p>
          <div className="programs-admission-grid">
            {programs.map((prog, i) => (
              <div key={i} className={`prog-card ${!prog.open ? 'prog-card--closed' : ''}`}>
                <div className="prog-card-header">
                  <span className={`prog-badge ${prog.open ? 'prog-badge--open' : 'prog-badge--full'}`}>
                    {prog.open ? t('admissions.badgeOpen') : t('admissions.badgeFull')}
                  </span>
                </div>
                <h3>{prog.name}</h3>
                <div className="prog-meta">
                  <div className="prog-meta-item">
                    <span className="meta-icon"><ClockIcon /></span>
                    <span>{prog.duration}</span>
                  </div>
                  <div className="prog-meta-item">
                    <span className="meta-icon"><CalendarIcon /></span>
                    <span>{t('admissions.intake')}: {prog.intake}</span>
                  </div>
                  <div className="prog-meta-item">
                    <span className="meta-icon"><UsersIcon /></span>
                    <span>{t('admissions.maxStudents')}: {prog.spots}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section className="admission-section admission-section--alt">
        <div className="section-inner">
          <span className="section-label"><CheckCircleIcon /> {t('admissions.requirementsLabel')}</span>
          <h2>{t('admissions.requirementsTitle')}</h2>
          <p className="section-sub">{t('admissions.requirementsSub')}</p>
          <div className="requirements-grid">
            {requirements.map((req, i) => (
              <div key={i} className="req-card">
                <div className="req-icon">{reqIcons[i] || <CheckCircleIcon />}</div>
                <h3>{req.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: req.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section className="admission-section" id="documents">
        <div className="section-inner">
          <span className="section-label"><FileTextIcon /> {t('admissions.documentsLabel')}</span>
          <h2>{t('admissions.documentsTitle')}</h2>
          <p className="section-sub">{t('admissions.documentsSub')}</p>
          <div className="documents-table-wrapper">
            <table className="documents-table">
              <thead>
                <tr>
                  <th>{t('admissions.tableDoc')}</th>
                  <th>{t('admissions.tableCopies')}</th>
                  <th>{t('admissions.tableStatus')}</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, i) => (
                  <tr key={i}>
                    <td><span className="doc-icon"><FileTextIcon /></span>{doc.item}</td>
                    <td>{doc.copies}</td>
                    <td>
                      <span className={`doc-status ${doc.required ? 'doc-status--required' : 'doc-status--optional'}`}>
                        {doc.required ? t('admissions.required') : t('admissions.optional')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="documents-notice">
            <span className="notice-icon"><CheckCircleIcon /></span>
            <p dangerouslySetInnerHTML={{ __html: t('admissions.documentsNotice') }} />
          </div>
        </div>
      </section>

      {/* ── FEES ── */}
      <section className="admission-section admission-section--alt">
        <div className="section-inner">
          <span className="section-label"><CreditCardIcon /> {t('admissions.feesLabel')}</span>
          <h2>{t('admissions.feesTitle')}</h2>
          <p className="section-sub">{t('admissions.feesSub')}</p>
          <div className="fees-grid">
            <div className="fee-card fee-card--highlight">
              <div className="fee-label">{t('admissions.registrationFeeLabel')}</div>
              <div className="fee-amount">5,000 <span>FCFA</span></div>
              <p>{t('admissions.registrationFeeDesc')}</p>
            </div>
            <div className="fee-card">
              <div className="fee-label">{t('admissions.tuitionFeeLabel')}</div>
              <div className="fee-amount">350,000 <span>FCFA</span></div>
              <p>{t('admissions.tuitionFeeDesc')}</p>
            </div>
          </div>
          <div className="payment-methods">
            <h3>{t('admissions.paymentMethodsTitle')}</h3>
            <div className="payment-methods-grid">
              {paymentMethods.map((method, i) => (
                <div key={i} className="pay-method">
                  <span className={`pay-dot ${dotClasses[i] || ''}`} />
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="admission-section" id="apply-steps">
        <div className="section-inner">
          <span className="section-label"><ArrowRightIcon /> {t('admissions.stepsLabel')}</span>
          <h2>{t('admissions.stepsTitle')}</h2>
          <p className="section-sub">{t('admissions.stepsSub')}</p>
          <div className="steps-list">
            {steps.map((step, i) => (
              <div key={i} className="step-item">
                <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="step-connector">
                  <div className="step-dot" />
                  {i < steps.length - 1 && <div className="step-line" />}
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATION ── */}
      <section className="admission-section admission-section--alt">
        <div className="section-inner">
          <span className="section-label"><AwardIcon /> {t('admissions.accredLabel')}</span>
          <h2>{t('admissions.accredTitle')}</h2>
          <p className="section-sub">{t('admissions.accredSub')}</p>
          <div className="accred-grid">
            {accredCards.map((card, i) => (
              <div key={i} className="accred-card">
                <div className="accred-icon">{accredIcons[i] || <AwardIcon />}</div>
                <h3>{card.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: card.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="admission-section">
        <div className="section-inner">
          <span className="section-label"><StarIcon /> {t('admissions.testimonialsLabel')}</span>
          <h2>{t('admissions.testimonialsTitle')}</h2>
          <div className="testimonials-grid">
            {testimonials.map((item, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, s) => <span key={s} className="star-icon"><StarIcon /></span>)}
                </div>
                <p className="testimonial-text">"{item.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{item.name.charAt(0)}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.program}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="admission-section admission-section--alt">
        <div className="section-inner">
          <span className="section-label">FAQ</span>
          <h2>{t('admissions.faqTitle')}</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-chevron"><ChevronDownIcon /></span>
                </div>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP & CONTACT ── */}
      <section className="admission-section">
        <div className="section-inner">
          <span className="section-label"><MapPinIcon /> {t('admissions.findUsLabel')}</span>
          <h2>{t('admissions.findUsTitle')}</h2>
          <p className="section-sub">{t('admissions.findUsSub')}</p>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-block">
                <div className="contact-block-icon"><MapPinIcon /></div>
                <div>
                  <strong>{t('admissions.contact.addressLabel')}</strong>
                  <p>{t('admissions.contact.address')}</p>
                </div>
              </div>
              <div className="contact-block">
                <div className="contact-block-icon"><ClockIcon /></div>
                <div>
                  <strong>{t('admissions.contact.hoursLabel')}</strong>
                  <p>{t('admissions.contact.hours')}</p>
                </div>
              </div>
              <div className="contact-block">
                <div className="contact-block-icon"><PhoneIcon /></div>
                <div>
                  <strong>{t('admissions.contact.phoneLabel')}</strong>
                  <p>{t('admissions.contact.phone')}</p>
                </div>
              </div>
              <div className="contact-cta-group">
                <a href="tel:+237678587861" className="contact-btn contact-btn--call">
                  <span><PhoneIcon /></span>
                  {t('admissions.contact.callBtn')}
                </a>
                <a href="https://wa.me/237678587861" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn--whatsapp">
                  <span><WhatsAppIcon /></span>
                  {t('admissions.contact.whatsappBtn')}
                </a>
              </div>
            </div>
            <div className="map-embed">
              <iframe
                title="Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.678!2d11.5021!3d3.8480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf80c11e9f21%3A0xa03d9c61cf39cc95!2sMessasi%2C%20Yaound%C3%A9!5e0!3m2!1sen!2scm!4v1700000000000"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className="admission-cta-banner">
        <div className="cta-banner-inner">
          <h2>{t('admissions.ctaTitle')}</h2>
          <p>{t('admissions.ctaText')}</p>
          <div className="cta-banner-buttons">
            <a href="#apply-steps" className="btn-primary btn-primary--large">
              {t('admissions.ctaApply')} <span className="btn-icon"><ArrowRightIcon /></span>
            </a>
            <a href="https://wa.me/237678587861" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-whatsapp--large">
              <span className="btn-icon"><WhatsAppIcon /></span>
              {t('admissions.ctaAsk')}
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Admission