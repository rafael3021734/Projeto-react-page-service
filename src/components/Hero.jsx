export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Engenharia elétrica e industrial</span>
          <h1>Projetos, manutenção e automação com foco em performance e segurança.</h1>
          <p className="hero-text">
            Atendemos residências, comércios e indústrias com soluções de energia, instalações, automação e manutenção elétrica.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Solicitar orçamento</a>
            <a className="button button-secondary" href="#services">Ver serviços</a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <h2>Atendimento técnico completo</h2>
            <p>Projetos elétricos, manutenção preventiva e corretiva, e suporte para indústrias e prédios comerciais.</p>
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
