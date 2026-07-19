import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "brasil-farma",
    title: "Brasil Farma Web",
    shortTitle: "Brasil Farma",
    category: "Aplicação Full Stack",
    year: 2026,
    status: "Publicado e em evolução",
    featured: true,

    summary:
      "Aplicação full stack para consulta de produtos farmacêuticos, gerenciamento de carrinho e finalização de pedidos pelo WhatsApp.",

    description: [
      "A Brasil Farma Web foi desenvolvida para oferecer uma experiência digital simples e acessível aos clientes da farmácia.",

      "O frontend permite visualizar produtos, navegar por categorias, adicionar itens ao carrinho, calcular o valor total e gerar uma mensagem estruturada para finalização do pedido pelo WhatsApp.",

      "O backend utiliza Django e Django REST Framework para disponibilizar os dados dos produtos e permitir o gerenciamento das informações por meio de um painel administrativo.",
    ],

    objective:
      "Criar um catálogo digital integrado a um backend, facilitando a consulta de produtos e a comunicação entre clientes e a farmácia.",

    roles: [
      "Desenvolvimento full stack",
      "Organização da arquitetura do projeto",
      "Integração entre frontend e backend",
      "Desenvolvimento da interface",
      "Implementação do carrinho",
      "Publicação da aplicação",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Django",
      "Django REST Framework",
      "CSS",
      "Cloudflare Pages",
      "PythonAnywhere",
      "Git",
      "GitHub",
    ],

    features: [
      "Catálogo de produtos",
      "Organização por categorias",
      "Pesquisa de produtos",
      "Carrinho de compras",
      "Cálculo do valor total",
      "Finalização pelo WhatsApp",
      "API REST",
      "Painel administrativo",
      "Integração frontend e backend",
      "Layout responsivo",
    ],

    highlights: [
      "Arquitetura full stack",
      "Frontend e backend publicados separadamente",
      "Integração com API REST",
      "Aplicação voltada a uma necessidade comercial real",
    ],

    links: [
      {
        label: "Acessar aplicação",
        href: "https://brasil-farma-web.pages.dev/",
        type: "demo",
      },
      {
        label: "Ver repositório",
        href: "https://github.com/kaymmiNunes/brasil-farma-web",
        type: "repository",
      },
    ],

    coverImage: "/projects/brasil-farma/cover.webp",

    deployment: [
      "Frontend no Cloudflare Pages",
      "Backend no PythonAnywhere",
    ],
  },

  {
    slug: "quitanda-agroecologica",
    title: "Quitanda Agroecológica",
    shortTitle: "Quitanda Agroecológica",
    category: "Site Institucional",
    year: 2026,
    status: "Publicado",
    featured: true,

    summary:
      "Site expositivo para divulgação de produtos agroecológicos, agricultura familiar, consumo consciente e informações da Quitanda Agroecológica de Remígio-PB.",

    description: [
      "O projeto foi desenvolvido para fortalecer a presença digital da Quitanda Agroecológica de Remígio-PB.",

      "A aplicação apresenta produtos disponíveis, informações sobre agroecologia, agricultura familiar, consumo consciente, receitas, localização, horários e canais de contato.",

      "O conteúdo também valoriza iniciativas locais, a produção regional e a relação entre alimentação saudável, sustentabilidade e desenvolvimento comunitário.",
    ],

    objective:
      "Facilitar o acesso da comunidade às informações da quitanda e valorizar a produção agroecológica e a agricultura familiar.",

    roles: [
      "Levantamento e organização do conteúdo",
      "Arquitetura da informação",
      "Desenvolvimento front-end",
      "Construção do layout responsivo",
      "Publicação do site",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Cloudflare Pages",
      "Git",
      "GitHub",
    ],

    features: [
      "Apresentação institucional",
      "Catálogo de produtos",
      "Organização por categorias",
      "Informações nutricionais",
      "Conteúdo sobre agroecologia",
      "Conteúdo sobre agricultura familiar",
      "Receitas com produtos regionais",
      "Localização e horário",
      "Contato pelo WhatsApp",
      "Integração com Instagram",
      "Layout responsivo",
    ],

    highlights: [
      "Projeto relacionado à extensão universitária",
      "Valorização da agricultura familiar",
      "Aplicação voltada a uma iniciativa local",
      "Conteúdo educativo e comercial",
    ],

    links: [
      {
        label: "Acessar site",
        href: "https://quitanda-agroecologica.pages.dev/",
        type: "demo",
      },
      {
        label: "Ver repositório",
        href: "https://github.com/kaymmiNunes/quitanda-agroecologica",
        type: "repository",
      },
    ],

    coverImage: "/projects/quitanda-agroecologica/cover.webp",

    deployment: ["Cloudflare Pages"],
  },

  {
    slug: "jardelson-barbearia",
    title: "Jardelson Barbearia",
    shortTitle: "Jardelson Barbearia",
    category: "Landing Page Institucional",
    year: 2026,
    status: "Publicado",
    featured: true,

    summary:
      "Landing page institucional para apresentação dos serviços, localização e canais de atendimento da Jardelson Barbearia.",

    description: [
      "O site da Jardelson Barbearia foi desenvolvido para consolidar a presença digital do estabelecimento e facilitar o acesso dos clientes às principais informações.",

      "A página reúne apresentação da barbearia, serviços oferecidos, fotos, vídeos, avaliações, horário de funcionamento, localização e contato direto pelo WhatsApp.",

      "A interface foi construída com foco em identidade visual, navegação simples e utilização em dispositivos móveis.",
    ],

    objective:
      "Criar uma presença digital profissional para a barbearia, facilitando a divulgação dos serviços e o contato com os clientes.",

    roles: [
      "Organização do conteúdo",
      "Desenvolvimento front-end",
      "Implementação da identidade visual",
      "Construção do layout responsivo",
      "Publicação do site",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Cloudflare Pages",
      "Git",
      "GitHub",
    ],

    features: [
      "Apresentação institucional",
      "Lista de serviços",
      "Galeria de fotos e vídeos",
      "Avaliações de clientes",
      "Horário de funcionamento",
      "Localização",
      "Contato pelo WhatsApp",
      "Integração com Instagram",
      "Layout responsivo",
    ],

    highlights: [
      "Projeto desenvolvido para um estabelecimento real",
      "Foco em experiência mobile",
      "Integração com canais comerciais",
      "Identidade visual personalizada",
    ],

    links: [
      {
        label: "Acessar site",
        href: "https://barbearia-jardelson.pages.dev/",
        type: "demo",
      },
      {
        label: "Ver repositório",
        href: "https://github.com/kaymmiNunes/barbearia-jardelson",
        type: "repository",
      },
    ],

    coverImage: "/projects/jardelson-barbearia/cover.webp",

    deployment: ["Cloudflare Pages"],
  },

  {
    slug: "cafeteria-haven",
    title: "Cafeteria Haven",
    shortTitle: "Cafeteria Haven",
    category: "Projeto Front-end",
    year: 2025,
    status: "Publicado",
    featured: false,

    summary:
      "Site responsivo para uma cafeteria fictícia, com identidade visual acolhedora, cardápio ilustrado e navegação interativa.",

    description: [
      "A Cafeteria Haven é um projeto de estudo voltado ao desenvolvimento de interfaces web e à aplicação prática de HTML, CSS e JavaScript.",

      "O site apresenta uma cafeteria fictícia por meio de banner, cardápio visual, informações institucionais, contato e horário de funcionamento.",

      "A proposta visual utiliza referências de ambientes acolhedores e elementos inspirados na estética de cafeterias.",
    ],

    objective:
      "Desenvolver uma página institucional responsiva, demonstrando competências em composição visual, organização de conteúdo e interação com JavaScript.",

    roles: [
      "Desenvolvimento front-end",
      "Construção da identidade visual",
      "Organização do cardápio",
      "Responsividade",
      "Implementação do menu interativo",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Cloudflare Pages",
      "Git",
      "GitHub",
    ],

    features: [
      "Banner de apresentação",
      "Cardápio visual",
      "Menu interativo",
      "Seção institucional",
      "Área de contato",
      "Horário de funcionamento",
      "Layout responsivo",
    ],

    highlights: [
      "Projeto de estudo de desenvolvimento front-end",
      "Identidade visual temática",
      "Cardápio com imagens personalizadas",
      "Experiência responsiva",
    ],

    links: [
      {
        label: "Acessar site",
        href: "https://cafeteria-haven.pages.dev/",
        type: "demo",
      },
      {
        label: "Ver repositório",
        href: "https://github.com/kaymmiNunes/cafeteria-haven",
        type: "repository",
      },
    ],

    coverImage: "/projects/cafeteria-haven/cover.webp",

    deployment: ["Cloudflare Pages"],
  },

  {
    slug: "irrigacao-automatica",
    title: "Sistema de Irrigação Inteligente com ESP8266",
    shortTitle: "Irrigação Inteligente",
    category: "Automação, IoT e Sistemas Embarcados",
    year: 2023,
    status: "Projeto acadêmico",
    featured: true,

    summary:
      "Sistema automatizado que monitora a umidade do solo, controla uma bomba hidráulica, mede o consumo de água e envia dados para uma plataforma IoT.",

    description: [
      "O sistema utiliza um ESP8266 para realizar o monitoramento da umidade do solo e controlar automaticamente o processo de irrigação.",

      "Quando a umidade fica abaixo do limite configurado, a bomba é acionada. Ao atingir o limite máximo, o sistema interrompe a irrigação.",

      "Um sensor de fluxo mede a vazão e o volume de água utilizado. Os dados são enviados ao Blynk IoT, permitindo acompanhamento remoto, visualização do estado da bomba e configuração dos limites de umidade.",
    ],

    objective:
      "Automatizar o processo de irrigação, reduzir o desperdício de água e permitir o monitoramento remoto das condições do sistema.",

    roles: [
      "Desenvolvimento do firmware",
      "Integração de sensores",
      "Controle da bomba hidráulica",
      "Integração com plataforma IoT",
      "Montagem e testes do protótipo",
      "Documentação técnica",
    ],

    technologies: [
      "C++",
      "ESP8266",
      "NodeMCU",
      "Arduino IDE",
      "Blynk IoT",
      "ESP8266WiFi",
      "Sensores",
      "Eletrônica",
      "Sistemas embarcados",
    ],

    features: [
      "Monitoramento da umidade do solo",
      "Acionamento automático da bomba",
      "Limites mínimo e máximo configuráveis",
      "Medição da vazão de água",
      "Cálculo do volume utilizado",
      "Monitoramento remoto",
      "Indicação do estado da bomba",
      "Controle manual opcional",
    ],

    highlights: [
      "Integração entre hardware e software",
      "Monitoramento remoto por IoT",
      "Uso racional da água",
      "Aplicação educacional e experimental",
    ],

    collaborators: ["Erik de Brito Ramalho Alves"],

    links: [
      {
        label: "Ver repositório",
        href: "https://github.com/kaymmiNunes/irrigacao-automatica",
        type: "repository",
      },
    ],

    coverImage: "/projects/irrigacao-automatica/cover.webp",
  },
  {
  slug: "api-accg",
  title: "API de Gerenciamento ACCG",
  shortTitle: "API ACCG",
  category: "Backend e API REST",
  year: 2025,
  status: "Projeto acadêmico",
  featured: true,

  summary:
    "API REST para gerenciamento de usuários, associados, movimentações financeiras, cobranças e atualização automática de pagamentos por webhooks.",

  description: [
    "A API ACCG foi desenvolvida para centralizar e digitalizar os processos administrativos e financeiros de uma associação.",

    "O sistema reúne o gerenciamento de usuários, empresas associadas, documentos, plano de contas, cobranças e histórico financeiro em uma arquitetura modular baseada no Django REST Framework.",

    "A aplicação também possui suporte a webhooks de pagamento, permitindo que cobranças sejam atualizadas automaticamente após o recebimento de notificações enviadas por serviços externos.",
  ],

  objective:
    "Centralizar os processos administrativos e financeiros da ACCG em uma API segura, documentada e preparada para integração com aplicações frontend e serviços de pagamento.",

  roles: [
    "Desenvolvimento backend em equipe",
    "Construção de endpoints REST",
    "Modelagem de dados com Django ORM",
    "Implementação de regras de negócio",
    "Documentação da API com Swagger",
    "Organização e documentação técnica do projeto",
  ],

  technologies: [
    "Python",
    "Django",
    "Django REST Framework",
    "Django ORM",
    "Swagger",
    "OpenAPI 3",
    "drf-spectacular",
    "SQLite",
    "PostgreSQL",
    "JWT",
    "Git",
    "GitHub",
  ],

  features: [
    "Cadastro e autenticação de usuários",
    "Gerenciamento completo de associados",
    "Upload de contratos e fichas cadastrais",
    "Controle de status dos associados",
    "Histórico cadastral e financeiro",
    "Plano de contas hierárquico",
    "Controle de receitas e despesas",
    "Emissão e gerenciamento de cobranças",
    "Atualização de pagamentos por webhooks",
    "Exclusão lógica de registros financeiros",
    "Documentação interativa com Swagger",
    "Proteção de endpoints por autenticação",
  ],

  highlights: [
    "Arquitetura backend modular",
    "API REST documentada com OpenAPI",
    "Integração preparada para gateways de pagamento",
    "Aplicação de regras de negócio financeiras",
    "Proteção de endpoints e gestão de segredos",
    "Projeto acadêmico desenvolvido em equipe",
  ],

  collaborators: [
    "Humberto Silva",
    "João Vitor",
    "Mateus Sebastian",
    "Samuel Lucas",
  ],

  links: [
    {
      label: "Ver repositório",
      href: "https://github.com/kaymmiNunes/accg",
      type: "repository",
    },
  ],

  coverImage: "/projects/api-accg/cover.webp",
},
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}