import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

const ROICalculator = () => {
    const [leads, setLeads] = useState(100);
    const [ticket, setTicket] = useState(500);
    const [currentConv, setCurrentConv] = useState(5);

    const projectedConv = currentConv * 1.5; // Conservative 50% increase
    const currentRevenue = leads * (currentConv / 100) * ticket;
    const projectedRevenue = leads * (projectedConv / 100) * ticket;
    const increase = projectedRevenue - currentRevenue;

    const snapLeadValue = (value) => {
        if (value < 100) return 100;
        if (value <= 1000) return Math.round((value - 100) / 50) * 50 + 100;
        if (value <= 2500) return Math.round(value / 100) * 100;
        if (value <= 5000) return Math.round(value / 500) * 500;
        return Math.round(value / 1000) * 1000;
    };

    return (
        <section className="section" style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-secondary))' }}>
            <div className="container">
                <div className="layout-grid cols-2 align-start roi-grid">
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(245, 158, 11, 0.1)',
                            borderRadius: '2rem',
                            border: '1px solid rgba(245, 158, 11, 0.2)',
                            marginBottom: '1rem',
                            color: '#f59e0b'
                        }}>
                            <Calculator size={16} />
                            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Simulador</span>
                        </div>
                        <h2>Simule o Impacto na Sua Operação</h2>
                        <p>
                            Entenda como a redução no tempo de resposta e a automação de follow-ups podem impactar sua receita mensal.
                        </p>

                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Leads Mensais</label>
                                <input
                                    type="range"
                                    min="100"
                                    max="10000"
                                    step="50"
                                    value={leads}
                                    onChange={(e) => setLeads(snapLeadValue(Number(e.target.value)))}
                                    style={{ width: '100%', accentColor: 'var(--color-primary)' }}
                                />
                                <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>{leads}</div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Ticket Médio (R$)</label>
                                <input
                                    type="range"
                                    min="100"
                                    max="5000"
                                    step="100"
                                    value={ticket}
                                    onChange={(e) => setTicket(Number(e.target.value))}
                                    style={{ width: '100%', accentColor: 'var(--color-primary)' }}
                                />
                                <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>R$ {ticket}</div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Conversão Atual (%)</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    step="0.5"
                                    value={currentConv}
                                    onChange={(e) => setCurrentConv(Number(e.target.value))}
                                    style={{ width: '100%', accentColor: 'var(--color-primary)' }}
                                />
                                <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>{currentConv}%</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                            <div style={{
                                position: 'absolute',
                                top: '-50%',
                                right: '-50%',
                                width: '100%',
                                height: '100%',
                                background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
                                opacity: 0.2
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Receita Atual Estimada</div>
                                    <div style={{ fontSize: 'clamp(1.8rem, 5vw, 2.2rem)', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currentRevenue)}
                                    </div>
                                </div>

                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                        <TrendingUp size={20} color="var(--color-accent)" />
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: 600 }}>Potencial com IA (+50% conv.)</div>
                                    </div>
                                    <motion.div
                                        key={projectedRevenue}
                                        initial={{ scale: 0.9, opacity: 0.5 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        style={{ fontSize: 'clamp(2.4rem, 7vw, 3.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.1 }}
                                    >
                                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectedRevenue)}
                                    </motion.div>
                                    <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '0.5rem', border: '1px solid rgba(16, 185, 129, 0.2)', fontSize: '0.92rem' }}>
                                        <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                                            +{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(increase)}
                                        </span>
                                        <span style={{ color: 'var(--color-text-muted)' }}> de receita extra mensal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
