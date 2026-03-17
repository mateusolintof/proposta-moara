import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, CircleHelp } from 'lucide-react';

const SolutionCard = ({ solution, index }) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'white'
            }}
        >
            {/* Spotlight Effect */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${parseInt(solution.color.slice(1, 3), 16)}, ${parseInt(solution.color.slice(3, 5), 16)}, ${parseInt(solution.color.slice(5, 7), 16)}, 0.06), transparent 40%)`,
                    opacity: isHovering ? 1 : 0,
                    transition: 'opacity 0.3s',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: `rgba(${parseInt(solution.color.slice(1, 3), 16)}, ${parseInt(solution.color.slice(3, 5), 16)}, ${parseInt(solution.color.slice(5, 7), 16)}, 0.1)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                }}>
                    <solution.icon size={28} color={solution.color} />
                </div>

                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    margin: '0 0 0.5rem 0'
                }}>
                    {solution.title}
                </h3>

                <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                    margin: '0 0 1rem 0'
                }}>
                    {solution.description}
                </p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: 'auto'
                }}>
                    {solution.highlights.map((highlight, i) => (
                        <span
                            key={i}
                            style={{
                                fontSize: '0.75rem',
                                padding: '0.25rem 0.75rem',
                                background: 'var(--color-bg)',
                                borderRadius: '1rem',
                                color: 'var(--color-text-muted)',
                                border: '1px solid var(--color-border)'
                            }}
                        >
                            {highlight}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Solutions = () => {
    const solutions = [
        {
            icon: MessageSquareText,
            title: 'Agente de Atendimento Completo',
            description: 'Agente com conhecimento completo sobre a Start Move: planos, valores, metodologia e diferenciais. Atende e qualifica leads via WhatsApp 24/7 com respostas naturais e contextuais. Em situações que exigem atenção especial ou negociações diferenciadas, a conversa é encaminhada diretamente para a Moara.',
            highlights: ['Disponível 24/7', 'Conhecimento completo do negócio', 'Respostas naturais e contextuais', 'Encaminhamento para a Moara'],
            color: '#3b82f6'
        },
        {
            icon: CircleHelp,
            title: 'Agente de FAQ',
            description: 'Responde dúvidas frequentes dos alunos e interessados com base de conhecimento completa sobre treinos, metodologia, planos e logística da assessoria. Disponível a qualquer hora para tirar dúvidas com respostas precisas e instantâneas.',
            highlights: ['Base de conhecimento completa', 'Respostas instantâneas', 'Tira dúvidas 24/7'],
            color: '#10b981'
        }
    ];

    return (
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(139, 92, 246, 0.1)',
                        borderRadius: '2rem',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        marginBottom: '1rem',
                        color: '#8b5cf6'
                    }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>O que entregamos</span>
                    </div>
                    <h2>Soluções Integradas para a Start Move</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Dois agentes inteligentes que trabalham juntos para atender, qualificar e tirar dúvidas dos seus leads automaticamente.
                    </p>
                </div>

                <div className="layout-grid cols-2 align-start">
                    {solutions.map((solution, index) => (
                        <SolutionCard key={index} solution={solution} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
