import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Video, MoreVertical, CheckCheck, Bot, Info, X } from 'lucide-react';

const ChatDemo = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Oi, boa tarde! Tudo bem?", sender: 'user', time: '10:00' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [simulationStarted, setSimulationStarted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const messagesContainerRef = useRef(null);

    const scrollToBottom = (behavior = 'auto') => {
        const container = messagesContainerRef.current;
        if (!container) return;

        container.scrollTo({
            top: container.scrollHeight,
            behavior
        });
    };

    useEffect(() => {
        // Keep the conversation pinned to the end without reposicionando a página inteira
        scrollToBottom(simulationStarted ? 'smooth' : 'auto');
    }, [messages, isTyping, simulationStarted]);

    const script = [
        { text: "Oi! Tudo bem? 😊", delay: 1600 },
        { text: "Sou a assistente da Start Move, assessoria de corrida da Moara Souza.", delay: 1800 },
        { text: "Como posso te ajudar hoje?", delay: 1600 },
        { userText: "Oi! Vi sobre a assessoria de corrida e gostaria de saber mais", delay: 1600 },
        { text: "Que legal que você se interessou! 🏃‍♀️", delay: 1300 },
        { text: "A Start Move é uma assessoria esportiva focada em corrida, com treinos personalizados pra cada aluno.", delay: 1800 },
        { text: "Temos planos pra iniciantes, intermediários e avançados. Qual é o seu nível hoje?", delay: 1800 },
        { userText: "Sou iniciante, nunca corri com acompanhamento", delay: 1600 },
        { text: "Perfeito! A Moara tem uma metodologia especial pra quem tá começando.", delay: 1800 },
        { text: "O treino é progressivo, respeitando seu corpo e evitando lesões. Você recebe planilha personalizada e acompanhamento semanal.", delay: 2000 },
        { userText: "Que legal! E quanto custa?", delay: 1600 },
        { text: "O plano iniciante é R$ 197/mês e inclui treinos personalizados 3x por semana + suporte direto.", delay: 1950 },
        { text: "Quer que eu agende uma conversa rápida com a Moara? Assim ela pode entender melhor seus objetivos e montar um plano sob medida pra você! 💪", delay: 2000 },
        { userText: "Quero sim!", delay: 1600 },
        { text: "Maravilha! ✨", delay: 1300 },
        { text: "Vou encaminhar você pra Moara. Ela vai entrar em contato pra agendar a conversa.", delay: 1950 },
        { text: "Seja bem-vinda à Start Move! 🏃‍♀️", delay: 1600 }
    ];

    const runSimulation = async () => {
        setSimulationStarted(true);
        setMessages([{ id: 1, text: "Oi, boa tarde! Tudo bem?", sender: 'user', time: '10:00' }]);

        for (let step of script) {
            if (step.userText) {
                await new Promise(r => setTimeout(r, step.delay));
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: step.userText,
                    sender: 'user',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
            } else {
                setIsTyping(true);
                await new Promise(r => setTimeout(r, step.delay));
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: step.text,
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
            }
        }
    };

    return (
        <section className="section" style={{ background: 'var(--color-bg-secondary)', paddingTop: '1.5rem' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.75rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.55rem 1.1rem',
                        background: 'rgba(1, 49, 23, 0.12)',
                        borderRadius: '2rem',
                        border: '1px solid rgba(1, 49, 23, 0.2)',
                        marginBottom: '1rem',
                        color: 'var(--color-primary)',
                        fontWeight: 700,
                        letterSpacing: '-0.01em'
                    }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', display: 'block' }}></span>
                        <span style={{ fontSize: '0.9rem' }}>Demonstração em 30 segundos</span>
                    </div>
                    <h2 style={{ textAlign: 'center' }}>Atendimento via WhatsApp</h2>
                    <p style={{ textAlign: 'center', maxWidth: '560px', marginBottom: '0.75rem' }}>
                        Veja como o agente interage de forma contextual: entende a necessidade, apresenta os planos e encaminha para a Moara quando necessário.
                    </p>

                </div>

                <div className="layout-grid cols-2 align-start demo-grid" style={{ alignItems: 'center' }}>
                    {/* Features List */}
                    <div style={{ flex: 1, minWidth: 0, paddingRight: '0.25rem' }}>
                        {[
                            "Conversa natural e contextualizada como um humano conversaria",
                            "Conhecimento completo sobre planos e metodologia",
                            "Encaminhamento para a Moara quando necessário",
                            "Disponível 24 horas, 7 dias por semana"
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
                            >
                                <div style={{
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    padding: '0.5rem',
                                    borderRadius: '50%',
                                    color: 'var(--color-accent)'
                                }}>
                                    <CheckCheck size={20} />
                                </div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{feature}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Phone Mockup */}
                    <div style={{
                        width: '100%',
                        maxWidth: '380px',
                        height: '640px',
                        background: '#000',
                        borderRadius: '32px',
                        padding: 0,
                        boxShadow: '0 18px 42px -12px rgba(0,0,0,0.55)',
                        border: '4px solid #1f2937',
                        position: 'relative',
                        justifySelf: 'center',
                        margin: '0 auto',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* Screen */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: '#e5e7eb',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* Header */}
                            <div style={{
                                padding: '1rem',
                                background: 'var(--color-primary)', // Dark Green
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'white'
                            }}>
                                <div style={{ width: '35px', height: '35px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Bot size={20} color="#000" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Moara Souza</div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>online</div>
                                </div>
                                <Video size={20} />
                                <Phone size={20} />
                                <MoreVertical size={20} />
                            </div>

                            {/* Messages Area */}
                            <div
                                ref={messagesContainerRef}
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    overflowY: 'auto',
                                    backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
                                    backgroundSize: 'cover',
                                    backgroundColor: '#efeae2',
                                    minHeight: 0,
                                    maxHeight: '100%'
                                }}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.9)',
                                    color: '#54656f',
                                    fontSize: '0.75rem',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.5rem',
                                    textAlign: 'center',
                                    marginBottom: '1rem',
                                    boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)'
                                }}>
                                    As mensagens são protegidas por criptografia de ponta-a-ponta.
                                </div>

                                <AnimatePresence>
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            style={{
                                                display: 'flex',
                                                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                                marginBottom: '0.5rem'
                                            }}
                                        >
                                            <div style={{ maxWidth: '80%' }}>
                                                <div style={{
                                                    fontSize: '0.7rem',
                                                    color: '#667781',
                                                    marginBottom: '0.2rem',
                                                    marginLeft: '0.1rem'
                                                }}>
                                                    {msg.sender === 'user' ? 'Você' : 'Moara Souza'}
                                                </div>
                                                <div style={{
                                                    background: msg.sender === 'user' ? 'var(--color-success)' : 'white', // Light Green for User
                                                    color: '#111b21',
                                                    padding: '0.5rem 0.8rem',
                                                    borderRadius: '0.5rem',
                                                    borderTopRightRadius: msg.sender === 'user' ? 0 : '0.5rem',
                                                    borderTopLeftRadius: msg.sender === 'bot' ? 0 : '0.5rem',
                                                    boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)',
                                                    fontSize: '0.9rem',
                                                    position: 'relative'
                                                }}>
                                                    {msg.text}
                                                    <div style={{
                                                        fontSize: '0.65rem',
                                                        color: '#667781',
                                                        textAlign: 'right',
                                                        marginTop: '0.2rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'flex-end',
                                                        gap: '0.2rem'
                                                    }}>
                                                        {msg.time}
                                                        {msg.sender === 'user' && <CheckCheck size={14} color="#53bdeb" />}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        style={{
                                            background: 'white',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '0.5rem',
                                            borderTopLeftRadius: 0,
                                            width: 'fit-content',
                                            display: 'flex',
                                            gap: '4px',
                                            boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)'
                                        }}
                                    >
                                        <span className="typing-dot" style={{ width: '6px', height: '6px', background: '#667781', borderRadius: '50%', animation: 'typing 1.4s infinite ease-in-out both' }}></span>
                                        <span className="typing-dot" style={{ width: '6px', height: '6px', background: '#667781', borderRadius: '50%', animation: 'typing 1.4s infinite ease-in-out both 0.2s' }}></span>
                                        <span className="typing-dot" style={{ width: '6px', height: '6px', background: '#667781', borderRadius: '50%', animation: 'typing 1.4s infinite ease-in-out both 0.4s' }}></span>
                                    </motion.div>
                                )}
                            </div>

                            {/* Input Area */}
                            <div style={{
                                padding: '0.8rem',
                                background: '#f0f2f5',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem'
                            }}>
                                <div style={{
                                    flex: 1,
                                    background: 'white',
                                    borderRadius: '1.6rem',
                                    padding: '0.75rem 1.05rem',
                                    color: '#54656f',
                                    fontSize: '1rem'
                                }}>
                                    Digite uma mensagem
                                </div>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: 'var(--color-primary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Send size={22} color="#fff" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.6rem',
                        width: '100%',
                        gridColumn: '1 / -1',
                        justifySelf: 'center'
                    }}>
                        <button
                            className="btn btn-primary"
                            onClick={runSimulation}
                            style={{ marginTop: '1rem', width: '100%', maxWidth: '360px', justifyContent: 'center' }}
                        >
                            {simulationStarted ? 'Reiniciar Simulação' : 'Iniciar Simulação'}
                        </button>
                        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto' }}>
                            Exemplo ilustrativo de atendimento para assessoria de corrida.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--color-primary)',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                            }}
                        >
                            <Info size={14} />
                            Entenda a simulação
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal de Explicação da Simulação */}
            <AnimatePresence>
                {isModalOpen && (
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
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            style={{
                                background: 'white',
                                borderRadius: '1.5rem',
                                padding: '2rem',
                                maxWidth: '500px',
                                width: '100%',
                                position: 'relative',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#6b7280',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={24} />
                            </button>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                                A Humanização da IA
                            </h3>

                            <p style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>
                                O que você vê nesta simulação é como a nossa IA foi treinada para se comportar <strong>exatamente como um humano</strong>.
                            </p>

                            <div style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: '1rem', marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Por que parece tão natural?</h4>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>
                                        <strong>Chunknization (Fragmentação):</strong> A IA não manda "textões". Ela quebra as respostas em mensagens curtas e sequenciais, igual a gente faz no WhatsApp.
                                    </li>
                                    <li>
                                        <strong>Simulação de Digitação:</strong> Antes de enviar, ela mostra o "digitando...", criando o ritmo natural de uma conversa real.
                                    </li>
                                    <li>
                                        <strong>Contexto:</strong> Ela lembra do que foi dito antes e responde de forma coerente, não como um robô que só segue comandos.
                                    </li>
                                </ul>
                            </div>

                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                O objetivo é que o seu cliente sinta que está sendo atendido com atenção e cuidado, aumentando a confiança e a conversão.
                            </p>

                            <button
                                className="btn btn-primary"
                                onClick={() => setIsModalOpen(false)}
                                style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }}
                            >
                                Entendi
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ChatDemo;
