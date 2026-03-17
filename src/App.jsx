import React, { useState } from 'react';
import Hero from './components/Hero';
import ChatDemo from './components/ChatDemo';
import FlowDiagram from './components/FlowDiagram';
import Solutions from './components/Solutions';
import CRMModal from './components/CRMModal';
import ROICalculator from './components/ROICalculator';
import Investment from './components/Investment';
import Timeline from './components/Timeline';
import { Layout } from 'lucide-react';

function App() {
  const [isCRMOpen, setIsCRMOpen] = useState(false);

  return (
    <div className="app">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>convert <span style={{ fontWeight: 800 }}>A.I</span></div>
          {/* <button
            className="btn btn-outline"
            onClick={() => setIsCRMOpen(true)}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
          >
            <Layout size={16} />
            Ver CRM
          </button> */}
        </div>
      </nav>

      <main>
        <Hero />
        <FlowDiagram />
        <ChatDemo />
        {/* CRM Teaser Section */}
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              borderRadius: '2rem',
              padding: '4rem 2rem',
              border: '1px solid var(--color-border)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2>Gestão Centralizada de Leads e Clientes</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                  Acompanhe cada lead pelo pipeline, gerencie conversas de todos os canais em um inbox único e visualize métricas de performance em tempo real.
                </p>
                <button className="btn btn-primary" onClick={() => setIsCRMOpen(true)}>
                  Explorar o CRM
                </button>
              </div>
            </div>
          </div>
        </section>

        <Solutions />

        <ROICalculator />
        <Investment />
        <Timeline />
      </main>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--color-border)', textAlign: 'center', color: 'var(--color-text-muted)' }}>
        <div className="container">
          <p>&copy; 2024 convert A.I - Todos os direitos reservados.</p>
        </div>
      </footer>

      <CRMModal isOpen={isCRMOpen} onClose={() => setIsCRMOpen(false)} />
    </div>
  );
}

export default App;
