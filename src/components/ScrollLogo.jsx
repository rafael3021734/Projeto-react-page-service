import { useState, useEffect } from 'react'
import logo from '../assets/logo-teste2.png'

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
      <img src={logo} alt="Logo RD Máquinas" />
    </div>
  )
}
