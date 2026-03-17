# ALMA.IA - Proposta Comercial Interativa

Este projeto é uma **Single Page Application (SPA)** desenvolvida para atuar como uma **Proposta Comercial de Alta Conversão** para a venda de soluções de Inteligência Artificial e Automação para PMEs.

A aplicação não é apenas um documento estático, mas uma **demonstração viva** das tecnologias oferecidas, incluindo simulações de IA, dashboards interativos e calculadoras de ROI.

## 🚀 Funcionalidades Principais

*   **Experiência "Secretária IA"**: Uma simulação interativa de chat (estilo WhatsApp) que demonstra como um Agente de IA qualifica leads, agenda consultas e responde dúvidas em tempo real.
*   **CRM Interativo**: Um modal fullscreen que simula um sistema de CRM completo (estilo Kommo/Salesforce) com:
    *   **Pipeline Kanban**: Visualização de leads em diferentes estágios.
    *   **Inbox Unificado**: Centralização de canais de atendimento.
    *   **Dashboard de Performance**: Métricas e gráficos de resultados.
*   **Calculadora de ROI**: Uma ferramenta interativa onde o cliente pode inputar seus dados (leads, ticket médio) e visualizar instantaneamente o potencial financeiro da solução.
*   **Storytelling Visual**: Diagramas animados que explicam o fluxo de dados (Lead -> IA -> CRM -> Venda) de forma simples e visual.
*   **Design Premium**: Interface moderna, limpa e profissional (Light Mode) com animações fluidas e "Glassmorphism".

## 🛠️ Stack Tecnológica

O projeto foi construído com foco em performance, interatividade e manutenibilidade:

*   **Core**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) (para alta performance e DX).
*   **Estilização**: **CSS Modules / Vanilla CSS** com Variáveis CSS (Theming).
    *   Design System próprio (sem dependência de frameworks pesados como Tailwind, garantindo leveza).
*   **Animações**: [Framer Motion](https://www.framer.com/motion/) (para transições complexas e micro-interações).
*   **Ícones**: [Lucide React](https://lucide.dev/) (ícones leves e consistentes).

## 📂 Estrutura do Projeto

```
src/
├── components/         # Componentes isolados da aplicação
│   ├── Hero.jsx        # Seção inicial com proposta de valor
│   ├── ChatDemo.jsx    # Simulação da IA no WhatsApp
│   ├── CRMModal.jsx    # Modal complexo do CRM (Kanban/Dashboard)
│   ├── FlowDiagram.jsx # Diagrama animado do fluxo de dados
│   ├── ROICalculator.jsx # Calculadora de retorno sobre investimento
│   └── Investment.jsx  # Seção de preços e entregáveis
├── App.jsx            # Componente principal e Layout
├── index.css          # Estilos globais e variáveis de tema
└── main.jsx           # Ponto de entrada React
```

## 🔧 Como Rodar o Projeto

### Pré-requisitos
*   Node.js (versão 16 ou superior)
*   npm ou yarn

### Instalação

1.  Clone o repositório (ou baixe os arquivos):
    ```bash
    git clone <url-do-repositorio>
    cd SPA_Proposta_Comercial
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4.  Acesse no navegador:
    *   O terminal irá mostrar o link, geralmente `http://localhost:5173`.

## 📦 Build para Produção

Para gerar a versão otimizada para deploy:

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `dist/`, prontos para serem hospedados em qualquer serviço de hospedagem estática (Vercel, Netlify, AWS S3, etc).

---

**Desenvolvido por ALMA.IA** - *Transformando atendimento em vendas.*
