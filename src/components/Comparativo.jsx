import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, X, ZoomIn, MessageSquareText, Clock, Heart, MessageCircle, AlertTriangle, Timer, TextSelect, Target, Sparkles, ArrowLeft } from 'lucide-react';

const iaImages = [
    { src: '/comparativo/atendimentoIA1.png', alt: 'Atendimento IA - Parte 1' },
    { src: '/comparativo/atendimentoIA2.png', alt: 'Atendimento IA - Parte 2' },
];

const humanImages = [
    { src: '/comparativo/atendimentohumano1.png', alt: 'Atendimento Humano - Parte 1' },
    { src: '/comparativo/atendimentohumano2.png', alt: 'Atendimento Humano - Parte 2' },
];

const ImageCard = ({ image, borderColor, onSelect }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <motion.button
            type="button"
            onClick={(e) => { e.stopPropagation(); onSelect(image); }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
                position: 'relative',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                border: `1px solid ${borderColor}40`,
                background: 'white',
                cursor: 'pointer',
                padding: 0,
                display: 'block',
                width: '100%'
            }}
        >
            <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
                position: 'absolute',
                inset: 0,
                background: isHovering ? 'rgba(0,0,0,0.4)' : 'transparent',
                transition: 'background 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ZoomIn
                    size={28}
                    color="white"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        transition: 'opacity 0.3s'
                    }}
                />
            </div>
        </motion.button>
    );
};

