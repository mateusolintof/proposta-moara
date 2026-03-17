import React, { useState } from 'react';
import { ArrowRight, X, CheckCircle2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Timeline = () => {
    const [selectedPhase, setSelectedPhase] = useState(null);

    const phases = [
        {
            id: '01',
            title: 'Kick-off',
            description: 'Reunião de alinhamento e acessos',
            modalTitle: 'Fase 1: Detalhamento',
            modalDescription: 'Alinhamento de regras de negócio e infraestrutura.',
            deliverables: [
                'Pesquisa e Briefing',
                'Arquitetura dos Fluxos (Agentes de IA)',
                'Definição da Árvore de Decisão (Triagem)',
                'Cronograma detalhado de implantação'
            ]
        },
        {
            id: '02',
            title: 'Desenvolvimento',
            description: 'Configuração dos fluxos e integrações',
            modalTitle: 'Fase 2: Detalhamento',
            modalDescription: 'Construção dos agentes e conexão com sistemas.',
            deliverables: [
                'Agente SDR operacional em ambiente de homologação',
                'Setup do CRM com funil personalizado',
                'Configuração das réguas de No-Show (D-2, D-1)'
            ]
        },
        {
            id: '03',
            title: 'Validação',
            description: 'Testes assistidos com a equipe',
            modalTitle: 'Fase 3: Detalhamento',
            modalDescription: 'Garantia de qualidade e preparação da equipe.',
            deliverables: [
                'Bateria de testes assistidos (Simulação de cenários)',
                'Treinamento da equipe de recepção (Operação do CRM)',
                'Playbook de Atendimento Híbrido (IA + Humano)',
                'Ajustes finos de tom de voz e respostas'
            ]
        },
        {
            id: '04',
            title: 'Go-Live',
            description: 'Virada de chave oficial',
            modalTitle: 'Fase 4: Detalhamento',
            modalDescription: 'Início da operação oficial e monitoramento.',
            deliverables: [
                'Virada de chave para produção',
                'Monitoramento intensivo (Hypercare) por 30 dias',
                'Relatório de performance da primeira semana',
                'Entrega oficial do projeto e acessos administrativos'
            ]
        }
    ];

    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2>Cronograma de Execução</h2>
                    <p>Próximos passos após a aprovação.</p>
                </div>

                <div className="layout-grid cols-4" style={{ gap: '1.5rem' }}>
                    {phases.map((phase) => (
                        <motion.div
                            key={phase.id}
                            className="glass-panel"
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                background: '#F6F6F3', // Brand Nude
                                border: '1px solid var(--color-border)',
                                boxShadow: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => setSelectedPhase(phase)}
                        >
                            <div style={{
                                color: 'var(--color-primary)', // Brand Green
                                fontWeight: 800,
                                fontSize: '0.9rem',
                                marginBottom: '0.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                FASE {phase.id}
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: 'var(--color-text)',
                                marginBottom: '0.75rem'
                            }}>
                                {phase.title}
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                color: 'var(--color-text-muted)',
                                marginBottom: '1.5rem',
                                lineHeight: 1.5
                            }}>
                                {phase.description}
                            </p>
                            <div style={{
                                marginTop: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                color: 'var(--color-primary)',
                                fontWeight: 700,
                                fontSize: '0.9rem'
                            }}>
                                Ver detalhes <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedPhase && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 100,
                            background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(4px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}
                        onClick={() => setSelectedPhase(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            style={{
                                background: 'white',
                                borderRadius: '1rem',
                                width: '100%',
                                maxWidth: '600px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div style={{
                                padding: '1.5rem 2rem',
                                borderBottom: '1px solid var(--color-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>
                                    {selectedPhase.modalTitle}
                                </h3>
                                <button
                                    onClick={() => setSelectedPhase(null)}
                                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '2rem' }}>
                                <div style={{
                                    background: 'var(--color-bg)',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    marginBottom: '2rem',
                                    border: '1px solid var(--color-border)',
                                    color: 'var(--color-text)'
                                }}>
                                    {selectedPhase.modalDescription}
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: 700 }}>
                                    <FileText size={20} />
                                    Entregáveis da Fase
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {selectedPhase.deliverables.map((item, index) => (
                                        <div key={index} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: '0.5rem',
                                            background: 'white'
                                        }}>
                                            <div style={{ color: 'var(--color-success)' }}>
                                                <CheckCircle2 size={16} fill="var(--color-success)" color="white" />
                                            </div>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Timeline;
