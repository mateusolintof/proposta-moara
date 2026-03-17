import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, X, ZoomIn, MessageSquareText } from 'lucide-react';

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
            onClick={() => onSelect(image)}
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
                        Prints reais de conversas mostrando a diferença entre o atendimento automatizado com IA e o atendimento humano tradicional.
                    </p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2rem'
                    }}>
                        {/* IA Images */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                                <div style={{
                                    padding: '0.4rem',
                                    borderRadius: '0.5rem',
                                    background: 'rgba(1, 49, 23, 0.1)'
                                }}>
                                    <Bot size={18} color="var(--color-primary)" />
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Atendimento por IA</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                {iaImages.map((image, index) => (
                                    <ImageCard
                                        key={index}
                                        image={image}
                                        borderColor="var(--color-primary)"
                                        onSelect={setSelectedImage}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Human Images */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                                <div style={{
                                    padding: '0.4rem',
                                    borderRadius: '0.5rem',
                                    background: 'rgba(239, 68, 68, 0.1)'
                                }}>
                                    <User size={18} color="#ef4444" />
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Atendimento Humano</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                {humanImages.map((image, index) => (
                                    <ImageCard
                                        key={index}
                                        image={image}
                                        borderColor="#ef4444"
                                        onSelect={setSelectedImage}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '1.5rem' }}>
                    Clique nas imagens para ampliar. * Prints reais de atendimentos da Convert.AI (nomes alterados para privacidade)
                </p>
            </div>

            {/* Fullscreen Lightbox */}
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

            {/* Mobile responsiveness */}
            <style>{`
                @media (max-width: 640px) {
                    .comparativo-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Comparativo;
