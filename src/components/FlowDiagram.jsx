import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MessageSquareText, PhoneOutgoing, Heart, LayoutDashboard, ArrowRight, X, ArrowLeft } from 'lucide-react';

const FlowDiagram = () => {
    const [isOpen, setIsOpen] = useState(false);

    const mainFlow = [
        { icon: Users, label: 'Lead Entra', sublabel: 'WhatsApp / Chat / Form' },
        { icon: MessageSquareText, label: 'Agente Atendimento', sublabel: 'Qualifica 24/7' },
        { icon: PhoneOutgoing, label: 'Follow-up', sublabel: 'Recupera leads' },
        { icon: LayoutDashboard, label: 'CRM', sublabel: 'Pipeline & Gestão' },
        { icon: Heart, label: 'Pós-vendas', sublabel: 'Fideliza clientes' },
    ];

    return (
        <section className="section">
            <div className="container">
                <div style={{
                    background: 'linear-gradient(135deg, #f7f7f5, #e8e9e2)',
                    borderRadius: '1.5rem',
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 12px 40px -12px rgba(0,0,0,0.12)',
                    textAlign: 'center'
                }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', background: 'rgba(1,49,23,0.08)', borderRadius: '999px', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-primary)', display: 'block' }} />
                        Fluxo de Operação
                    </div>
                    <h2 style={{ marginBottom: '0.75rem' }}>Como Funciona</h2>
                    <p style={{ maxWidth: '720px', margin: '0 auto 1.5rem auto', color: 'var(--color-text-muted)' }}>
                        Do primeiro contato ao pós-venda: atendimento imediato, follow-up automático e gestão completa no CRM.
                    </p>
                    <button className="btn btn-primary" onClick={() => setIsOpen(true)} style={{ justifyContent: 'center' }}>
                        Ver Fluxo
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(6px)',
                            zIndex: 80,
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            padding: 'clamp(1rem, 3vw, 2rem)',
                            overflowY: 'auto'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            style={{
                                background: 'white',
                                borderRadius: '1.25rem',
                                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                                width: 'min(1100px, 100%)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                                position: 'relative',
                                overflow: 'hidden',
                                maxHeight: '90vh',
                                overflowY: 'auto'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', border: '1px solid #e5e7eb', background: '#f9fafb', color: '#111827', borderRadius: '0.5rem', padding: '0.4rem 0.7rem', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    <ArrowLeft size={16} /> Voltar
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#6b7280' }}
                                    aria-label="Fechar"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>Fluxo Visual</p>
                                <h3 style={{ margin: '0.25rem 0 0.5rem 0' }}>Primeiro contato → Conversão → Fidelização</h3>
                                <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Veja as etapas, automações e o CRM conectando tudo.</p>
                            </div>

                            <div style={{ position: 'relative', background: '#f8f9fb', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 30%, rgba(1,49,23,0.04), transparent 45%), radial-gradient(circle at 80% 70%, rgba(170,190,214,0.08), transparent 50%)' }} />

                                <div style={{ position: 'relative', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', alignItems: 'center', padding: '0.5rem' }}>
                                    {mainFlow.map((step, index) => (
                                        <React.Fragment key={index}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.08 }}
                                                style={{
                                                    background: 'white',
                                                    borderRadius: '0.9rem',
                                                    border: '1px solid #e5e7eb',
                                                    padding: '1rem',
                                                    textAlign: 'center',
                                                    boxShadow: '0 10px 24px -14px rgba(0,0,0,0.18)',
                                                    position: 'relative',
                                                    zIndex: 1
                                                }}
                                            >
                                                <div style={{
                                                    width: '48px',
                                                    height: '48px',
                                                    borderRadius: '50%',
                                                    margin: '0 auto 0.75rem auto',
                                                    background: 'rgba(1,49,23,0.08)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'var(--color-primary)'
                                                }}>
                                                    <step.icon size={22} />
                                                </div>
                                                <div style={{ fontWeight: 700, marginBottom: '0.2rem' }}>{step.label}</div>
                                                <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>{step.sublabel}</div>
                                            </motion.div>

                                            {index < mainFlow.length - 1 && (
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <ArrowRight size={24} color="var(--color-primary)" style={{ opacity: 0.6 }} />
                                                </div>
                                            )}
                                        </React.Fragment>
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

export default FlowDiagram;
