export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Especialistas em Portões Basculantes Automáticos</span>
          <h1>Instalação, Manutenção e Automação para seu Portão Basculante</h1>
          <p className="hero-text">
            De controles remotos até acionamento por smartphone. Segurança, conforto e tecnologia para seu portão automático.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Solicitar orçamento</a>
            <a className="button button-secondary" href="#services">Ver serviços</a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <h2>Especialistas em Portões Automáticos</h2>
            <p>Instalação, configuração, manutenção e modernização de portões basculantes com total segurança e qualidade.</p>
          </div>

          <div className="hero-highlights">
            <div>
              <strong>10+</strong>
              <span>Anos de experiência</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>Atendimento emergencial</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Segurança e conformidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
