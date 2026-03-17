import React, { useState } from 'react';

const Investment = () => {
    const [showViability, setShowViability] = useState(false);

    // Premissas da viabilidade
    const leads = 600;
    const ticket = 100;
    const currentConv = 25; // dentro do benchmark saudável 20–35%
    const upliftFactor = 1.5;
    const setupCost = 5000;
    const monthlyFee = 2000;

    const currentRevenue = leads * (currentConv / 100) * ticket;
    const projectedConv = currentConv * upliftFactor;
    const projectedRevenue = leads * (projectedConv / 100) * ticket;
    const extraRevenue = projectedRevenue - currentRevenue;
    const netAfterFee = extraRevenue - monthlyFee;

    // Payback considerando o ganho líquido mensal
    const paybackMonths = netAfterFee > 0 ? setupCost / netAfterFee : Infinity;
    const paybackDays = Math.round(paybackMonths * 30);

    // Horizonte mínimo de 12 meses
    const annualNetGain = netAfterFee * 12 - setupCost;
    const totalInvestment = setupCost + monthlyFee * 12;
    const annualRoi = totalInvestment > 0 ? (annualNetGain / totalInvestment) * 100 : 0;

    const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return (
        <section className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2>Investimento</h2>
                    <p>Tudo o que você precisa para escalar sua operação comercial.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        className="glass-panel-dark"
                        style={{
                            padding: '0',
                            textAlign: 'left',
                            maxWidth: '900px',
                            width: '100%',
                            background: '#0f172a',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.2fr',
                            position: 'relative'
                        }}
                    >
                        {/* Left Side: Features */}
                        <div style={{ padding: '3rem', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                background: 'rgba(16, 185, 129, 0.1)',
                                color: '#10b981',
                                borderRadius: '999px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(16, 185, 129, 0.2)'
                            }}>
                                PACOTE COMPLETO
                            </div>
                            <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '1rem' }}>Ecossistema Convert.AI</h3>
                            <p style={{ color: '#a1a1aa', marginBottom: '2rem', lineHeight: 1.6 }}>
                                A solução definitiva para transformar seu atendimento em uma máquina de vendas 24/7.
                            </p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Setup e Configuração Inicial',
                                    'Treinamento da IA (Base de Conhecimento)',
                                    'Integração com WhatsApp Oficial',
                                    'Dashboard de Métricas em Tempo Real',
                                    'Suporte Prioritário'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e4e4e7' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side: Pricing */}
                        <div style={{
                            padding: '3rem',
                            background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.1), transparent 60%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ color: '#71717a', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '0.5rem' }}>
                                    INVESTIMENTO ÚNICO
                                </div>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', fontFamily: 'monospace', letterSpacing: '-0.05em' }}>R$ 5.000</span>
                                </div>
                                <div style={{ color: '#e4e4e7', fontSize: '1rem', fontWeight: 500, marginTop: '0.75rem' }}>
                                    Desenvolvimento e Implementação do Sistema
                                </div>
                                <div style={{ color: '#71717a', fontSize: '0.8rem', marginTop: '0.75rem', lineHeight: 1.5 }}>
                                    Condições de pagamento:
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', marginBottom: 0 }}>
                                        <li>50% à vista e 50% na entrega do projeto</li>
                                        <li>Parcelamento em até 12x no cartão de crédito*</li>
                                    </ul>
                                </div>
                            </div>

                            <div style={{ marginBottom: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', gap: '1rem' }}>
                                    <span style={{ color: '#e4e4e7', fontWeight: 600, whiteSpace: 'nowrap' }}>Mensalidade</span>
                                    <span style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem', whiteSpace: 'nowrap' }}>R$ 2.000</span>
                                </div>
                                <div style={{ color: '#71717a', fontSize: '0.85rem' }}>
                                    Inclui custos de servidores, banco de dados, suporte e melhoria contínua da IA.
                                </div>
                            </div>

                            <button
                                className="btn"
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    height: '3.25rem',
                                    fontSize: '0.95rem',
                                    fontWeight: 700,
                                    borderRadius: '999px',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    color: '#10b981',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    boxShadow: 'none',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em'
                                }}
                                onClick={() => setShowViability(true)}
                            >
                                Veja a Viabilidade do Projeto
                            </button>
                            <p style={{ textAlign: 'center', color: '#52525b', fontSize: '0.8rem', marginTop: '1rem' }}>
                                *Taxa de juros aplicada ao contratante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {showViability && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.65)',
                        zIndex: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}
                >
                    <div
                        style={{
                            width: 'min(520px, 100%)',
                            background: '#f7f7f3',
                            borderRadius: '1.5rem',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 25px 70px rgba(0,0,0,0.45)',
                            padding: '1.75rem',
                            color: '#1f2937',
                            position: 'relative',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{ display: 'inline-flex', padding: '0.35rem 0.85rem', background: 'rgba(1, 49, 23, 0.08)', borderRadius: '999px', border: '1px solid rgba(1,49,23,0.18)', color: '#013117', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                                Viabilidade
                            </div>
                            <button
                                onClick={() => setShowViability(false)}
                                aria-label="Fechar"
                                style={{
                                    background: 'transparent',
                                    color: '#6b7280',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    borderRadius: '999px',
                                    padding: '0.35rem 0.9rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                            >
                                Voltar
                            </button>
                        </div>

                        <h3 style={{ color: '#013117', marginBottom: '0.5rem', fontSize: '1.6rem' }}>Veja como o projeto se paga</h3>
                        <p style={{ color: '#374151', marginBottom: '0.25rem', lineHeight: 1.5 }}>
                            <strong>Premissas:</strong>
                            <br />
                            Hoje: {leads} leads/mês
                            <br />
                            Ticket médio: {currency.format(ticket)}
                            <br />
                            Conversão: {currentConv}%
                            <br />
                            <br />
                            Com IA: + 50% de aumento na taxa de conversão.
                        </p>
                        <p style={{ color: '#4b5563', marginBottom: '1rem', lineHeight: 1.5, fontSize: '0.8rem', fontStyle: 'italic' }}>
                            Estimativa mercado
                        </p>

                        <div style={{ display: 'grid', gap: '0.85rem', marginBottom: '1.25rem' }}>
                            <div
                                style={{
                                    display: 'grid',
                                    gap: '0.85rem',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
                                }}
                            >
                                {/* Situação atual */}
                                <div style={{ padding: '0.9rem', borderRadius: '0.85rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                                        Situação atual do salão
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.2rem' }}>
                                        Conversão atual: <strong>{currentConv}%</strong>
                                    </div>
                                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1rem' }}>
                                        Faturamento mensal: {currency.format(currentRevenue)}
                                    </div>
                                </div>

                                {/* Projeção com IA */}
                                <div style={{ padding: '0.9rem', borderRadius: '0.85rem', background: '#eef7ee', border: '1px solid rgba(1,49,23,0.12)' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#013117', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                                        Projeção com IA
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: '#065f46', marginBottom: '0.2rem' }}>
                                        Conversão estimada: <strong>{projectedConv}%</strong>
                                    </div>
                                    <div style={{ fontWeight: 800, color: '#013117', fontSize: '1rem' }}>
                                        Faturamento mensal: {currency.format(projectedRevenue)}
                                    </div>
                                </div>
                            </div>

                            {/* Resultado do projeto */}
                            <div style={{ padding: '1rem', borderRadius: '0.9rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
                                <div style={{ fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                                    Resultado do projeto (horizonte de 12 meses)
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.5 }}>
                                    Ganho líquido mensal estimado: <strong>{currency.format(netAfterFee)}</strong>
                                    <br />
                                    Ganho líquido acumulado em 12 meses (já considerando setup e mensalidade):{' '}
                                    <strong>{currency.format(annualNetGain)}</strong>
                                    <br />
                                    Payback estimado: <strong>{paybackDays} dias</strong> ({Math.ceil(paybackMonths)} meses, aproximadamente)
                                    <br />
                                    ROI em 12 meses sobre o investimento no projeto: <strong>{annualRoi.toFixed(0)}%</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Responsiveness Style Injection */}
            <style>{`
                @media (max-width: 768px) {
                    .glass-panel-dark {
                        grid-template-columns: 1fr !important;
                        border-radius: 1.25rem !important;
                    }
                    .glass-panel-dark > div:first-child {
                        border-right: none !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                    }
                    .glass-panel-dark > div {
                        padding: 2.25rem !important;
                    }
                    .glass-panel-dark h3 {
                        font-size: 1.45rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Investment;
