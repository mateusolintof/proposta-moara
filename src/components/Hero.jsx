import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, BarChart3 } from 'lucide-react';

const Hero = () => {
  const logoSrc = '/Logo 3-07.png'; // colocar este arquivo em /public

  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Elements */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.6
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.6
        }} />
      </div>

      <div className="container">
        <div className="hero-top">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '680px' }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(14, 165, 233, 0.1)',
              borderRadius: '2rem',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              marginBottom: '1.5rem',
              color: 'var(--color-primary)'
            }}>
              <Zap size={16} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Proposta Comercial</span>
            </div>

            <h1>
              Atendimento Inteligente do <br />
              <span style={{ color: 'var(--color-primary)' }}>Primeiro Contato ao Pós-Venda</span>
            </h1>

            <p style={{ fontSize: '1.2rem', marginBottom: '2.25rem', maxWidth: '620px' }}>
              IA que qualifica leads, recupera oportunidades e fideliza clientes — tudo integrado a um CRM único.
            </p>

            <div className="hero-cta-stack" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" style={{ minWidth: '200px' }}>
                Ver Demonstração
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline" style={{ minWidth: '200px' }}>
                Conhecer Soluções
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="hero-logo-wrap"
          >
            <img
              src={logoSrc}
              alt="convert A.I"
              style={{ width: '100%', maxWidth: '1440px', height: 'auto', objectFit: 'contain' }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="hero-cards"
        >
          {[
            { icon: Bot, label: 'Atendimento IA', value: '24/7' },
            { icon: Zap, label: 'Tempo de Resposta', value: '< 2 seg' },
            {
              icon: BarChart3,
              label: 'Sistema com Atendimento SDR + Pós-venda + CRM de Gestão',
              value: null
            },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                width: '100%',
                maxWidth: '260px',
                justifySelf: 'center'
              }}
            >
              <item.icon size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }} />
              {item.value && (
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>{item.value}</div>
              )}
              <div style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.35,
                fontWeight: 600,
                maxWidth: '520px',
                margin: '0 auto'
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
