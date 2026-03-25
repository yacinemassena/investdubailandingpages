import { numbersDictionary as d } from '../../../content/numbersDictionary';

export const homepageContent = {
  nav: {
    links: [
      { label: 'Pourquoi Nous', href: '/fr/smarteralternative' },
      { label: 'Le Processus', href: '/fr/how-it-works' },
      { label: 'FAQ', href: '/fr/faq' },
    ],
    loginText: 'Connexion',
    ctaText: 'Ouvrir un Compte',
  },

  hero: {
    eyebrow: 'Villas de luxe à Dubaï. Accès régulé.',
    headline: 'On achète. On rénove. On revend.',
    headlineSecondLine: '',
    subheadline:
      `L'écart entre une villa vétuste et une villa clé en main, c'est notre métier. ${d.villasAcquired.value} villas rénovées et revendues dans les meilleurs quartiers de Dubaï. Investissez dès ${d.minimumInvestment.value}.`,
    primaryCta: 'Ouvrir un Compte',
    secondaryCta: "Voir l'Opportunité",
    stats: [
      { value: d.villasAcquired.value, label: 'Villas acquises' },
      { value: d.historicalInvestorPayout.value, label: 'Rendement moyen' },
      { value: d.typicalHoldPeriod.value, label: 'Durée moyenne' },
      { value: d.leverageUsed.value, label: 'Sans levier' },
    ],
  },

  opportunity: {
    label: "L'Opportunité",
    title: 'Dans les quartiers haut de gamme de Dubaï, une même villa peut se vendre à deux prix très différents.',
    body: "Une villa vétuste et une villa entièrement rénovée : même plan, même adresse, même surface. Seul l'état change.\n\nNous achetons la villa à rénover, la transformons selon les standards haut de gamme, et la revendons au prix du marché rénové. C'est cet écart qui génère la performance.",
    pullQuote: 'Nous créons de la valeur par la rénovation. Nos investisseurs aussi.',
    chart: {
      leftLabel: 'Achat',
      rightLabel: 'Vente',
      leftBarLabel: 'En dessous de la valeur rénovée',
      rightBarLabel: 'Vendue au prix du marché',
      gapLabel: "L'écart crée la plus-value",
      gapValue: '+50%',
      gapSubtext: 'écart de prix typique',
      bottomText: 'Même type de villa. Même quartier. Même surface.',
      disclaimer: 'Illustration. Basée sur des transactions comparables à Palm Jumeirah, Jumeirah Islands et Al Barari.',
    },
    cta: 'Créer un Compte',
  },

  projectResults: {
    headline: 'Un historique basé sur des sorties réalisées',
    subheadline: `Notre performance repose sur des opérations terminées, pas sur des projections. Sur l'ensemble des projets finalisés, le rendement moyen atteint ${d.averageProjectROI.value}. Découvrez les dernières sorties et les rendements générés.`,
    latestProjectsLabel: 'Derniers projets finalisés',
    latestProjectsSubcopy: 'Performance réelle des dernières rénovations de villas de luxe',
    showMoreText: 'Voir Plus',
    disclaimer: 'Les rendements nets annualisés sont nets de tous frais et charges.',
    projects: [
      { id: 'Flip 32', investment: 'AED 24,670,000', selling: 'AED 34,680,000', roi: '41%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-32.jpg' },
      { id: 'Flip 31', investment: 'AED 23,580,000', selling: 'AED 33,800,000', roi: '43%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-31.jpg' },
      { id: 'Flip 30', investment: 'AED 24,670,000', selling: 'AED 33,800,000', roi: '37%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-30.jpg' },
      { id: 'Flip 29', investment: 'AED 24,343,000', selling: 'AED 34,000,000', roi: '40%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-29.jpg' },
      { id: 'Flip 28', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-28.jpg' },
      { id: 'Flip 27', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-27.jpg' },
      { id: 'Flip 26', investment: 'AED 23,580,000', selling: 'AED 33,000,000', roi: '40%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-26.jpg' },
      { id: 'Flip 25', investment: 'AED 18,215,000', selling: 'AED 25,000,000', roi: '37%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-25.jpg' },
    ],
  },

  whyGapExists: {
    label: 'Pourquoi Ça Fonctionne',
    title: 'Trois raisons structurelles qui rendent cette stratégie viable à Dubaï',
    subtitle: 'Le marché des villas à Dubaï présente des caractéristiques spécifiques qui permettent de répéter ce modèle.',
    cards: [
      {
        title: 'Des plans standardisés',
        description: 'Dans de nombreux quartiers haut de gamme, les promoteurs ont construit des villas identiques à grande échelle. Même plan, même parcelle.\n\nCela rend la valorisation simple : comparez une villa vétuste à une villa rénovée, et l\'écart de prix est visible.',
        tag: 'Plans comparables, prix clairs',
      },
      {
        title: 'Adresses prestigieuses, parc vieillissant',
        description: "Palm Jumeirah, Jumeirah Islands, Al Barari : certaines des meilleures adresses de Dubaï comptent encore des villas de 15 ans qui n'ont jamais été rénovées.\n\nLes acheteurs veulent l'adresse. Et de plus en plus, ils la veulent clé en main.",
        tag: 'Forte demande',
      },
      {
        title: 'Plus-value mesurable',
        description: "Grâce à la standardisation des plans et des emplacements, nous pouvons estimer la valeur post-rénovation avant même l'acquisition, en nous basant sur les ventes comparables du quartier.\n\nNous connaissons les chiffres avant d'acheter.",
        tag: "Valeur estimée avant l'achat",
      },
    ],
  },

  takeAction: {
    label: "Structure d'Investissement",
    title: "Une économie pensée pour l'investisseur",
    subtitle: "Chaque projet suit la même structure financière, conçue pour rémunérer les investisseurs en priorité.",
    metrics: [
      {
        value: d.priorityReturn.value,
        label: 'Rendement prioritaire',
        description: 'Les investisseurs reçoivent les premiers 15% avant toute participation de notre part.',
      },
      {
        value: d.targetInvestorReturn.value,
        label: 'Objectif de rendement par projet',
        description: "Basé sur la discipline d'acquisition, les budgets de rénovation et les données de ventes comparables.",
      },
      {
        value: d.historicalInvestorPayout.value,
        label: 'Rendement moyen historique',
        description: "Sur l'ensemble des projets finalisés à ce jour.",
      },
      {
        value: d.minimumInvestment.value,
        label: 'Investissement minimum',
        description: `Accédez à cette stratégie à partir de ${d.minimumInvestment.value} (${d.minimumInvestment.secondary}) via une structure régulée.`,
      },
    ],
    primaryCta: 'Créer un Compte',
    secondaryCta: 'Réserver un Appel',
    disclaimer: '',
  },

  howItWorks: {
    label: 'Comment Ça Marche',
    title: "Cinq étapes, de l'inscription à la sortie",
    steps: [
      { number: '01', title: 'Créez votre compte', description: 'Inscription et vérification en quelques minutes.' },
      { number: '02', title: 'Consultez les opportunités', description: 'Accédez à des projets sélectionnés dans les quartiers haut de gamme de Dubaï, chacun adossé à un bien réel.' },
      { number: '03', title: `Investissez à partir de ${d.minimumInvestment.value}`, description: "Choisissez un projet, investissez et devenez actionnaire de l'entité qui détient la villa." },
      { number: '04', title: 'Suivez la rénovation', description: 'Suivez l\'avancement via WhatsApp, le tableau de bord et des photos hebdomadaires.' },
      { number: '05', title: 'Recevez vos gains', description: 'À la revente de la villa, vous récupérez votre capital plus votre part des bénéfices.' },
    ],
    cta: 'Créer un Compte',
  },

  whyInvestDubai: {
    label: 'Pourquoi InvestDubai',
    title: 'Nous rénovons des villas. Point.',
    subtitle: "InvestDubai offre aux investisseurs l'accès à une stratégie ciblée : acquérir, rénover, revendre. Tout est géré en interne.",
    trustPoints: [
      { title: 'Exécution en interne', description: 'Nous sourçons, concevons, rénovons et gérons chaque projet nous-mêmes.\nAucune sous-traitance sur le cœur de métier.' },
      { title: 'Actif réel, propriété réelle', description: "Chaque investissement est lié à une villa spécifique.\nVous détenez des parts dans l'entité qui possède le bien." },
      { title: 'Zéro effet de levier', description: "Les projets fonctionnent sans dette.\nPas de vente forcée, pas d'appel de marge, plus de résilience si le marché fluctue." },
      { title: 'Budgets de rénovation fixés', description: "Les budgets sont verrouillés avant le lancement.\nPas d'appel de fonds surprise." },
      { title: 'Transparence totale', description: 'Groupes WhatsApp, tableau de bord, mises à jour hebdomadaires.\nVous voyez le travail au fur et à mesure.' },
      { title: 'Structure régulée', description: "Les investissements passent par une plateforme régulée avec vérification d'identité et protections pour les investisseurs." },
    ],
    highlightCard: {
      stat: d.villasAcquired.value,
      statLabel: "Villas de luxe acquises par l'équipe interne",
      features: [
        'Uniquement les emplacements les plus prestigieux de Dubaï',
        'Architectes et chefs de projet internes',
        'Supervision quotidienne sur site',
        'Contrôle total des matériaux',
      ],
      founders: 'Fondé par Greenbull Group',
      company: 'Membre de Greenbull Group',
    },
    alignedIncentives: {
      title: 'Nous ne gagnons que si vous gagnez.',
      description: "Notre modèle économique repose sur le partage des bénéfices. Les investisseurs touchent leur rendement prioritaire de 15% en premier. Ce n'est qu'ensuite que nous participons à la plus-value. Plus la sortie est réussie, plus tout le monde y gagne.",
    },
  },

  faq: {
    label: 'Questions Fréquentes',
    title: 'Les questions que se posent les investisseurs avant de commencer',
    subtitle: 'Des réponses claires. Sans jargon.',
    cta: 'Réserver un Appel',
    questions: [
      {
        question: 'InvestDubai est-il légal et régulé ?',
        answer: "Oui. Tous les investissements sont traités via une plateforme partenaire régulée par la DFSA, basée au Dubai International Financial Centre (DIFC).\n\nChaque villa est détenue par une Special Purpose Vehicle (SPV), une entité juridique dédiée enregistrée aux Émirats. Lorsque vous investissez, vous recevez des parts de cette SPV, qui détient le titre de propriété.\n\nCette structure garantit que votre propriété est documentée légalement, adossée à un actif réel, et séparée de tout autre projet ou entité.",
      },
      {
        question: "Que se passe-t-il si l'opérateur disparaît ?",
        answer: "Votre investissement est protégé par la structure SPV. Chaque villa est détenue par une entité juridique indépendante, elle n'appartient pas directement à InvestDubai.\n\nSi l'opérateur cessait ses activités, le bien et vos parts resteraient intacts. La plateforme régulée et la structure juridique permettent de nommer un gestionnaire de remplacement pour finaliser la rénovation et la vente.\n\nC'est l'une des raisons principales pour lesquelles nous utilisons des SPV : elles isolent chaque actif et protègent les investisseurs du risque opérationnel.",
      },
      {
        question: "Et si le marché de Dubaï s'effondre ?",
        answer: "L'immobilier comporte toujours un risque de marché, et nous ne prétendons pas le contraire. Mais notre modèle intègre plusieurs couches de protection :\n\n• Nous acquérons les villas en dessous de leur valeur rénovée, créant un tampon contre les baisses de prix.\n• Nous n'utilisons aucun effet de levier : pas de prêt bancaire, pas d'appel de marge, pas de vente forcée si le marché baisse.\n• Nos durées de détention sont courtes (12-18 mois), limitant l'exposition à long terme.\n\nEn cas de baisse significative, les prix de sortie pourraient se comprimer et les délais s'allonger. Mais nous ne dépendons pas de l'appréciation du marché : nous créons de la valeur par la rénovation.",
      },
      {
        question: "Combien de temps mon argent est-il bloqué ?",
        answer: `Le cycle d'investissement typique dure ${d.typicalHoldPeriod.value}, couvrant l'ensemble du parcours : acquisition, rénovation, commercialisation et vente.\n\nUne fois la villa vendue et le transfert légal finalisé, le bilan final est préparé. Votre capital plus les bénéfices sont alors crédités sur votre portefeuille, généralement sous 2 à 4 semaines après la clôture.\n\nIl n'existe pas de marché secondaire pour sortir anticipativement, vous ne devez donc investir que des capitaux que vous êtes prêt à immobiliser pendant toute la durée du projet.`,
      },
      {
        question: 'Les rendements sont-ils réalistes ?',
        answer: `Oui, et voici pourquoi. Nos rendements proviennent d'un écart mesurable : la différence entre le prix d'achat d'une villa vétuste et le prix de vente d'une villa rénovée dans le même quartier.\n\nLe rendement moyen historique pour les investisseurs sur les projets finalisés est de ${d.historicalInvestorPayout.value}. C'est basé sur des sorties réelles, pas sur des projections.\n\nLes rendements dépendent de trois facteurs : acheter au bon prix, exécuter la rénovation dans le budget, et vendre dans des conditions de marché favorables. Un historique solide, mais jamais garanti.`,
      },
      {
        question: 'Comment InvestDubai gagne-t-il de l\'argent ?',
        answer: "Notre modèle économique repose sur le partage des bénéfices : nous ne gagnons que lorsque vous gagnez.\n\nVoici comment ça fonctionne :\n• Les investisseurs reçoivent un rendement prioritaire de 15% avant que nous ne participions aux bénéfices.\n• Au-delà de ce seuil, les profits restants sont répartis 60% pour les investisseurs et 40% pour InvestDubai.\n\nCette structure aligne parfaitement nos intérêts. Nous sommes motivés à bien acheter, rénover efficacement et vendre au meilleur prix, car nos revenus en dépendent.",
      },
      {
        question: "Quel est l'investissement minimum ?",
        answer: `L'investissement minimum est de ${d.minimumInvestment.value} (environ ${d.minimumInvestment.secondary}).\n\nCe point d'entrée est conçu pour rendre la stratégie accessible tout en vous permettant de participer de manière significative à des projets de villas de luxe qui nécessitent habituellement des millions pour y accéder directement.\n\nVous pouvez commencer avec un projet pour comprendre le fonctionnement, puis augmenter votre exposition au fil du temps sur plusieurs villas si vous le souhaitez.`,
      },
      {
        question: "Puis-je investir à distance depuis un autre pays ?",
        answer: "Absolument. L'ensemble du processus, de la création de compte à l'investissement jusqu'à la sortie, est entièrement en ligne. La plupart de nos investisseurs n'ont jamais mis les pieds à Dubaï.\n\nVous pouvez suivre votre investissement via notre tableau de bord, recevoir des mises à jour par WhatsApp et voir l'avancement des travaux chaque semaine sur Instagram. Lorsque la villa est vendue, les fonds sont crédités directement sur votre portefeuille.\n\nSi vous souhaitez visiter un projet sur place, vous êtes bienvenu pour organiser une visite avec l'équipe, mais c'est entièrement facultatif.",
      },
      {
        question: 'Quid de la fiscalité pour les résidents français ?',
        answer: "Dubaï n'applique aucun impôt sur les revenus d'investissement. Cependant, les résidents fiscaux français sont tenus de déclarer leurs revenus mondiaux aux autorités françaises.\n\nNous fournissons une documentation claire pour chaque investissement : capital déployé, bénéfices perçus et dates de transaction, afin que vous ayez tout le nécessaire pour votre déclaration annuelle.\n\nNous vous recommandons de consulter votre conseiller fiscal pour des orientations spécifiques sur vos obligations déclaratives et les conventions fiscales applicables entre la France et les Émirats.",
      },
    ],
  },

  finalCta: {
    label: 'Commencer',
    title: 'Ouvrez votre compte et découvrez les projets en cours',
    subtitle: `Créez votre compte en quelques minutes, explorez les opportunités de villas disponibles et investissez via une structure régulée à partir de ${d.minimumInvestment.value}.`,
    primaryCta: 'Créer un Compte',
    secondaryCta: 'Réserver un Appel',
    disclaimer: '',
  },

  footer: {
    copyright: '\u00A9 2026 InvestDubai. Tous droits réservés.',
    links: [
      { label: 'Conditions', href: '/fr/legal/terms-of-use' },
      { label: 'Confidentialité', href: '/fr/legal/privacy-policy' },
      { label: 'Mentions Légales', href: '/fr/legal/legal-information' },
    ],
  },
};
