import React from 'react'

const services = [
  {
    title: 'Configuração de Controles',
    description: 'Seu controle não funciona? Codificamos novos controles remotos na frequência correta e limpamos a memória da central em minutos.',
  },
  {
    title: 'Troca de Placa Central',
    description: 'Central queimada ou com mal funcionamento? Substituímos e reconfiguramos centrais automáticas com garantia técnica.',
  },
  {
    title: 'Instalação de Fotocélula',
    description: 'Segurança total: Fotocélula anti-esmagamento evita acidentes. Portão inteligente que para se detectar carros, pessoas ou pets.',
  },
  {
    title: 'Trava Eletromagnética',
    description: 'Proteção contra arrombamentos: Trava temporizada mantém o portão seguro quando fechado. Tranquilidade 24 horas.',
  },
  {
    title: 'Acionamento via Smartphone',
    description: 'Abra e feche seu portão de qualquer lugar! Módulo Wi-Fi integrado ao seu celular - conforto e segurança total.',
  },
  {
    title: 'Interruptores Inteligentes',
    description: 'Automação total: Controle as luzes da garagem pela Alexa, Google Home ou smartphone. Tecnologia ao seu alcance.',
  },
]

const equipment = [
  {
    title: 'Painéis de comando',
    description: 'Ajustamos e revisamos o painel de controle do portão para garantir uma operação estável e segura.',
  },
  {
    title: 'Motores e acionamentos',
    description: 'Inspeção e manutenção do motor do portão para reduzir ruídos e evitar travamentos.',
  },
  {
    title: 'Iluminação e sinalização',
    description: 'Instalamos iluminação prática para facilitar o uso do portão à noite e aumentar a segurança na área.',
  },
  {
    title: 'Verificação de segurança',
    description: 'Checamos sensores, travas e fotocélulas para que seu portão funcione sem riscos.',
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
            <p>Seu portão basculante parou de funcionar, está batendo muito forte ou o controle não responde? 
          Nós oferecemos <strong>suporte técnico especializado</strong> para restabelecer a segurança e a praticidade da sua casa no mesmo dia. 
          Trabalhamos exclusivamente com peças de alta qualidade, ferramentas adequadas e configurações precisas que evitam o desgaste precoce do seu motor. 
          Confira abaixo como podemos ajudar você hoje:</p>
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
            <span className="eyebrow">Como trabalhamos</span>
            <h2>O que usamos para deixar seu portão funcionando</h2>
            <p>Utilizamos ferramentas e componentes específicos para diagnosticar seu portão basculante e entregar soluções confiáveis, sem mistério.</p>
          </div>

          <div className="grid equipment-grid">
            {equipment.map((item) => (
              <article key={item.title} className="card">
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
