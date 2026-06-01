import { useState, useEffect } from 'react'
import quadroImage from '../assets/Maquina_solda_ponto.jpeg'
import motorImage from '../assets/Foto máquina torcer arame.jpg'
import iluminacaoImage from '../assets/Comando de Solda .jpg'
import monitoramentoImage from '../assets/Dobra Vergalhão.jpg'

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
    image: quadroImage,
  },
  {
    title: 'Motores e inversores',
    description: 'Avaliação, instalação e controle de motores elétricos e drives.',
    image: motorImage,
  },
  {
    title: 'Sistema de iluminação',
    description: 'Projetos de iluminação técnica e de emergência com eficiência energética.',
    image: iluminacaoImage,
  },
  {
    title: 'Monitoramento e segurança',
    description: 'Soluções para supervisão, detecção de falhas e proteção de equipamentos.',
    image: monitoramentoImage,
  },
]

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  function openImage(index) {
    setSelectedIndex(index)
  }

  function closeImage() {
    setSelectedIndex(null)
  }

  function moveImage(direction) {
    setSelectedIndex(prev => {
      if (prev === null) return null
      const next = prev + direction
      if (next < 0) return equipment.length - 1
      if (next >= equipment.length) return 0
      return next
    })
  }

  useEffect(() => {
    if (selectedIndex === null) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeImage()
      }
      if (event.key === 'ArrowRight') {
        moveImage(1)
      }
      if (event.key === 'ArrowLeft') {
        moveImage(-1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  const selectedItem = selectedIndex !== null ? equipment[selectedIndex] : null

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
            {equipment.map((item, index) => (
              <article key={item.title} className="card card-light">
                <button
                  type="button"
                  className="card-image-button"
                  onClick={() => openImage(index)}
                  aria-label={`Abrir imagem de ${item.title}`}
                >
                  <img src={item.image} alt={item.title} className="card-image" />
                </button>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label="Visualização de imagem">
          <div className="image-modal-backdrop" onClick={closeImage} />
          <div className="image-modal-content">
            <button type="button" className="image-modal-close" onClick={closeImage} aria-label="Fechar imagem">
              ×
            </button>
            <button type="button" className="image-modal-arrow image-modal-prev" onClick={() => moveImage(-1)} aria-label="Imagem anterior">
              ‹
            </button>
            <button type="button" className="image-modal-arrow image-modal-next" onClick={() => moveImage(1)} aria-label="Próxima imagem">
              ›
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} className="image-modal-photo" />
            <div className="image-modal-info">
              <p className="image-modal-title">{selectedItem.title}</p>
              <p className="image-modal-description">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
