export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">Quem somos</span>
          <h2>Mais de 10 anos levando eficiência e segurança elétrica ao seu projeto.</h2>
          <p>
            Atuamos com planejamento, instalação e manutenção de sistemas elétricos, automação e painéis industriais para
            empresas, condomínios e propriedades comerciais.
          </p>

          <ul className="feature-list">
            <li>Atendimento técnico especializado em elétrica e automação</li>
            <li>Projetos personalizados para cada cliente e setor</li>
            <li>Entrega dentro do prazo com foco em segurança e qualidade</li>
          </ul>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <strong>10+</strong>
            <span>Anos de experiência</span>
          </div>
          <div className="stat-card">
            <strong>150+</strong>
            <span>Projetos concluídos</span>
          </div>
          <div className="stat-card">
            <strong>24h</strong>
            <span>Suporte emergencial</span>
          </div>
          <div className="stat-card">
            <strong>100%</strong>
            <span>Compromisso com a segurança</span>
          </div>
        </div>
      </div>
    </section>
  )
}
