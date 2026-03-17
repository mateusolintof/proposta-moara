import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layout, MessageSquare, PieChart, Plus, MoreHorizontal, Search, Bell, Menu, ArrowLeft } from 'lucide-react';

const CRMModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('kanban');
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= 960 : false);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 960);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    if (!isOpen) return null;

    const navItems = [
        { id: 'kanban', icon: Layout, label: 'Pipeline', mobileLabel: 'Pipeline' },
        { id: 'inbox', icon: MessageSquare, label: 'Inbox Unificado', mobileLabel: 'Inbox' },
        { id: 'analytics', icon: PieChart, label: 'Resultados', mobileLabel: 'Resultados' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 50,
                        background: 'rgba(0,0,0,0.8)',
                        backdropFilter: 'blur(5px)',
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
                        className="crm-shell"
                        style={{ maxHeight: '90vh', overflow: 'hidden' }}
                    >
                        {/* Sidebar */}
                        <div className="crm-sidebar">
                            <div style={{ padding: '1.5rem', borderBottom: '1px solid #374151' }}>
                                <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'white' }}>convert <span style={{ fontWeight: 800 }}>A.I</span> CRM</div>
                            </div>

                            <nav style={{ padding: '1rem', flex: 1 }}>
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '0.5rem',
                                            background: activeTab === item.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                            color: activeTab === item.id ? 'white' : '#9ca3af',
                                            border: 'none',
                                            marginBottom: '0.5rem',
                                            textAlign: 'left'
                                        }}
                                    >
                                        <item.icon size={20} />
                                        {item.label}
                                    </button>
                                ))}
                            </nav>

                            <div style={{ padding: '1rem' }}>
                                <button
                                    onClick={onClose}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: '#9ca3af',
                                        background: 'transparent',
                                        border: 'none',
                                        padding: '0.5rem'
                                    }}
                                >
                                    <X size={20} />
                                    Sair da Demo
                                </button>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="crm-main">
                            {/* Header */}
                            <header style={{
                                height: isMobile ? '56px' : '64px',
                                background: 'white',
                                borderBottom: '1px solid #e5e7eb',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '0.75rem',
                                padding: isMobile ? '0 0.75rem' : '0 clamp(1rem, 3vw, 2rem)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <button
                                        className="crm-menu-btn"
                                        aria-label="Abrir menu"
                                        onClick={() => setMobileNavOpen(true)}
                                    >
                                        <Menu size={20} />
                                    </button>
                                    <h3 style={{ color: '#111827', margin: 0 }}>
                                        {activeTab === 'kanban' && (isMobile ? 'Pipeline' : 'Pipeline de Vendas')}
                                        {activeTab === 'inbox' && (isMobile ? 'Inbox' : 'Inbox Unificado')}
                                        {activeTab === 'analytics' && (isMobile ? 'Resultados' : 'Dashboard de Performance')}
                                    </h3>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.4rem' : '0.75rem' }}>
                                    <button
                                        onClick={onClose}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.35rem',
                                            border: '1px solid #e5e7eb',
                                            background: '#f9fafb',
                                            color: '#111827',
                                            borderRadius: '0.5rem',
                                            padding: isMobile ? '0.3rem 0.45rem' : '0.4rem 0.7rem',
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            fontSize: isMobile ? '0.82rem' : '0.95rem'
                                        }}
                                    >
                                        <ArrowLeft size={16} /> Voltar
                                    </button>
                                    <div style={{ position: 'relative' }}>
                                        <Search size={18} color="#9ca3af" style={{ position: 'absolute', left: '0.65rem', top: '50%', transform: 'translateY(-50%)' }} />
                                        <input
                                            type="text"
                                            placeholder="Buscar..."
                                            style={{
                                                padding: isMobile ? '0.4rem 0.6rem 0.4rem 2rem' : '0.5rem 0.75rem 0.5rem 2.5rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #e5e7eb',
                                                background: '#f9fafb',
                                                minWidth: isMobile ? '120px' : '180px',
                                                fontSize: isMobile ? '0.85rem' : '0.95rem'
                                            }}
                                        />
                                    </div>
                                    <div style={{ width: '32px', height: '32px', background: '#e5e7eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Bell size={16} color="#4b5563" />
                                    </div>
                                </div>
                            </header>

                            {/* Content Area */}
                            <div className="crm-content">
                                {activeTab === 'kanban' && <KanbanBoard />}
                                {activeTab === 'inbox' && <InboxView />}
                                {activeTab === 'analytics' && <AnalyticsView isMobile={isMobile} />}
                            </div>

                            {/* Mobile tab bar */}
                            <div className="crm-tabs-mobile" style={{ background: '#0f172a', color: '#e5e7eb' }}>
                                {navItems.map(item => (
                                    <button
                                        key={item.id}
                                        className={`crm-tab-btn ${activeTab === item.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(item.id)}
                                    >
                                        <item.icon size={20} />
                                        <span style={{ fontSize: '0.82rem' }}>{item.mobileLabel || item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Mobile drawer */}
                        <AnimatePresence>
                            {mobileNavOpen && (
                                <>
                                    <motion.div
                                        className="crm-drawer-backdrop"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() => setMobileNavOpen(false)}
                                    />
                                    <motion.div
                                        className="crm-sidebar is-mobile-open"
                                        initial={{ x: '-100%' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '-100%' }}
                                        transition={{ type: 'tween', duration: 0.25 }}
                                    >
                                        <div style={{ padding: '1.25rem', borderBottom: '1px solid #374151', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ fontWeight: 700, fontSize: '1.15rem', color: 'white' }}>convert <span style={{ fontWeight: 800 }}>A.I</span> CRM</div>
                                            <button
                                                onClick={() => setMobileNavOpen(false)}
                                                style={{ background: 'transparent', border: 'none', color: '#d1d5db' }}
                                                aria-label="Fechar menu"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>
                                        <nav style={{ padding: '1rem', flex: 1 }}>
                                            {navItems.map((item) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => { setActiveTab(item.id); setMobileNavOpen(false); }}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.75rem',
                                                        width: '100%',
                                                        padding: '0.75rem 1rem',
                                                        borderRadius: '0.5rem',
                                                        background: activeTab === item.id ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                                                        color: activeTab === item.id ? 'white' : '#d1d5db',
                                                        border: 'none',
                                                        marginBottom: '0.5rem',
                                                        textAlign: 'left'
                                                    }}
                                                >
                                                    <item.icon size={20} />
                                                    {item.label}
                                                </button>
                                            ))}
                                        </nav>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const KanbanBoard = () => {
    const columns = [
        { id: 'leads', title: 'Novos Leads', count: 12, color: '#3b82f6' },
        { id: 'qualified', title: 'Qualificados IA', count: 5, color: '#10b981' },
        { id: 'negotiation', title: 'Em Negociação', count: 3, color: '#f59e0b' },
        { id: 'closed', title: 'Fechados', count: 8, color: '#6366f1' },
    ];

    return (
        <div style={{ display: 'flex', gap: '1.5rem', height: '100%', overflowX: 'auto', paddingBottom: '1rem' }}>
            {columns.map(col => (
                <div key={col.id} style={{ minWidth: '280px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: col.color }}></div>
                            <span style={{ fontWeight: 600, color: '#374151' }}>{col.title}</span>
                            <span style={{ background: '#e5e7eb', padding: '0.1rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem', color: '#6b7280' }}>{col.count}</span>
                        </div>
                        <MoreHorizontal size={16} color="#9ca3af" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ y: -2, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', cursor: 'grab' }}
                            >
                                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>Lead Exemplo {item}</div>
                                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.75rem' }}>Interesse: Plano Enterprise</div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#d1d5db' }}></div>
                                    <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Há 2h</span>
                                </div>
                            </motion.div>
                        ))}
                        <button style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: '1px dashed #d1d5db',
                            borderRadius: '0.5rem',
                            color: '#6b7280',
                            background: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}>
                            <Plus size={16} /> Novo Card
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const InboxView = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', height: '100%', background: 'white', borderRadius: '0.5rem', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
        <div style={{ flex: '0 0 320px', minWidth: '260px', maxWidth: '360px', borderRight: '1px solid #e5e7eb', overflowY: 'auto' }}>
            {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', background: i === 1 ? '#f9fafb' : 'white' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#111827' }}>Cliente {i}</span>
                        <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>10:00</span>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        Olá, gostaria de saber mais sobre...
                    </div>
                </div>
            ))}
        </div>
        <div style={{ flex: 1, minWidth: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', flexDirection: 'column', gap: '1rem' }}>
            <MessageSquare size={48} opacity={0.2} />
            <p>Selecione uma conversa para visualizar</p>
        </div>
    </div>
);

const AnalyticsView = ({ isMobile }) => {
    const stats = [
        { label: 'Vendas Totais', value: 'R$ 45.200', change: '+12%' },
        { label: 'Leads Qualificados', value: '128', change: '+24%' },
        { label: 'Taxa de Conversão', value: '3.2%', change: '+0.8%' },
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: isMobile ? '1rem' : '1.5rem',
            alignItems: 'stretch'
        }}>
            {stats.map((stat, i) => (
                <div
                    key={i}
                    style={{
                        background: 'linear-gradient(145deg, #ffffff, #f9fafb)',
                        padding: isMobile ? '1.1rem' : '1.5rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 10px 30px -18px rgba(0,0,0,0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.55rem'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 700, color: '#1f2937', letterSpacing: '0.01em' }}>
                            {stat.label}
                        </span>
                        <span style={{

                            fontWeight: 700,
                            color: '#0f766e',
                            background: 'rgba(16, 185, 129, 0.12)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            borderRadius: '999px',
                            padding: isMobile ? '0.15rem 0.45rem' : '0.2rem 0.55rem',
                            fontSize: isMobile ? '0.75rem' : '0.8rem'
                        }}>
                            {stat.change}
                        </span>
                    </div>
                    <div style={{ fontSize: isMobile ? '2rem' : '2.3rem', fontWeight: 800, color: '#111827', lineHeight: 1.05 }}>
                        {stat.value}
                    </div>
                    <div style={{ fontSize: isMobile ? '0.85rem' : '0.9rem', color: '#6b7280' }}>
                        vs mês anterior
                    </div>
                </div>
            ))}

            <div style={{
                gridColumn: '1 / -1',
                background: 'white',
                height: isMobile ? '220px' : '300px',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af',
                boxShadow: '0 10px 30px -18px rgba(0,0,0,0.2)'
            }}>
                Gráfico de Performance (Mockup)
            </div>
        </div>
    );
};

export default CRMModal;
