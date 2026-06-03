export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">Quem somos</span>
          <h2>Soluções em Portões Basculantes Automáticos</h2>
          <p>
            Somos especializados em instalação, manutenção e modernização de portões basculantes automáticos. Atendemos residências, condomínios e propriedades comerciais com serviços técnicos de qualidade e suporte dedicado.
          </p>

          <ul className="feature-list">
            <li>Conhecimento técnico em sistemas de automação de portões - Diagnóstico e reparo</li>
            <li>Segurança completa: Fotocélulas, Travas Eletromagnéticas e Controle por Smartphone</li>
            <li>Atendimento personalizado com peças de qualidade e orientação clara</li>
          </ul>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <strong>Qualidade</strong>
            <span>Em cada serviço</span>
          </div>
          <div className="stat-card">
            <strong>Atendimento</strong>
            <span>Personalizado e rápido</span>
          </div>
          <div className="stat-card">
            <strong>Segurança</strong>
            <span>Sempre em primeiro lugar</span>
          </div>
          <div className="stat-card">
            <strong>Confiança</strong>
            <span>No trabalho realizado</span>
          </div>
        </div>
      </div>
    </section>
  )
}