const Comparativo = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                {/* Section header + prints + CTA button */}
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
                        Prints reais de conversas mostrando a diferença entre o atendimento automatizado com IA e o atendimento humano tradicional.
                    </p>
                </div>

                {/* Prints grid */}
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2.5rem'
                    }}>
                        {/* IA Column */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                                <div style={{ padding: '0.4rem', borderRadius: '0.5rem', background: 'rgba(1, 49, 23, 0.1)' }}>
                                    <Bot size={18} color="var(--color-primary)" />
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Atendimento por IA</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                {iaImages.map((image, index) => (
                                    <ImageCard key={index} image={image} borderColor="var(--color-primary)" onSelect={setSelectedImage} />
                                ))}
                            </div>
                        </div>

                        {/* Human Column */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                                <div style={{ padding: '0.4rem', borderRadius: '0.5rem', background: 'rgba(239, 68, 68, 0.1)' }}>
                                    <User size={18} color="#ef4444" />
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Atendimento Humano</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                {humanImages.map((image, index) => (
                                    <ImageCard key={index} image={image} borderColor="#ef4444" onSelect={setSelectedImage} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA to open analysis modal */}
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsModalOpen(true)}
                        style={{ justifyContent: 'center' }}
                    >
                        Ver Análise Comparativa
                    </button>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
                        Clique nas imagens para ampliar. * Prints reais de atendimentos da Convert.AI (nomes alterados para privacidade)
                    </p>
                </div>
            </div>

            {/* ===== MODAL: Análise Comparativa ===== */}
            <AnimatePresence>
                {isModalOpen && (
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
                                maxHeight: '92vh',
                                overflowY: 'auto'
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', border: '1px solid #e5e7eb', background: '#f9fafb', color: '#111827', borderRadius: '0.5rem', padding: '0.4rem 0.7rem', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    <ArrowLeft size={16} /> Voltar
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#6b7280' }}
                                    aria-label="Fechar"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>Análise Comparativa</h3>
                                <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Veja em detalhe o que diferencia cada abordagem nos prints reais.</p>
                            </div>

                            {/* Two columns of analysis */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                                {/* IA Insights */}
                                <div style={{
                                    background: 'rgba(1, 49, 23, 0.04)',
                                    border: '1px solid rgba(1, 49, 23, 0.12)',
                                    borderRadius: '1rem',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Bot size={18} color="var(--color-primary)" />
                                        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                            Atendimento por IA
                                        </p>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <Clock size={15} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.55 }}>
                                            <strong>Resposta em segundos</strong> — repare nos horários: a lead manda mensagem às 09:43 e a IA responde às 09:44. Zero tempo de espera. O lead nunca esfria.
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <Target size={15} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.55 }}>
                                            <strong>Qualificação consultiva</strong> — a IA não sai empurrando serviço. Ela primeiro pergunta sobre o histórico da lead: "Você já tentou de outras formas? Foi com dieta, academia ou acompanhamento médico?". Isso gera confiança e coleta informações para personalizar a abordagem.
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <Heart size={15} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.55 }}>
                                            <strong>Contorno de objeção natural</strong> — quando a lead diz que tentou emagrecer "tomando chá", a IA não ignora. Ela acolhe: "Muita gente chega aqui contando que já tentou vários métodos caseiros, mas sente dificuldade de manter o resultado". Isso transforma uma objeção em ponte para a solução.
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <Sparkles size={15} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.55 }}>
                                            <strong>Diferenciação do serviço</strong> — a IA sabe apresentar o valor real: "O Dr. Igor não passa apenas uma dieta. Ele faz uma análise profunda do seu histórico de saúde. A consulta tem cerca de 1h30". Isso posiciona o serviço como premium e justifica o investimento.
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <MessageCircle size={15} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.55 }}>
                                            <strong>Tom humano e fragmentado</strong> — as mensagens são curtas e sequenciais, como um humano faria no WhatsApp. Usa o nome da pessoa ("Entendi, Vitoria..."), criando proximidade. Ninguém percebe que é uma IA.
                                        </p>
                                    </div>
                                </div>

                                {/* Human Insights */}
                                <div style={{
                                    background: 'rgba(239, 68, 68, 0.04)',
                                    border: '1px solid rgba(239, 68, 68, 0.12)',
                                    borderRadius: '1rem',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <User size={18} color="#ef4444" />
                                        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ef4444', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                            Atendimento Humano
                                        </p>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <Timer size={15} color="#ef4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.55 }}>
                                            <strong>Demora de 7 minutos a 1 hora</strong> — a lead manda mensagem às 09:36 e só recebe resposta às 09:43. No segundo print, o intervalo entre mensagens chega a quase 1 hora. Nesse tempo, o lead já pode ter procurado um concorrente.
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <AlertTriangle size={15} color="#ef4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.55 }}>
                                            <strong>Zero qualificação, só script</strong> — a lead diz que quer ganhar massa e a resposta é genérica: "vai amar o acompanhamento". Não pergunta sobre histórico, objetivo, restrições. Não adapta a abordagem ao que a pessoa disse.
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <TextSelect size={15} color="#ef4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.55 }}>
                                            <strong>Bloco enorme de texto</strong> — no segundo print, o atendente envia um parágrafo gigante sobre bioimpedância, composição corporal, gordura visceral etc. Isso sobrecarrega o lead e faz com que muitos parem de responder.
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <User size={15} color="#ef4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.55 }}>
                                            <strong>Sem personalização</strong> — as respostas poderiam ser enviadas para qualquer pessoa. Não usa o nome do lead, não referencia o que foi dito antes. A lead se sente como mais uma na fila.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Conclusion Block inside modal */}
                            <div style={{
                                background: '#0f172a',
                                borderRadius: '1rem',
                                padding: '1.75rem 2rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <Sparkles size={18} color="#10b981" />
                                    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#10b981', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        O que isso significa para a Start Move
                                    </p>
                                </div>
                                <p style={{ color: '#e4e4e7', fontSize: '1rem', lineHeight: 1.7, margin: '0 0 1.25rem 0' }}>
                                    Esses prints são de um agente real que a Convert criou para outra empresa. <strong style={{ color: 'white' }}>O mesmo nível de qualidade será aplicado na Start Move</strong> — mas adaptado ao universo da assessoria esportiva: planos de treino, metodologia, valores e diferenciais da Moara.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '0.75rem', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                                        <p style={{ fontSize: '0.85rem', color: '#e4e4e7', margin: 0, lineHeight: 1.5 }}>
                                            <strong style={{ color: '#10b981' }}>Cada lead atendido em segundos</strong> — enquanto a Moara foca nos treinos, a IA cuida de quem chega pelo WhatsApp.
                                        </p>
                                    </div>
                                    <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '0.75rem', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                                        <p style={{ fontSize: '0.85rem', color: '#e4e4e7', margin: 0, lineHeight: 1.5 }}>
                                            <strong style={{ color: '#10b981' }}>Qualificação inteligente</strong> — a IA entende o nível do lead (iniciante, intermediário, avançado) e apresenta o plano certo.
                                        </p>
                                    </div>
                                    <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '0.75rem', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                                        <p style={{ fontSize: '0.85rem', color: '#e4e4e7', margin: 0, lineHeight: 1.5 }}>
                                            <strong style={{ color: '#10b981' }}>Encaminhamento natural</strong> — quando o lead está pronto, a IA passa a conversa para a Moara fechar o negócio pessoalmente.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile responsiveness for modal */}
                            <style>{`
                                @media (max-width: 768px) {
                                    .comparativo-modal-grid {
                                        grid-template-columns: 1fr !important;
                                    }
                                }
                            `}</style>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fullscreen Lightbox for images */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 100,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0,0,0,0.92)',
                            backdropFilter: 'blur(4px)'
                        }}
                    >
                        <motion.button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                padding: '0.5rem',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                cursor: 'pointer',
                                zIndex: 10
                            }}
                        >
                            <X size={24} color="white" />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: '95vw', maxHeight: '90vh' }}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                style={{
                                    maxWidth: '95vw',
                                    maxHeight: '90vh',
                                    objectFit: 'contain',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Comparativo;
