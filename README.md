# Portfólio — Kaymmi Nunes

Portfólio profissional desenvolvido para apresentar projetos de desenvolvimento web, aplicações full stack, automação, Internet das Coisas, sistemas embarcados e educação tecnológica.

## Acesso

O portfólio está publicado em:

https://portfolio-kaymmi-nunes.pages.dev/

## Tecnologias

- React
- TypeScript
- React Router
- Vite
- CSS
- Node.js
- Cloudflare Pages
- Git
- GitHub

## Funcionalidades do portfólio

- Página inicial com apresentação profissional
- Listagem de projetos
- Páginas individuais para cada projeto
- Links para aplicações publicadas
- Links para os repositórios no GitHub
- Página sobre a trajetória profissional
- Página de contato
- Navegação responsiva
- Metadados para mecanismos de busca
- Metadados Open Graph
- Rotas compatíveis com Cloudflare Pages
- Verificação automática de lint e build

## Estrutura principal

```text
portfolio-kaymmi-nunes/
├── public/
│   ├── projects/
│   ├── _redirects
│   ├── favicon.svg
│   ├── og-cover.webp
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── projects/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Requisitos

- Node.js 24
- npm

A versão recomendada do Node está informada no arquivo `.nvmrc`.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/kaymmiNunes/portfolio-kaymmi-nunes.git
```

Acesse a pasta:

```bash
cd portfolio-kaymmi-nunes
```

Instale as dependências:

```bash
npm install
```

## Desenvolvimento

Execute o servidor local:

```bash
npm run dev
```

O Vite informará o endereço de desenvolvimento no terminal.

## Verificação do projeto

Execute o ESLint:

```bash
npm run lint
```

Execute a verificação do TypeScript e gere o build:

```bash
npm run build
```

Visualize o build localmente:

```bash
npm run preview
```

## Publicação no Cloudflare Pages

Configuração recomendada:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Node.js version: 24
```

O arquivo `public/_redirects` permite que as rotas do React Router funcionem corretamente após a publicação:

```text
/* /index.html 200
```

## Autor

**Kaymmi Nunes Barbosa**

- GitHub: https://github.com/kaymmiNunes
- LinkedIn: https://www.linkedin.com/in/kaymminunes/
- Instagram: https://www.instagram.com/kaymmi_n/
- Portfólio: https://portfolio-kaymmi-nunes.pages.dev/

## Licença

Este projeto é utilizado como portfólio pessoal. Os códigos podem ser consultados para fins educacionais e de referência, respeitando a autoria do projeto.