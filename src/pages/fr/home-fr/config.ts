import { numbersDictionary as d } from '../../../content/numbersDictionary';

export const homepageContent = {
  nav: {
    links: [
      { label: 'Pourquoi Nous', href: '/fr/smarteralternative' },
      { label: 'Le Processus', href: '/fr/how-it-works' },
      { label: 'FAQ', href: '/fr/faq' },
    ],
    loginText: 'Connexion',
    ctaText: 'Commencer',
  },

  hero: {
    eyebrow: 'Investissement immobilier régulé à Dubaï.',
    headline: 'Nous achetons. Nous rénovons. Nous revendons.',
    headlineSecondLine: '',
    subheadline:
      `Nous transformons des biens d'origine en propriétés d'exception pour générer une forte plus-value. Plus de ${d.villasAcquired.value} villas rénovées et revendues dans les quartiers les plus exclusifs de Dubaï. Investissez dès €1,000.`,
    primaryCta: 'Commencer',
    secondaryCta: "Voir l'Opportunité",
    stats: [
      { value: d.villasAcquired.value, label: 'Propriétés acquises' },
      { value: d.historicalInvestorPayout.value, label: 'Rendement moyen' },
      { value: d.typicalHoldPeriod.value, label: 'Durée moyenne' },
      { value: d.leverageUsed.value, label: 'Sans endettement' },
    ],
  },

  opportunity: {
    label: "L'Opportunité",
    title: 'Dans les quartiers les plus prisés de Dubaï, deux villas identiques peuvent se vendre à des prix radicalement différents.',
    body: "Même plan, même adresse, même parcelle. La seule différence entre un bien d'origine et une propriété rénovée ? Son niveau de prestation.\n\nNous achetons des propriétés à rénover, les repensons selon les standards les plus exigeants de l'ultra-luxe, et les revendons à leur pleine valeur sur le marché. C'est cette création de valeur qui génère votre rentabilité.",
    pullQuote: 'Nous créons de la valeur par la rénovation. Vous en récoltez les fruits.',
    chart: {
      leftLabel: 'Achat',
      rightLabel: 'Vente',
      leftBarLabel: 'Acquisition sous le prix du marché',
      rightBarLabel: 'Revente à pleine valeur',
      gapLabel: "Cette marge constitue votre plus-value",
      gapValue: '+50%',
      gapSubtext: 'écart de valorisation typique',
      bottomText: 'Même plan. Même quartier. Même parcelle.',
      disclaimer: 'Illustration. Basée sur des transactions comparables à Palm Jumeirah, Jumeirah Islands et Al Barari.',
    },
    cta: 'Commencer',
  },

  projectResults: {
    headline: 'Historique de performance basé sur des reventes réelles',
    subheadline: `Notre performance repose sur des opérations finalisées, pas sur de simples hypothèses. Sur l'ensemble de nos projets aboutis, le rendement moyen distribué s'élève à ${d.averageProjectROI.value}. Découvrez les chiffres de nos récentes reventes.`,
    latestProjectsLabel: 'Dernières opérations clôturées',
    latestProjectsSubcopy: 'Performances réalisées sur nos récentes rénovations de propriétés d\'exception',
    showMoreText: 'Voir Plus',
    disclaimer: 'Les rendements nets annualisés sont nets de tous frais et charges.',
    projects: [
      { id: 'Villa 32', investment: 'AED 24,670,000', selling: 'AED 34,680,000', roi: '41%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-32.jpg' },
      { id: 'Villa 31', investment: 'AED 23,580,000', selling: 'AED 33,800,000', roi: '43%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-31.jpg' },
      { id: 'Villa 30', investment: 'AED 24,670,000', selling: 'AED 33,800,000', roi: '37%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-30.jpg' },
      { id: 'Villa 29', investment: 'AED 24,343,000', selling: 'AED 34,000,000', roi: '40%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-29.jpg' },
      { id: 'Villa 28', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-28.jpg' },
      { id: 'Villa 27', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-27.jpg' },
      { id: 'Villa 26', investment: 'AED 23,580,000', selling: 'AED 33,000,000', roi: '40%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-26.jpg' },
      { id: 'Villa 25', investment: 'AED 18,215,000', selling: 'AED 25,000,000', roi: '37%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-25.jpg' },
    ],
  },

  whyGapExists: {
    label: 'Notre Avantage Stratégique',
    title: 'Pourquoi ce modèle est-il si performant à Dubaï ?',
    subtitle: 'Le marché immobilier dubaïote présente des caractéristiques uniques qui rendent la création de valeur prévisible et reproductible.',
    cards: [
      {
        title: 'Une architecture standardisée',
        description: "Dans les quartiers les plus cotés, les promoteurs ont bâti des secteurs entiers de villas aux plans et parcelles identiques.\n\nCette uniformité facilite grandement l'analyse du marché : la plus-value entre un bien d'origine et une propriété rénovée est claire, chiffrable et immédiate.",
        tag: 'Des prix transparents',
      },
      {
        title: 'Des adresses de prestige vieillissantes',
        description: "Les emplacements emblématiques comme Palm Jumeirah ou Al Barari abritent encore de nombreuses villas d'origine.\n\nLes acquéreurs internationaux s'arrachent ces adresses, mais exigent aujourd'hui un niveau de finition ultra-moderne et des propriétés livrées clés en main.",
        tag: 'Pénurie de biens rénovés',
      },
      {
        title: 'Une rentabilité anticipée',
        description: "La transparence du marché et l'abondance de biens comparables nous permettent d'estimer avec précision la valeur de revente d'une propriété avant même de l'acquérir.\n\nNous ne spéculons pas sur la hausse du marché : nous maîtrisons nos marges dès l'achat.",
        tag: 'Risque maîtrisé',
      },
    ],
  },

  takeAction: {
    label: "Modèle Économique",
    title: "Une structure pensée pour sécuriser l'investisseur",
    subtitle: "Chaque opération suit une structuration financière rigoureuse, conçue pour vous rémunérer en priorité.",
    metrics: [
      {
        value: d.priorityReturn.value,
        label: 'Rendement prioritaire',
        description: 'Les premiers 15% de rentabilité vous sont intégralement reversés avant toute rémunération de notre part.',
      },
      {
        value: d.targetInvestorReturn.value,
        label: 'Objectif de rendement par opération',
        description: "Fondé sur une discipline d'acquisition stricte, des budgets de rénovation maîtrisés et l'analyse des ventes comparables.",
      },
      {
        value: d.historicalInvestorPayout.value,
        label: 'Rendement moyen historique',
        description: "Constaté sur l'ensemble des opérations clôturées à ce jour.",
      },
      {
        value: '€1,000',
        label: 'Investissement minimum',
        description: `Accédez à cette stratégie à partir de €1,000 (~AED 4,000) via une structure régulée.`,
      },
    ],
    primaryCta: 'Commencer',
    secondaryCta: 'Réserver un Appel',
    disclaimer: '',
  },

  howItWorks: {
    label: 'Notre Processus',
    title: "Cinq étapes, de l'inscription à la distribution de vos plus-values",
    steps: [
      { number: '01', title: 'Créez votre compte', description: 'Inscription et vérification d\'identité (KYC) en quelques minutes, de manière entièrement sécurisée.' },
      { number: '02', title: 'Découvrez nos opportunités', description: 'Accédez à une sélection de propriétés dans les quartiers les plus exclusifs de Dubaï, chaque opportunité étant adossée à un actif tangible.' },
      { number: '03', title: `Investissez à partir de €1,000`, description: "Sélectionnez une opération, allouez votre capital et devenez actionnaire de la structure juridique détenant la propriété." },
      { number: '04', title: 'Suivez la transformation', description: 'Suivez l\'avancement des travaux via un canal WhatsApp dédié, votre tableau de bord et des reportages visuels hebdomadaires.' },
      { number: '05', title: 'Percevez vos revenus', description: 'Lors de la revente de la propriété, vous récupérez votre capital initial ainsi que votre quote-part des plus-values.' },
    ],
    cta: 'Commencer',
  },

  whyInvestDubai: {
    label: 'L\'Avantage InvestDubai',
    title: 'Une maîtrise intégrale. De l\'acquisition à la revente.',
    subtitle: "InvestDubai offre à ses investisseurs l'accès exclusif à une stratégie limpide : acquérir, valoriser, revendre. Nous internalisons l'intégralité de la chaîne de valeur immobilière.",
    trustPoints: [
      { title: 'Une exécution 100% maîtrisée', description: 'Nous identifions les actifs, pilotons l\'architecture, réalisons les travaux et gérons la revente.\nAucune sous-traitance sur notre cœur de métier.' },
      { title: 'Actif tangible, investissement direct', description: "Votre capital est adossé à une propriété physique spécifique.\nVous êtes actionnaire de la structure juridique détentrice du bien." },
      { title: 'Une stratégie sans endettement', description: "Nos opérations sont financées exclusivement sur fonds propres.\nAucun risque d'appel de marge ou de vente forcée, garantissant une résilience totale." },
      { title: 'Des budgets de rénovation garantis', description: "L'enveloppe des travaux est verrouillée avant même l'acquisition.\nAucun appel de fonds imprévu durant l'opération." },
      { title: 'Une transparence sans compromis', description: 'Suivi de chantier par WhatsApp, espace investisseur privé et reportages hebdomadaires.\nVous assistez à la valorisation de votre actif en temps réel.' },
      { title: 'Un cadre strictement réglementé', description: "Toutes les transactions opèrent sous l'égide de la DFSA au sein du DIFC, assurant une protection institutionnelle de vos capitaux." },
    ],
    highlightCard: {
      stat: d.villasAcquired.value,
      statLabel: "Villas rénovées et revendues par nos équipes",
      features: [
        'Dans les quartiers les plus recherchés de Dubaï',
        'Architecture et pilotage de projet en interne',
        'Chantiers suivis au quotidien, sans compromis',
        'Matériaux haut de gamme rigoureusement sélectionnés',
      ],
      founders: 'Fondé par le Groupe Greenbull',
      company: 'Une entité du Groupe Greenbull',
    },
    alignedIncentives: {
    title: 'Notre rémunération est indexée sur votre succès.',
    description: "Notre modèle financier repose sur un alignement total des intérêts. Vous percevez en priorité les 15 premiers pourcents de rentabilité générée. Nous ne sommes rémunérés qu'au-delà de ce palier de performance. Nous gagnons uniquement lorsque vous gagnez.",
    },
  },

  faq: {
    label: 'Questions Fréquentes',
    title: 'Vos questions, nos réponses',
    subtitle: 'Des réponses claires. Sans jargon.',
    cta: 'Réserver un Appel',
    questions: [
      {
        question: 'L\'investissement via InvestDubai est-il réglementé ?',
        answer: "Oui. L'ensemble des investissements transite par une plateforme partenaire régulée par la DFSA (Dubai Financial Services Authority), implantée au sein du DIFC (Dubai International Financial Centre).\n\nChaque propriété est détenue par une SPV (Special Purpose Vehicle), une entité juridique distincte immatriculée aux Émirats. Lors de votre investissement, des actions de cette SPV — elle-même détentrice du titre de propriété — vous sont attribuées.\n\nCe montage juridique garantit que votre capital est adossé à un actif tangible, juridiquement documenté, et strictement étanche vis-à-vis de nos autres opérations.",
      },
      {
        question: "Que se passe-t-il en cas de défaillance de l'opérateur ?",
        answer: "Votre capital est sécurisé par la structure en SPV. La propriété est détenue par une personne morale autonome, et non directement par InvestDubai.\n\nEn cas d'arrêt de nos activités, le bien immobilier et vos parts resteraient intègres. L'infrastructure régulée permettrait alors la nomination d'un gestionnaire de substitution afin de mener à bien la rénovation et la commercialisation de l'actif.\n\nL'utilisation systématisée de SPV a pour vocation première d'isoler le risque opérationnel.",
      },
      {
        question: "Que se passe-t-il en cas de retournement du marché immobilier dubaïote ?",
        answer: "L'immobilier comporte intrinsèquement un risque de marché. Néanmoins, notre méthodologie intègre des boucliers protecteurs :\n\n• Nous acquérons les propriétés avec une décote par rapport à leur valeur rénovée, offrant une marge de sécurité face aux corrections de prix.\n• Nous n'avons recours à aucun crédit bancaire : l'absence d'effet de levier élimine le risque d'appel de marge et de liquidation forcée.\n• Nos cycles d'investissement sont courts (12 à 18 mois), réduisant la fenêtre d'exposition au marché.\n\nDans l'éventualité d'une contraction sévère du marché, nos marges pourraient se resserrer et les délais de revente s'allonger. Toutefois, notre rentabilité ne dépend pas de l'appréciation globale du marché, mais de la valeur ajoutée par nos travaux de rénovation.",
      },
      {
        question: "Pendant combien de temps mon capital est-il immobilisé ?",
        answer: `La durée moyenne d'une opération s'établit à ${d.typicalHoldPeriod.value}, englobant l'intégralité du cycle : acquisition, rénovation, commercialisation et revente.\n\nÀ la suite de la vente de la propriété et du transfert de propriété, un bilan de clôture est dressé. Votre capital initial ainsi que vos plus-values sont alors versés sur votre portefeuille, généralement dans un délai de 2 à 4 semaines.\n\nIl n'existe à ce jour aucun marché secondaire permettant une sortie anticipée. Il convient donc de n'allouer que des capitaux dont vous n'aurez pas besoin pendant la durée de l'opération.`,
      },
      {
        question: 'Les rendements affichés sont-ils réalistes ?',
        answer: `Oui, et la mécanique est transparente. Notre rentabilité découle d'un delta mesurable : la différence entre le coût d'acquisition d'un bien d'origine et sa valeur de revente une fois rénové.\n\nSur nos opérations finalisées, le rendement moyen distribué à nos investisseurs s'élève à ${d.historicalInvestorPayout.value}. Ce chiffre repose sur de véritables reventes constatées, et non sur des modélisations théoriques.\n\nCette performance repose sur l'exécution de trois piliers : acquérir avec une forte décote, maîtriser fermement les budgets de travaux, et revendre dans des conditions optimales. Notre historique est solide, mais les rendements futurs ne peuvent jamais être garantis.`,
      },
      {
        question: 'Comment InvestDubai gagne-t-il de l\'argent ?',
        answer: "Notre modèle économique repose sur le partage des bénéfices : nous ne gagnons que lorsque vous gagnez.\n\nVoici comment ça fonctionne :\n• Les investisseurs reçoivent un rendement prioritaire de 15% avant que nous ne participions aux bénéfices.\n• Au-delà de ce seuil, les profits restants sont répartis 60% pour les investisseurs et 40% pour InvestDubai.\n\nCette structure aligne parfaitement nos intérêts. Nous sommes motivés à bien acheter, rénover efficacement et vendre au meilleur prix, car nos revenus en dépendent.",
      },
      {
        question: "Quel est l'investissement minimum ?",
        answer: `L'investissement minimum est de €1,000 (~AED 4,000).\n\nCe point d'entrée est conçu pour rendre la stratégie accessible, tout en vous permettant de participer de manière significative à des opérations sur des villas de luxe qui nécessitent habituellement un capital de plusieurs millions pour y accéder en direct.\n\nVous pouvez commencer par une opération pour vous familiariser avec le modèle, puis augmenter votre portefeuille au fil du temps sur plusieurs propriétés si vous le désirez.`,
      },
      {
        question: "Puis-je investir à distance depuis un autre pays ?",
        answer: "Absolument. L'ensemble du processus — de la création de compte à l'investissement, jusqu'à la perception des plus-values — est entièrement numérisé. La majeure partie de nos investisseurs n'ont jamais eu à se déplacer à Dubaï.\n\nVous pouvez suivre votre investissement via notre tableau de bord, recevoir des actualités par WhatsApp et voir l'avancement des travaux chaque semaine sur Instagram. Lorsque la villa est revendue, les fonds sont crédités directement sur votre portefeuille en ligne.\n\nSi vous souhaitez visiter un chantier sur place, vous êtes bienvenu pour organiser une visite avec nos équipes, mais cela demeure entièrement facultatif.",
      },
      {
        question: 'Quelle est la fiscalité pour les résidents français ?',
        answer: "Les Émirats Arabes Unis n'appliquent aucun impôt sur les plus-values d'investissement. Cependant, les résidents fiscaux français sont tenus de déclarer leurs revenus mondiaux aux autorités de leur pays.\n\nNous fournissons une documentation claire pour chaque investissement : capital alloué, plus-values générées et dates de transaction, afin que vous disposiez de tous les éléments nécessaires pour votre déclaration annuelle.\n\nNous vous recommandons de consulter votre conseiller patrimonial pour des orientations spécifiques sur vos obligations déclaratives et les conventions fiscales applicables entre la France et les Émirats.",
      },
    ],
  },

  finalCta: {
    label: 'Commencer',
    title: 'Ouvrez votre compte et découvrez les projets en cours',
    subtitle: `Créez votre compte en quelques minutes, explorez les opportunités de villas disponibles et investissez via une structure régulée à partir de €1,000.`,
    primaryCta: 'Commencer',
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
