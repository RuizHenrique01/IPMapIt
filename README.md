# IPMapIt

## Índice
- [O que é?](#o-que-é)
- [Resumo](#resumo)
- [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)
- [Pré-requisitos](#pré-requisitos)
- [Como instalar e executar](#como-instalar-e-executar)
- [Onde o projeto está executando](#onde-o-projeto-está-executando)
- [Funcionalidades](#funcionalidades)
- [Estrutura do projeto](#estrutura-do-projeto)

## O que é?

O **IP Map It!** é um aplicativo web interativo desenvolvido em Vue.js que permite localizar geograficamente endereços IP e visualizar sua posição em um mapa interativo. O projeto utiliza tecnologias modernas como Vue 3, Leaflet para mapas, PrimeVue para componentes UI e APIs de geolocalização para fornecer uma experiência completa de mapeamento de IPs.

## Resumo

Este projeto combina geolocalização e mapeamento para oferecer duas funcionalidades principais:
- 📍 **Localização Automática**: Detecta automaticamente sua localização atual usando a API de Geolocalização do navegador
- 🔍 **Busca por IP**: Permite inserir um endereço IP específico e visualizar sua localização geográfica no mapa
- 🗺️ **Mapa Interativo**: Utiliza OpenStreetMap através do Leaflet para exibir as localizações com marcadores informativos

## Tecnologias e Ferramentas

### Frontend Framework
- **[Vue.js 3](https://vuejs.org/)** - Framework JavaScript progressivo com Composition API
- **[Vite](https://vitejs.dev/)** - Build tool moderna e servidor de desenvolvimento ultra-rápido

### Bibliotecas e Componentes
- **[Leaflet](https://leafletjs.com/)** - Biblioteca JavaScript open-source para mapas interativos
- **[PrimeVue](https://primefaces.org/primevue)** - Biblioteca de componentes UI rica para Vue.js

### APIs e Serviços
- **[ipapi.co](https://ipapi.co/)** - API gratuita para geolocalização de endereços IP
- **[OpenStreetMap](https://www.openstreetmap.org/)** - Serviço de tiles de mapas colaborativo
- **Geolocation API** - API nativa do navegador para obter localização do usuário

### Utilitários
- **[Axios](https://axios-http.com/)** - Cliente HTTP baseado em Promises para requisições
- **CSS3** - Estilização com Flexbox e variáveis CSS

### Ferramentas de Desenvolvimento
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[npm](https://www.npmjs.com/)** - Gerenciador de pacotes
- **ES6+ Modules** - Sistema de módulos JavaScript moderno

## Pré-requisitos

Para executar este projeto, você precisa ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão 14.0 ou superior)
- **npm** (geralmente vem com o Node.js) ou **[yarn](https://yarnpkg.com/)**
- **[Git](https://git-scm.com/)** (para clonar o repositório)
- Navegador web moderno com suporte à Geolocalização

## Como instalar e executar

### 1. Clone o repositório
```bash
git clone https://github.com/RuizHenrique01/IPMapIt.git
cd IPMapIt
```

### 2. Instale as dependências
```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 3. Execute o projeto em modo de desenvolvimento
```bash
# Usando npm
npm run dev

# Ou usando yarn
yarn dev
```

### 4. Build para produção (opcional)
```bash
# Usando npm
npm run build

# Ou usando yarn
yarn build
```

## Dependências principais

- **Vue 3**: Framework JavaScript progressivo
- **Vite**: Build tool e servidor de desenvolvimento
- **Leaflet**: Biblioteca de mapas interativos
- **PrimeVue**: Biblioteca de componentes UI
- **Axios**: Cliente HTTP para requisições à API
- **ipapi.co**: API gratuita para geolocalização de IPs

## Onde o projeto está executando

Após executar o comando `npm run dev` ou `yarn dev`, o projeto estará disponível em:

🌐 **URL Local**: `http://localhost:5173`

O servidor de desenvolvimento do Vite iniciará automaticamente e você poderá acessar a aplicação através do seu navegador web.

## Funcionalidades

- ✅ Detecção automática da localização do usuário
- ✅ Input para endereços IP com validação
- ✅ Validação de formato de IP
- ✅ Busca de localização por IP
- ✅ Mapa interativo com marcadores
- ✅ Interface responsiva e moderna
- ✅ Tratamento de erros e feedback visual
- ✅ Popups informativos nos marcadores

## Estrutura do projeto

```
IPMapIt/
├── src/
│   ├── pages/
│   │   └── Home.vue          # Página principal da aplicação
│   ├── main.js               # Ponto de entrada da aplicação
│   └── ...
├── index.html                # Template HTML principal
├── package.json              # Dependências e scripts
├── vite.config.js           # Configuração do Vite
└── README.md                # Este arquivo
```
