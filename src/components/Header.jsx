const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Equipamentos', href: '#equipment' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
]

function LogoSVG() {
  return (
    <svg className="brand-logo-svg" viewBox="0 0 60 60" width="48" height="48">
      {/* Portão - parte superior */}
      <rect x="8" y="12" width="44" height="28" fill="none" stroke="#2563eb" strokeWidth="2" rx="2"/>
      {/* Barra horizontal do portão */}
      <line x1="8" y1="26" x2="52" y2="26" stroke="#2563eb" strokeWidth="1.5" opacity="0.6"/>
      {/* Cadeado - círculo */}
      <circle cx="30" cy="38" r="6" fill="none" stroke="#2563eb" strokeWidth="2"/>
      {/* Cadeado - haste */}
      <path d="M 25 38 Q 25 32 30 32 Q 35 32 35 38" fill="none" stroke="#2563eb" strokeWidth="2"/>
      {/* Ponto de conexão - círculo pequeno */}
      <circle cx="30" cy="38" r="2" fill="#2563eb"/>
    </svg>
  )
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home">
          <LogoSVG />
          <span className="brand-text">Portão on</span>
        </a>

        <nav className="nav">
          {navItems.map(item => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="button button-primary" href="#contact">Orçamento</a>
      </div>
    </header>
  )
}
