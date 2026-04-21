# 🌿 FisioFlow

![FisioFlow Cover](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200&h=300)

**FisioFlow** é uma plataforma minimalista, moderna e de alta performance voltada para profissionais de fisioterapia e clínicas de reabilitação. 

Criado com a missão de facilitar a transição tecnológica da saúde, o app oferece uma curadoria de bibliotecas de vídeos em tempo real e montagem rápida de prescrições clínicas para pacientes. Tudo isso com foco num design system suave, intuitivo e com pouca carga cognitiva (*Zen Minimalism*).

---

## 🚀 Funcionalidades

- **Dashboard Unificado**: Acesso simultâneo à biblioteca de exercícios e ao painel lateral ativo de prescrição do paciente na mesma tela, acelerando os fluxos da clínica.
- **Upload Smart**: Área de upload Drag-and-Drop amigável.
- **Buscas e Filtros Dinâmicos**: Navegue nos protocolos com opções claras (Mobilidade, Pós-op, Coluna, etc).
- **Design System Tailored**: Mapeamento de cores premium gerador por Stitch/Material, customizado dentro das engines puras.
---

## 🏗️ Arquitetura Front-end

O FisioFlow foi desenhado com uma arquitetura escalável e robusta, visando facilitar a transição futura de dados mockados para integrações com back-ends reais (APIs) sem a necessidade de reescrever a Interface do Usuário (UI).

1. **Service Layer (`src/services/`)**: Agrupa as funções que fazem o fetch de dados. Atualmente utiliza `Promises` com `setTimeout` para simular o tempo de resposta da rede em cima dos mocks. Para plugar o backend, basta trocar este conteúdo por chamadas `axios` ou `fetch`.
2. **Custom Hooks (`src/hooks/`)**: Atuam como **Controllers**. Abstraem toda a lógica procedural pesada e controle de estado global como: `isLoading`, `error` fallbacks, e validação de sucessos. A camada de vista apenas engole dados reativos puros.
3. **Mocks e Contratos (`src/types/` e `src/mocks/`)**: Todo o tráfego de dados é fortemente tipado com TypeScript (`DailyLog`, `PhysioDashboardData`), blindando contra quebras de contrato.
4. **Co-localização de Estilos**: A adoção madura do **Utility-First CSS (Tailwind)**. Nenhuma folha de estilos morta (código zumbi): os estilos nascem, definem cores e hierarquias baseados nos Design Tokens globais, e morrem junto com o bloco de código JSX.
5. **Roteamento Encapsulado**: Roteadores isolados via React Router (`/physio/*` vs `/patient/*`) com Layouts dedicados para que as lógicas de sessão e navegação não cruzem de maneira insegura.

---

## 🛠 Tecnologias Utilizadas

Este projeto foi desenvolvido com as versões mais pontuais do mercado front-end de hoje:

- **[React 19](https://react.dev/)**: Motor base com renderização rápida e flexível.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática garantindo previsibilidade de dados no desenvolvimento.
- **[Vite 8](https://vitejs.dev/)**: Ambiente de dev e build em ultra velocidade HMR.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utilizando o novo motor JIT integrado nativamente onde todo o *design tokens* vive no CSS `@theme`. Zero configurações em JS!
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas.
- **Tipografia Escalonável**: Combinação da fonte clínica **Inter** (Google Fonts) e coleção global de **Material Symbols Outlined**.

---

## 💻 Como Rodar o Projeto Localmente

É super simples ter isso rodando na sua máquina. O único pré-requisito é ter o [Node.js](https://nodejs.org/) instalado.

### 1. Clocar o Repositório
Abra o seu terminal/prompt de comando e rode:
```bash
git clone https://github.com/caiquebatistam/fisio-flow.git
cd fisio-flow
```

### 2. Instalar as Dependências
O projeto possui todas as travas em `package-lock.json`. Basta baixar todos modulos do node:
```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento
Rode o script do Vite que vai instanciar a plataforma rodando na base e monitorar as suas alterações em tempo real:
```bash
npm run dev
```

### 4. Visualizar o Resultado
Abra seu navegador preferido e navegue até:
```text
http://localhost:5173
```

---

## 🎨 Contribuindo & Design Tokens
Se quiser customizar as cores futuramente, saiba que todos os tokens estritos providos da especificação original (ex: `surface-container-low`, `primary`, `on-surface`) não estão mais num `.js` antigo, mas vivem livres dentro do próprio `src/index.css` via escopo `@theme` do Tailwind 4.

Feito com flexibilidade e carinho 💚
