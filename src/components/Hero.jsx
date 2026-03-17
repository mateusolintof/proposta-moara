import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, BookOpen } from 'lucide-react';

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
              Atendimento Inteligente para a <br />
              <span style={{ color: 'var(--color-primary)' }}>Start Move</span>
            </h1>

            <p style={{ fontSize: '1.2rem', marginBottom: '2.25rem', maxWidth: '620px' }}>
              IA que atende, qualifica e tira dúvidas dos seus leads — 24 horas por dia, 7 dias por semana.
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
            { icon: Bot, label: 'Atendimento IA', sublabel: 'Seu agente nunca tira folga', value: '24/7', color: '#3b82f6' },
            { icon: Zap, label: 'Resposta Instantânea', sublabel: 'Tempo de resposta do agente', value: '< 2 seg', color: '#10b981' },
            { icon: BookOpen, label: 'Conhecimento Total', sublabel: 'Base completa sobre a assessoria, planos e metodologia', value: null, color: '#8b5cf6' },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '1.5rem 1.75rem',
                textAlign: 'left',
                width: '100%',
                maxWidth: '280px',
                justifySelf: 'center',
                borderLeft: `3px solid ${item.color}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                <item.icon size={24} style={{ color: item.color, flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)' }}>{item.label}</span>
              </div>
              {item.value && (
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: item.color, letterSpacing: '-0.02em' }}>{item.value}</div>
              )}
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.45,
                fontWeight: 500
              }}>
                {item.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
