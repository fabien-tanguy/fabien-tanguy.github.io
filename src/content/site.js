export const site = {
  labels: {
    home: 'Retour à l’accueil',
    mainNavigation: 'Navigation principale',
    technologies: 'Technologies',
    perspective: 'Point de vue',
    backToTop: 'Haut de page',
  },
  identity: {
    name: 'Fabien Tanguy',
    role: 'Consultant Web Senior · Référent technique',
  },
  navigation: [
    { label: 'Parcours', href: '#parcours' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Approche', href: '#intervention' },
    { label: 'Contact', href: '#contact' },
  ],
  actions: {
    contact: { label: 'Me contacter', href: '#contact' },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fabientanguy/',
      analytics: { event: 'contact_click', channel: 'linkedin' },
    },
  },
  hero: {
    eyebrow: 'Produits web critiques · Référent technique',
    title:
      'Faire tenir ensemble règles métier, données, performance et delivery.',
    text: 'J’interviens sur des produits web à fort trafic ou à forte contrainte métier, là où les choix techniques doivent rester utiles au produit, à l’équipe et aux utilisateurs.',
    supporting: 'Références : FDJ United, Accor, AXA, Solera et Louvre Hotels.',
    links: [
      { label: 'Me contacter', href: '#contact' },
      { label: 'Voir les réalisations', href: '#realisations' },
    ],
  },
  career: {
    title: 'Parcours en bref',
    introduction:
      'Une sélection de contextes représentatifs parmi plus de quinze ans de produits web.',
    entries: [
      {
        period: '2025 — aujourd’hui',
        company: 'BoatClarity',
        context: 'Produit indépendant · Rapports pré-visite',
      },
      {
        period: '2021 — 2025',
        company: 'FDJ United · fdj.fr',
        context: 'Loterie Web · Migration Symfony 5 vers Next.js',
      },
      {
        period: '2018 — 2021',
        company: 'Accor',
        context: 'Workspace international · Portail collaborateur',
      },
      {
        period: '2017 — 2018',
        company: 'Solera',
        context: 'Gestion de sinistres habitation · Usage terrain',
      },
      {
        period: '2016 — 2017',
        company: 'AXA',
        context: 'Assurance-vie · Versements et retraits',
      },
    ],
  },
  work: {
    title: 'Situations concrètes',
    items: [
      {
        featured: true,
        label: 'Produit indépendant · 2025 — aujourd’hui',
        title: 'Passer de l’annonce au dossier de pré-visite',
        description:
          'Application web pour le marché international de l’occasion nautique. Elle aide courtiers, concessionnaires et vendeurs à structurer informations techniques, historique d’entretien et justificatifs avant une visite.',
        tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'SQL'],
        link: {
          label: 'Voir BoatClarity',
          href: 'https://boatclarity.com',
          analytics: { event: 'project_open', project: 'boatclarity' },
        },
        image: {
          src: './images/boatclarity-showcase.png',
          alt: 'Capture d’écran de BoatClarity, application de pré-visit report pour bateaux d’occasion',
          width: 1122,
          height: 1402,
        },
      },
      {
        label: 'Loterie Web · 2021 — 2025',
        title: 'Migration, performance et parcours critiques',
        description:
          'Référent technique au sein de la squad Loterie Web : migration de fdj.fr de Symfony 5 vers Next.js, performance, fiabilisation des parcours critiques et industrialisation du tracking pour éviter une instrumentation au cas par cas.',
        tags: ['Next.js', 'React', 'TypeScript', 'Performance web'],
      },
      {
        label: 'Workspace · 2018 — 2021',
        title: 'Workspace, portail collaborateur multilingue',
        description:
          'Responsable front-end de Workspace pour les équipes du groupe : modules métier — lanceur d’applications, alertes contextualisées, KPIs personnalisés — et refonte ciblée des couches de données et procédures SQL pour fiabiliser les APIs et améliorer leurs temps de réponse.',
        tags: ['React', 'APIs', 'SQL', 'Données', 'Modules métier'],
      },
    ],
  },
  services: {
    title: 'Quand le produit se complique',
    items: [
      {
        title: 'Règles métier qui se dispersent',
        description:
          'Replacer les règles dans le modèle, les données, l’API ou le parcours, avant que l’interface ne devienne un assemblage d’exceptions.',
      },
      {
        title: 'Données qui ne portent plus le produit',
        description:
          'Clarifier les objets métier, l’intégrité, les droits de visibilité et la traçabilité afin que la donnée simplifie les flux au lieu de les compliquer.',
      },
      {
        title: 'Parcours critiques sous tension',
        description:
          'Identifier ce qui freine réellement le parcours : dépendances, APIs, rendu, erreurs, données et intégrations — pas seulement un score isolé.',
      },
      {
        title: 'Delivery qui s’enlise',
        description:
          'Découper, arbitrer et réduire le risque sans déclencher une refonte d’architecture disproportionnée.',
      },
    ],
  },
  perspective: {
    title: 'Pas plus de couches. De meilleures décisions.',
    text: 'Les problèmes de delivery se résolvent rarement par une abstraction de plus. Le vrai levier est souvent une règle métier clarifiée, un modèle de données corrigé ou un parcours critique sécurisé.',
  },
  contact: {
    title: 'Échangeons sur votre produit ou votre mission.',
    text: 'Disponible pour des missions de référent technique et de delivery web : React / Next.js, APIs, données et parcours critiques.',
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/fabientanguy/',
        analytics: { event: 'contact_click', channel: 'linkedin' },
      },
      {
        label: 'Email',
        href: 'mailto:tanguyfab@gmail.com',
        analytics: { event: 'contact_click', channel: 'email' },
      },
      {
        label: 'CV PDF',
        href: './FR-Fabien-Tanguy-CV.pdf',
        analytics: { event: 'cv_download', language: 'fr' },
      },
    ],
  },
  footer: {
    text: 'Fabien Tanguy · Consultant Web Senior · Français / anglais professionnel',
    link: {
      label: 'GitHub',
      href: 'https://github.com/fabien-tanguy/',
      analytics: { event: 'profile_link_click', channel: 'github' },
    },
  },
};
