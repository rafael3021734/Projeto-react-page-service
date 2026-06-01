const services = [
  {
    title: 'Projetos elétricos completos',
    description: 'Desenvolvemos projetos de baixa, média e alta tensão para indústrias, comércios e condomínios.',
  },
  {
    title: 'Manutenção preventiva',
    description: 'Cronograma estruturado para reduzir falhas, paradas e aumentar a vida útil das instalações.',
  },
  {
    title: 'Manutenção corretiva',
    description: 'Soluções rápidas e seguras para recuperar máquinas, painéis e sistemas elétricos.',
  },
  {
    title: 'Automação industrial',
    description: 'Integração de processos, comando remoto e otimização de produção com sistemas inteligentes.',
  },
]

const equipment = [
  {
    title: 'Quadros elétricos',
    description: 'Montagem e manutenção de quadros de comando e distribuição.',
  },
  {
    title: 'Motores e inversores',
    description: 'Avaliação, instalação e controle de motores elétricos e drives.',
  },
  {
    title: 'Sistema de iluminação',
    description: 'Projetos de iluminação técnica e de emergência com eficiência energética.',
  },
  {
    title: 'Monitoramento e segurança',
    description: 'Soluções para supervisão, detecção de falhas e proteção de equipamentos.',
  },
]

export default function Services() {
  return (
    <>
      <section id="services" className="section services">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Serviços</span>
            <h2>Nossas principais soluções</h2>
            <p>Atuamos em todas as etapas do projeto elétrico: planejamento, instalação, operação e manutenção.</p>
          </div>

          <div className="grid service-grid">
            {services.map(item => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="section equipment">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Equipamentos</span>
            <h2>Produtos e soluções técnicas</h2>
            <p>Entregamos suporte técnico e componentes adequados para cada projeto elétrico ou industrial.</p>
          </div>

          <div className="grid equipment-grid">
            {equipment.map(item => (
              <article key={item.title} className="card card-light">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
