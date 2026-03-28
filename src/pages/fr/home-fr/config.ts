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
      `Nous transformons des biens ordinaires en propriétés d'exception pour créer de la valeur.\nPlus de 40 villas rénovées et revendues dans les quartiers les plus recherchés de Dubaï.\nInvestissez dès 1 000 €.`,
    primaryCta: 'Commencer',
    secondaryCta: "En savoir plus",
    stats: [
      { value: d.villasAcquired.value, label: 'Propriétés acquises' },
      { value: d.historicalInvestorPayout.value, label: 'Rendement moyen' },
      { value: '12-18 mois', label: 'Durée moyenne' },
      { value: d.leverageUsed.value, label: "D'endettement" },
    ],
  },

  opportunity: {
    label: "L'OPPORTUNITÉ",
    title: 'Dans les quartiers les plus recherchés de Dubaï, deux villas identiques peuvent se vendre à des prix très différents.',
    body: "Même surface, même emplacement, même potentiel.\nCe qui fait la différence, c'est la qualité de la rénovation.\nNous identifions des biens sous-valorisés, les transformons selon les standards de l'ultra-luxe et les revendons à leur pleine valeur sur le marché. C'est cette création de valeur qui génère votre rentabilité.",
    pullQuote: 'Nous créons de la valeur. Vous percevez les gains.',
    chart: {
      leftLabel: 'Achat',
      rightLabel: 'Vente',
      leftBarLabel: 'Acquisition sous le prix du marché',
      rightBarLabel: 'Revente à la valeur de marché',
      gapLabel: "Cette marge constitue votre plus-value",
      gapValue: '+50%',
      gapSubtext: 'Écart type',
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
    label: 'NOTRE POSITIONNEMENT STRATÉGIQUE',
    title: 'Pourquoi ce modèle est-il si performant à Dubaï ?',
    subtitle: 'Le marché immobilier de Dubaï présente des caractéristiques uniques qui rendent la création de valeur à la fois prévisible et reproductible.',
    cards: [
      {
        title: 'Une architecture standardisée',
        description: "Dans les quartiers les plus recherchés, les promoteurs ont livré des secteurs entiers de villas aux plans et parcelles identiques. Cette uniformité facilite l'analyse du marché : l'écart de valeur entre un bien ordinaire et une propriété rénovée est clair, chiffrable et immédiat.",
        tag: 'Des prix transparents',
      },
      {
        title: 'Des adresses de prestige vieillissantes',
        description: "Les emplacements emblématiques comme Palm Jumeirah ou Al Barari abritent encore de nombreuses villas non rénovées. Les acquéreurs internationaux recherchent ces adresses, mais attendent désormais des finitions ultra-modernes et des propriétés livrées clés en main.",
        tag: 'Pénurie de biens rénovés',
      },
      {
        title: 'Une rentabilité anticipée',
        description: "La transparence du marché et l'abondance de biens comparables nous permettent d'estimer avec précision la valeur de revente avant même l'acquisition. Nous ne spéculons pas sur la hausse du marché. Nous sécurisons nos marges dès l'achat.",
        tag: 'Risque maîtrisé',
      },
    ],
  },

  takeAction: {
    label: "MODÈLE ÉCONOMIQUE",
    title: "Une structure pensée pour sécuriser l'investisseur.",
    subtitle: "Chaque opération suit une structure financière rigoureuse, conçue pour vous rémunérer en priorité.",
    metrics: [
      {
        value: d.priorityReturn.value,
        label: 'Rendement prioritaire',
        description: 'Les premiers 15 % de rentabilité vous sont intégralement reversés avant toute rémunération de notre part.',
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
        value: '1 000 €',
        label: 'Investissement minimum',
        description: `Accédez à cette stratégie dès 1 000 € (environ 4 000 AED) via une structure réglementée.`,
      }
    ],
    ctaText: 'Commencer',
    secondaryCtaText: 'Prenez rendez-vous',
  },

  howItWorks: {
    label: 'NOTRE PROCESSUS',
    title: "Cinq étapes, de l'inscription à la distribution de vos gains.",
    steps: [
      { number: '01', title: 'Créez votre compte', description: 'Inscription et vérification d\'identité (KYC) en quelques minutes, de manière entièrement sécurisée.' },
      { number: '02', title: 'Découvrez nos opportunités', description: 'Accédez à une sélection de propriétés dans les quartiers les plus exclusifs de Dubaï. Chaque opportunité est adossée à un actif tangible.' },
      { number: '03', title: 'Investissez dès 1 000 €', description: "Sélectionnez une opération, allouez votre capital et devenez actionnaire de la structure juridique qui détient la propriété." },
      { number: '04', title: 'Suivez la transformation', description: "Suivez l'avancement des travaux via un canal WhatsApp dédié, votre tableau de bord investisseur et des comptes rendus visuels hebdomadaires." },
      { number: '05', title: 'Récoltez vos gains', description: "Lors de la cession de la propriété, vous récupérez votre capital initial ainsi que votre part des gains." },
    ],
    cta: 'Commencer',
    secondaryCtaText: 'En savoir plus sur la stratégie',
  },

  whyInvestDubai: {
    label: 'NOTRE DIFFÉRENCE',
    title: 'Une maîtrise intégrale. De l\'acquisition à la revente.',
    subtitle: "InvestDubai offre à ses investisseurs un accès exclusif à une stratégie claire : acquérir, valoriser, revendre. Nous internalisons l'intégralité de la chaîne de valeur immobilière.",
    trustPoints: [
      { title: 'Une exécution 100% maîtrisée', description: 'Nous identifions les actifs, concevons les rénovations, pilotons les travaux et gérons la revente.\nAucun recours à la sous-traitance sur notre cœur de métier.' },
      { title: 'Un actif tangible. Un investissement en direct.', description: "Votre capital est adossé à un actif réel, clairement identifié. Vous détenez des parts dans la structure juridique qui possède le bien." },
      { title: 'Une stratégie sans endettement', description: "Nos opérations sont financées exclusivement sur fonds propres.\nAucun risque d'appel de marge ou de vente forcée, garantissant une résilience totale." },
      { title: 'Des budgets de rénovation garantis', description: "Le budget travaux est défini et verrouillé avant l'acquisition.\nAucun appel de fonds imprévu pendant l'opération." },
      { title: 'Une transparence complète à chaque étape', description: "Suivez l'avancement des travaux via un canal WhatsApp dédié, un espace investisseur privé et des comptes rendus hebdomadaires.\nVous suivez également la valorisation de votre actif en temps réel." },
      { title: 'Un cadre strictement réglementé', description: "Toutes les transactions sont réalisées sous la supervision de la DFSA, au sein du DIFC. Un cadre réglementaire reconnu qui protège vos capitaux." },
    ],
    highlightCard: {
      stat: d.villasAcquired.value,
      statLabel: "Villas rénovées et revendues par nos équipes",
      features: [
        'Dans les quartiers les plus recherchés de Dubaï',
        'Architecture et pilotage de projet en interne',
        'Suivi quotidien exigeant des chantiers',
        'Matériaux haut de gamme rigoureusement sélectionnés',
      ],
      founders: 'Fondé par le Groupe Greenbull',
      company: 'Une entité du Groupe Greenbull',
    },
    alignedIncentives: {
    title: 'Notre rémunération est indexée sur votre succès.',
    description: "Notre modèle financier repose sur un alignement total des intérêts. Vous percevez en priorité les 15 % de rentabilité générée. Nous ne sommes rémunérés qu'au-delà de ce seuil. Nous gagnons uniquement lorsque vous gagnez.",
    },
  },

  faq: {
    label: 'QUESTIONS FRÉQUENTES',
    title: 'Vos questions, nos réponses.',
    subtitle: 'Des réponses claires. Sans jargon.',
    cta: 'Prenez rendez-vous',
    questions: [
      {
        question: 'L\'investissement via InvestDubai est-il réglementé ?',
        answer: "Oui. L'ensemble des investissements transite par une plateforme partenaire, régulée par la DFSA (Dubai Financial Services Authority), et implantée au sein du DIFC (Dubai International Financial Centre).\n\nChaque propriété est détenue via une SPV (Special Purpose Vehicle), une entité juridique distincte immatriculée aux Émirats. En investissant, vous détenez des parts de cette structure, qui possède directement le bien.\n\nCe montage juridique garantit que votre capital est adossé à un actif réel, juridiquement encadré et indépendant des autres opérations.",
      },
      {
        question: "Que se passe-t-il en cas de défaillance de l'opérateur ?",
        answer: "Votre capital est protégé grâce à une structuration en SPV. Chaque propriété est détenue par une entité juridique autonome, totalement indépendante d’InvestDubai.\n\nEn cas de cessation de nos activités, le bien immobilier ainsi que vos parts restent intégralement préservés. Le cadre réglementé permet alors la nomination d’un gestionnaire de substitution, chargé de poursuivre la rénovation et d’assurer la cession de l’actif.\n\nL’utilisation systématique de SPV a précisément pour objectif d’isoler le risque opérationnel.",
      },
      {
        question: "Que se passe-t-il en cas de retournement du marché immobilier dubaïote ?",
        answer: "L’immobilier comporte intrinsèquement un risque de marché. Néanmoins, notre méthodologie intègre plusieurs protections.\n\nNous acquérons les propriétés avec une décote par rapport à leur valeur après rénovation, offrant ainsi une marge de sécurité face aux éventuelles corrections de prix. Par ailleurs, nous n’avons recours à aucun crédit bancaire : l’absence d’effet de levier élimine tout risque d’appel de marge ou de liquidation forcée.\n\nNos cycles d’investissement sont volontairement courts (12 à 18 mois), ce qui réduit significativement l’exposition au marché.\n\nDans l’éventualité d’une contraction sévère, les marges peuvent se resserrer et les délais de cession s’allonger. Toutefois, notre rentabilité ne repose pas sur l’évolution globale du marché, mais sur la valeur que nous créons à travers la rénovation des actifs.",
      },
      {
        question: "Pendant combien de temps mon capital est-il immobilisé ?",
        answer: "La durée moyenne d'une opération est de 12 à 18 mois et couvre l'ensemble du cycle : acquisition, rénovation et cession.\n\nÀ l'issue de la vente et du transfert de propriété, un bilan de clôture est établi. Votre capital initial ainsi que vos gains sont alors versés sur votre portefeuille, généralement sous 2 à 4 semaines.\n\nÀ ce jour, il n'existe pas de marché secondaire permettant une sortie anticipée. Nous vous recommandons d'investir uniquement des capitaux que vous pouvez immobiliser pendant toute la durée de l'opération.",
      },
      {
        question: 'Les rendements affichés sont-ils réalistes ?',
        answer: `Oui. La mécanique est simple et transparente : notre rentabilité repose sur la différence entre le prix d'acquisition d'un bien et sa valeur de revente après rénovation.\n\nSur nos opérations finalisées, le rendement moyen distribué à nos investisseurs s'élève à ${d.historicalInvestorPayout.value}. Ce chiffre repose sur des reventes réellement réalisées, et non sur des projections théoriques.\n\nCette performance s'appuie sur trois piliers : acquérir avec une décote, maîtriser les budgets de travaux et revendre dans des conditions optimales. Notre historique est solide, mais les rendements futurs ne peuvent jamais être garantis.`,
      },
      {
        question: 'Comment InvestDubai gagne-t-il de l\'argent ?',
        answer: "Notre modèle économique repose sur le partage des bénéfices : nous ne gagnons que lorsque vous gagnez.\n\nVoici comment ça fonctionne :\n• Les investisseurs reçoivent un rendement prioritaire de 15% avant que nous ne participions aux bénéfices.\n• Au-delà de ce seuil, les profits restants sont répartis 60% pour les investisseurs et 40% pour InvestDubai.\n\nCette structure aligne parfaitement nos intérêts. Nous sommes motivés à bien acheter, rénover efficacement et vendre au meilleur prix, car nos revenus en dépendent.",
      },
      {
        question: "Quel est l'investissement minimum ?",
        answer: "L'investissement minimum est de 1 000 €(~AED 4,000).\nCe point d'entrée est conçu pour rendre la stratégie accessible, tout en vous permettant de participer de manière significative à des opérations sur des villas de luxe qui nécessitent habituellement un capital de plusieurs millions pour y accéder en direct.\nVous pouvez commencer par une opération pour vous familiariser avec le modèle, puis augmenter votre portefeuille au fil du temps sur plusieurs propriétés si vous le désirez.",
      },
      {
        question: "Puis-je investir à distance depuis un autre pays ?",
        answer: "Absolument. L’ensemble du processus, de la création de compte à l’investissement jusqu’à la perception des plus-values, est entièrement numérisé. La majorité de nos investisseurs n’ont d’ailleurs jamais eu à se déplacer à Dubaï.\n\nVous pouvez suivre votre investissement via notre tableau de bord, recevoir des actualités par WhatsApp et observer l’avancement des travaux chaque semaine sur Instagram. Lors de la revente de la villa, les fonds sont directement crédités sur votre portefeuille en ligne.\n\nSi vous souhaitez visiter un chantier sur place, vous êtes bien entendu libre d’organiser une visite avec nos équipes. Cela reste toutefois entièrement facultatif.",
      },
      {
        question: 'Quelle est la fiscalité pour les résidents français ?',
        answer: "Les Émirats Arabes Unis n'appliquent aucun impôt sur les plus-values d'investissement. Cependant, les résidents fiscaux français sont tenus de déclarer leurs revenus mondiaux aux autorités de leur pays.\n\nNous fournissons une documentation claire pour chaque investissement : capital alloué, plus-values générées et dates de transaction, afin que vous disposiez de tous les éléments nécessaires pour votre déclaration annuelle.\n\nNous vous recommandons de consulter votre conseiller patrimonial pour des orientations spécifiques sur vos obligations déclaratives et les conventions fiscales applicables entre la France et les Émirats.",
      },
    ],
  },

  finalCta: {
    label: 'INVESTIR',
    title: 'Ouvrez votre compte et découvrez les projets en cours.',
    subtitle: 'Créez votre compte en quelques minutes, explorez les opportunités de villas disponibles et investissez via une structure régulée à partir de 1 000 €.',
    primaryCta: 'Commencer',
    secondaryCta: 'Prenez rendez-vous',
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
