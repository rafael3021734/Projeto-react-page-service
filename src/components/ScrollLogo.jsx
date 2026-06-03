import { useState, useEffect } from 'react'

function LogoSVG() {
  return (
    <svg viewBox="0 0 60 60" width="40" height="40" aria-hidden="true">
      <rect x="8" y="12" width="44" height="28" fill="none" stroke="#2563eb" strokeWidth="2" rx="2" />
      <line x1="8" y1="26" x2="52" y2="26" stroke="#2563eb" strokeWidth="1.5" opacity="0.6" />
      <circle cx="30" cy="38" r="6" fill="none" stroke="#2563eb" strokeWidth="2" />
      <path d="M 25 38 Q 25 32 30 32 Q 35 32 35 38" fill="none" stroke="#2563eb" strokeWidth="2" />
      <circle cx="30" cy="38" r="2" fill="#2563eb" />
    </svg>
  )
}

export default function ScrollLogo() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 220)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`scroll-logo ${visible ? 'scroll-logo-visible' : ''}`}>
      <LogoSVG />
    </div>
  )
}
