import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Zap, Clock, MessageSquareText } from 'lucide-react';

const iaConversation = [
    {
        sender: 'bot',
        text: 'Oi, Ana! Tudo bem? 😊 Sou a assistente da Start Move, assessoria de corrida da Moara Souza. Vi que você se interessou pela assessoria. Posso te contar como funciona?',
        time: '09:02',
    },
    {
        sender: 'user',
        text: 'Oi! Sim, quero saber mais. Sou iniciante na corrida.',
        time: '09:03',
    },
    {
        sender: 'bot',
        text: 'Que legal que quer começar, Ana! A Moara tem um método especial pra iniciantes — o treino é progressivo, respeitando seu corpo e evitando lesões.',
        time: '09:03',
    },
    {
        sender: 'bot',
        text: 'A assessoria inclui planilha de treino personalizada, acompanhamento semanal e suporte pra tirar dúvidas. Quer saber sobre valores e como funciona o acompanhamento?',
        time: '09:04',
    },
    {
        sender: 'user',
        text: 'Sim, por favor!',
        time: '09:04',
    },
    {
        sender: 'bot',
        text: 'Perfeito! Para o plano iniciante, o investimento é de R$ 197/mês. Inclui treinos personalizados 3x por semana, ajustes semanais e acesso direto à Moara pra dúvidas.',
        time: '09:05',
    },
    {
        sender: 'bot',
        text: 'Posso agendar uma conversa rápida com a Moara pra ela montar um plano sob medida pra você? 🏃‍♀️',
        time: '09:05',
    },
];

const humanConversation = [
    {
        sender: 'bot',
        text: 'Oi! Tudo bem?',
        time: '09:02',
    },
    {
        sender: 'user',
        text: 'Oi! Quero saber sobre a assessoria de corrida',
        time: '09:03',
    },
    {
        sender: 'bot',
        text: 'Claro! Temos assessoria sim',
        time: '09:47',
    },
    {
        sender: 'bot',
        text: 'Você já corre?',
        time: '09:47',
    },
    {
        sender: 'user',
        text: 'Sou iniciante. Quanto custa?',
        time: '09:48',
    },
    {
        sender: 'bot',
        text: 'Vou verificar e te retorno!',
        time: '10:15',
    },
];

const ChatBubble = ({ message, isIA }) => {
    const isBot = message.sender === 'bot';
    const accentColor = isIA ? 'var(--color-primary)' : '#6b7280';

    return (
        <div style={{ display: 'flex', justifyContent: isBot ? 'flex-start' : 'flex-end', marginBottom: '0.5rem' }}>
            <div style={{
                maxWidth: '85%',
                borderRadius: '0.75rem',
                borderTopLeftRadius: isBot ? '0.15rem' : '0.75rem',
                borderTopRightRadius: !isBot ? '0.15rem' : '0.75rem',
                padding: '0.5rem 0.75rem',
                background: isBot ? 'var(--color-bg)' : 'rgba(170, 190, 214, 0.15)',
                border: '1px solid var(--color-border)'
            }}>
                {isBot && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                        {isIA ? (
                            <Bot size={12} color={accentColor} />
                        ) : (
                            <User size={12} color={accentColor} />
                        )}
                        <span style={{ fontSize: '0.65rem', fontWeight: 600, color: accentColor }}>
                            {isIA ? 'Agente IA' : 'Atendente'}
                        </span>
                        {message.time && (
                            <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>{message.time}</span>
                        )}
                    </div>
                )}
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text)', lineHeight: 1.5, margin: 0 }}>{message.text}</p>
                {!isBot && message.time && (
                    <p style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', textAlign: 'right', marginTop: '0.15rem', marginBottom: 0 }}>
                        {message.time}
                    </p>
                )}
            </div>
        </div>
    );
};

const ConversationCard = ({ title, subtitle, messages, isIA, highlight, highlightColor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{
                padding: 0,
                overflow: 'hidden',
                background: 'white'
            }}
        >
            {/* Header */}
            <div style={{
                padding: '0.85rem 1rem',
                borderBottom: '1px solid var(--color-border)',
                background: `${highlightColor}08`
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {isIA ? (
                            <Bot size={20} color={highlightColor} />
                        ) : (
                            <User size={20} color={highlightColor} />
                        )}
                        <div>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: 'var(--color-text)' }}>{title}</h4>
                            <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', margin: 0 }}>{subtitle}</p>
                        </div>
                    </div>
                    <span style={{
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        fontWeight: 600,
                        background: `${highlightColor}15`,
                        color: highlightColor,
                        border: `1px solid ${highlightColor}30`
                    }}>
                        {highlight}
                    </span>
                </div>
            </div>

            {/* Chat */}
            <div style={{ padding: '1rem', height: '320px', overflowY: 'auto' }}>
                {messages.map((message, index) => (
                    <ChatBubble key={index} message={message} isIA={isIA} />
                ))}
            </div>
        </motion.div>
    );
};

const Comparativo = () => {
    return (
        <section className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(1, 49, 23, 0.08)',
                        borderRadius: '2rem',
                        border: '1px solid rgba(1, 49, 23, 0.15)',
                        marginBottom: '1rem',
                        color: 'var(--color-primary)'
                    }}>
                        <MessageSquareText size={16} />
                        <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Comparativo</span>
                    </div>
                    <h2>Atendimento IA vs Humano</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Veja a diferença entre um atendimento automatizado com IA e um atendimento humano tradicional.
                    </p>
                </div>

                {/* Comparison Cards */}
                <div className="layout-grid cols-2 align-start">
                    <ConversationCard
                        title="Atendimento por IA"
                        subtitle="Agente automatizado"
                        messages={iaConversation}
                        isIA={true}
                        highlight="Resposta em segundos"
                        highlightColor="#013117"
                    />
                    <ConversationCard
                        title="Atendimento Humano"
                        subtitle="Atendente tradicional"
                        messages={humanConversation}
                        isIA={false}
                        highlight="Resposta em minutos"
                        highlightColor="#6b7280"
                    />
                </div>

                {/* Key Differences */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1rem',
                        marginTop: '2rem'
                    }}
                >
                    <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '3px solid var(--color-primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <Zap size={16} color="var(--color-primary)" />
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>Velocidade</span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                            IA responde instantaneamente, mesmo fora do horário comercial. Humano depende de disponibilidade.
                        </p>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '3px solid var(--color-primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <Bot size={16} color="var(--color-primary)" />
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>Contexto</span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                            IA faz perguntas de qualificação e adapta a conversa ao perfil do lead automaticamente.
                        </p>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '3px solid var(--color-primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <Clock size={16} color="var(--color-primary)" />
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>Consistência</span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                            IA mantém o padrão de qualidade em 100% das conversas, sem variação de humor ou cansaço.
                        </p>
                    </div>
                </motion.div>

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '1.5rem' }}>
                    * Conversas ilustrativas baseadas em cenários reais
                </p>
            </div>
        </section>
    );
};

export default Comparativo;
