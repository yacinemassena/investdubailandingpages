import { PageConfig } from '../../types/config';

export const pageConfig: PageConfig = {
  meta: {
    title: "FAQ Hub: Everything Investors Ask Before Their First Deposit",
    description: "Comprehensive FAQ covering security, returns, timeline, fees, and risks for Dubai villa flip investments.",
    pageNumber: 10
  },
  content: {
    en: {
      badge: "Complete FAQ",
      headline: "Every Question You Have, Answered Honestly. Full Transparency.",
      answerCapsule: "The fastest path from signup to first deposit is clarity. This comprehensive FAQ covers everything investors ask before committing capital: security and ownership, returns and fees, timeline and liquidity, market risks, and support options. No vague answers, no fine print — just the honest information you need to invest with confidence.",
      primaryCta: "Create Your Free Account",
      secondaryCta: "Book a Call",
      heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
      heroImageAlt: "FAQ and Questions",
      metricLabel: "Questions Covered",
      metricValue: "30",
      metricSubtext: "Across all topics",
      nav: { howItWorks: "Categories", faq: "All FAQs", signUp: "Get Started" },
      howItWorks: {
        title: "FAQ Categories",
        subtitle: "Jump directly to the topics that matter most to you.",
        steps: [
          { title: "Security & Ownership", description: "SPV structure, title deeds, DIFC regulation, what happens if something goes wrong, asset protection." },
          { title: "Returns & Fees", description: "Expected returns, profit sharing mechanics, fee transparency, priority returns, historical performance." },
          { title: "Timeline & Liquidity", description: "How long investments last, what affects duration, when you get paid, early exit options." },
          { title: "Market & Risk", description: "Dubai market dynamics, what could go wrong, how risks are mitigated, worst-case scenarios." },
          { title: "Process & Support", description: "How to sign up, KYC requirements, funding options, ongoing communication, getting help." },
          { title: "Getting Started", description: "Minimum investment, first steps, what to expect, scaling up over time." }
        ]
      },
      trust: {
        title: "Top Questions From New Investors",
        items: [
          { icon: "shield", title: "Is This Legitimate?", description: "Yes. You own equity in a legal entity (SPV) that holds real property. DIFC regulated. $327M deployed. 50+ completed projects. 2,500+ investors. GreenBull Group valued at €230M with 10+ years of track record." },
          { icon: "history", title: "What Returns Are Realistic?", description: "Historical average: ~20% per project over 12–18 months. Range: 15–52% depending on the project. Past performance doesn't guarantee future results, but our process is proven." },
          { icon: "clock", title: "How Long Is Money Locked?", description: "Typically 6–18 months per project. No early exit option currently. Make sure you're comfortable with the full potential timeline before investing." }
        ],
        quote: "Skepticism is healthy. I'd be worried if you weren't asking hard questions before putting money in. Read everything here. Then call us and grill us some more. That's how you invest with confidence.",
        quoteAuthor: "Yann Darwin",
        quoteRole: "Co-Founder, GreenBull Group"
      },
      faq: {
        title: "Comprehensive FAQ",
        subtitle: "Detailed answers to every common question.",
        items: [
          // Security & Ownership
          { question: "How do I know my money is safe?", answer: "Multiple protections: 1) SPV ownership means you hold equity in a legal entity that owns real property. 2) DIFC regulation provides governance under English common law. 3) Asset segregation protects villa ownership from company-level issues. 4) Fixed renovation costs prevent budget overruns affecting your capital." },
          { question: "What exactly am I investing in?", answer: "You're buying equity shares in a Special Purpose Vehicle (SPV) that purchases, renovates, and sells a specific luxury villa in Dubai. You're a co-owner of that property until it sells." },
          { question: "What is an SPV and why does it matter?", answer: "A Special Purpose Vehicle (SPV) is a separate legal entity created specifically to own a single property. This structure ensures your investment is ring-fenced—if anything happens to GreenBull, the SPV still owns the villa and your equity stake remains protected." },
          { question: "Do I get a title deed?", answer: "The SPV receives the title deed issued by the Dubai Land Department. As a shareholder in the SPV, you have legal equity ownership of the entity that holds the property title." },
          { question: "What happens if GreenBull disappears?", answer: "Your investment is protected by the SPV structure. The SPV is a separate legal entity that owns the villa directly. Even if GreenBull were to close, the SPV would still own the asset, and shareholders would retain their equity rights." },
          { question: "Is InvestDubai regulated?", answer: "Yes. We operate under DIFC (Dubai International Financial Centre) regulation, which follows English common law standards. This provides robust investor protections and legal recourse mechanisms." },
          { question: "How do I verify this is legitimate?", answer: "This is real equity ownership in tangible real estate assets. Each investment corresponds to a specific villa you can visit. We've completed 50+ projects, deployed $327M, and serve 2,500+ investors. GreenBull Group is valued at €230M with a 10+ year track record." },
          { question: "What legal protections do I have?", answer: "You're protected by: SPV equity ownership, DIFC regulatory framework, English common law jurisdiction, asset segregation from company operations, and transparent documentation for every transaction." },
          
          // Returns & Fees
          { question: "What returns can I expect?", answer: "Historical average is approximately 20% per project over 12-18 months. Individual projects have ranged from 15% to 52% depending on the specific opportunity. Past performance does not guarantee future results." },
          { question: "How is profit calculated and distributed?", answer: "Profit = Sale Price - (Purchase + Renovation + Costs). Investors receive 15% priority return first, then 60% of remaining profit. Distribution happens 2-4 weeks after sale closes via your investor wallet." },
          { question: "What fees does InvestDubai charge?", answer: "Fee structure is transparent: there are acquisition fees, management fees during the project, and performance fees on profits. All fees are disclosed upfront before you invest in any project." },
          { question: "What is the priority return?", answer: "The 15% priority return means investors receive their first 15% of profit before any profit-sharing with GreenBull. This aligns incentives—we only profit significantly when you profit well." },
          { question: "Are returns guaranteed?", answer: "No. Real estate investing carries risk and returns are never guaranteed. However, our value-add model, no-leverage approach, and prime location focus are designed to maximize probability of positive outcomes." },
          { question: "How do I receive my profits?", answer: "Profits are credited to your investor wallet 2-4 weeks after the property sale closes. You can then withdraw to your bank account or reinvest in new projects." },
          
          // Timeline & Liquidity
          { question: "How long is my money locked?", answer: "Typical project duration is 6-18 months. This covers acquisition, renovation, marketing, and sale. Plan for the full potential timeline before investing—there's currently no early exit option." },
          { question: "Can I exit early if I need my money?", answer: "Currently, there is no early exit mechanism. Once invested, your capital is committed until the property sells. Only invest money you won't need during the project timeline." },
          { question: "What affects project duration?", answer: "Duration depends on: renovation complexity, market conditions, buyer demand, and optimal sale timing. We don't rush sales to hit arbitrary deadlines—we wait for the right buyer to maximize your returns." },
          { question: "When do I get paid after a sale?", answer: "Funds are typically distributed 2-4 weeks after sale completion. This allows time for transaction settlement, final accounting, and profit calculation." },
          { question: "What happens if a project takes longer than expected?", answer: "Some projects extend beyond initial estimates due to market conditions or renovation scope. You'll receive regular updates, and the priority is always maximizing sale price rather than rushing to close." },
          
          // Market & Risk
          { question: "What happens if the market crashes?", answer: "Our value-add model provides buffer: we buy 30-40% below renovated value and add tangible renovation value. Even 20-30% market drops typically don't erase this margin. Short cycles (6-18 months) also limit long-term exposure." },
          { question: "What are the main risks?", answer: "Key risks include: market decline affecting sale prices, renovation delays or complications, longer-than-expected sale timelines, currency fluctuation (for non-AED investors), and general real estate market risks." },
          { question: "How do you mitigate risk?", answer: "Five pillars: 1) Prime locations only, 2) Standardized villa types for clean comparisons, 3) Deep value-add margins (30-40% below renovated value), 4) 100% cash (no leverage), 5) Short cycles limiting exposure." },
          { question: "Is Dubai real estate stable?", answer: "Dubai's prime villa market has shown resilience due to limited supply, strong demand from HNWIs, favorable tax environment, and global safe-haven status. However, all real estate markets have cycles." },
          { question: "What if a renovation goes over budget?", answer: "Renovation costs are fixed in the project structure. GreenBull's in-house team controls execution, and any cost overruns are absorbed by the operator, not passed to investors." },
          { question: "Is there currency risk?", answer: "Investments are in AED, which is pegged to USD. European investors may experience EUR/AED fluctuation. This can work for or against you depending on exchange rate movements." },
          
          // Process & Support
          { question: "How do I get started?", answer: "Create free account (2 min) → Complete KYC (24-48h verification) → Fund wallet → Choose project → Invest. Our team is available for calls at any point." },
          { question: "What is KYC and why is it required?", answer: "KYC (Know Your Customer) is regulatory requirement to verify investor identity. It protects against fraud and money laundering. Typically takes 24-48 hours for verification." },
          { question: "How do I fund my account?", answer: "You can fund via bank transfer or card payment. Funds go to your investor wallet, from which you can invest in projects or withdraw back to your bank." },
          { question: "How will I stay updated on my investment?", answer: "Weekly Instagram story updates, YouTube documentation, investor dashboard access, and email updates for major milestones. Transparency is core to our model." },
          { question: "Can I visit the properties?", answer: "Yes, though not required. Contact us to arrange site visits if you're in Dubai. Most investors never visit and rely on our weekly video updates and dashboard." },
          { question: "Who should I contact with questions?", answer: "Our investor success team is available via email, chat, or scheduled calls. Book a call through your dashboard or reach out directly—we're here to help at every stage." },
          
          // Getting Started
          { question: "What is the minimum investment?", answer: "Minimum investment is approximately 5,000 AED. This low threshold allows you to start small, learn the model, and scale up as you gain confidence." },
          { question: "Can I invest as a company?", answer: "Yes. Above certain investment thresholds, KYB (Know Your Business) documentation is required. Contact us for corporate investment requirements and net worth criteria." },
          { question: "Should I start small or go big?", answer: "We recommend starting small with your first investment. Learn the model, experience a full cycle, then scale up based on your comfort level and financial situation." },
          { question: "How many projects can I invest in at once?", answer: "No limit. Many investors diversify across multiple projects to spread risk and maintain a pipeline of returns. Each project is independent with its own SPV." }
        ]
      },
      nextStep: {
        title: "Got Your Answers? See What's Available.",
        subtitle: "Create your free account, explore current projects, and invest when you're confident.",
        primaryCta: "Create Your Free Account",
        secondaryCta: "Still Have Questions? Book a Call",
        footnote: "No commitment until you invest. Full transparency at every step."
      },
      footer: {
        description: "Comprehensive investor education for Dubai real estate.",
        explorationTitle: "Explore",
        explorationLinks: [{ label: "FAQ Categories", href: "#how-it-works" }, { label: "All Questions", href: "#faq" }],
        legalTitle: "Legal",
        legalLinks: [{ label: "Full Risk Disclosure", href: "#" }, { label: "Terms", href: "#" }],
        disclaimer: "This FAQ is for informational purposes. Consult advisors before investing.",
        riskWarning: "All investments carry risk of capital loss. Understand risks before committing funds.",
        lastUpdated: "Last Updated: February 2026"
      }
    },
    fr: {
      badge: "FAQ Complète",
      headline: "Toutes Vos Questions, Répondues Honnêtement. Transparence Totale.",
      answerCapsule: "Le chemin le plus rapide de l'inscription au premier dépôt, c'est la clarté. Cette FAQ complète couvre tout ce que les investisseurs demandent avant d'engager du capital : sécurité et propriété, rendements et frais, timeline et liquidité, risques de marché, et options de support. Pas de réponses vagues, pas de petits caractères — juste l'information honnête dont vous avez besoin pour investir en confiance.",
      primaryCta: "Créer Mon Compte Gratuit",
      secondaryCta: "Réserver un Appel",
      heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
      heroImageAlt: "FAQ et Questions",
      metricLabel: "Questions Couvertes",
      metricValue: "30",
      metricSubtext: "Sur tous les sujets",
      nav: { howItWorks: "Catégories", faq: "Toutes les FAQ", signUp: "Commencer" },
      howItWorks: {
        title: "Catégories FAQ",
        subtitle: "Allez directement aux sujets qui vous intéressent.",
        steps: [
          { title: "Sécurité & Propriété", description: "Structure SPV, actes de propriété, régulation DIFC, protection des actifs." },
          { title: "Rendements & Frais", description: "Rendements attendus, mécanique de partage, transparence des frais." },
          { title: "Timeline & Liquidité", description: "Durée des investissements, facteurs d'influence, quand vous êtes payé." },
          { title: "Marché & Risques", description: "Dynamiques du marché Dubai, ce qui pourrait mal tourner, atténuation des risques." },
          { title: "Processus & Support", description: "Comment s'inscrire, exigences KYC, options de financement, communication." },
          { title: "Démarrer", description: "Investissement minimum, premières étapes, quoi attendre, monter en puissance." }
        ]
      },
      trust: {
        title: "Top Questions des Nouveaux Investisseurs",
        items: [
          { icon: "shield", title: "C'est Légitime ?", description: "Oui. Vous détenez des parts dans une entité légale (SPV) qui possède un bien réel. Régulation DIFC. 327M$ déployés. 50+ projets complétés. 2 500+ investisseurs. GreenBull Group valorisé à 230M€ avec 10+ ans d'historique." },
          { icon: "history", title: "Quels Rendements Sont Réalistes ?", description: "Moyenne historique : ~20% par projet sur 12 à 18 mois. Fourchette : 15 à 52% selon le projet. Les performances passées ne garantissent pas les résultats futurs, mais notre processus est éprouvé." },
          { icon: "clock", title: "Combien de Temps l'Argent Est-il Bloqué ?", description: "Typiquement 6 à 18 mois par projet. Pas d'option de sortie anticipée actuellement. Assurez-vous d'être à l'aise avec la timeline complète avant d'investir." }
        ],
        quote: "Le scepticisme est sain. Je serais inquiet si vous ne posiez pas de questions difficiles avant d'investir. Lisez tout ici. Puis appelez-nous et cuisinez-nous encore. C'est comme ça qu'on investit avec confiance.",
        quoteAuthor: "Yann Darwin",
        quoteRole: "Co-Fondateur, GreenBull Group"
      },
      faq: {
        title: "FAQ Complète",
        subtitle: "Réponses détaillées à toutes les questions courantes.",
        items: [
          // Sécurité & Propriété
          { question: "Comment savoir que mon argent est en sécurité ?", answer: "Protections multiples : 1) Vous détenez des parts dans une société dédiée qui possède un bien réel. 2) La régulation DIFC offre une gouvernance sous le droit anglais. 3) La séparation des actifs protège la villa des problèmes de l'entreprise. 4) Les coûts de rénovation fixes empêchent les dépassements de budget." },
          { question: "Dans quoi j'investis exactement ?", answer: "Vous achetez des parts dans une société dédiée qui achète, rénove et revend une villa de luxe spécifique à Dubai. Vous êtes co-propriétaire de ce bien jusqu'à sa vente." },
          { question: "Qu'est-ce qu'une SPV et pourquoi est-ce important ?", answer: "Une SPV (Special Purpose Vehicle) est une société créée spécifiquement pour détenir un seul bien immobilier. Cette structure garantit que votre investissement est isolé et protégé—si quelque chose arrivait à GreenBull, la société possède toujours la villa et votre participation reste intacte." },
          { question: "Est-ce que je reçois un titre de propriété ?", answer: "La société dédiée reçoit le titre de propriété émis par le Dubai Land Department. En tant qu'actionnaire de cette société, vous avez une propriété légale indirecte du bien." },
          { question: "Que se passe-t-il si GreenBull disparaît ?", answer: "Votre investissement est protégé par la structure juridique. La société dédiée est une entité légale séparée qui possède la villa directement. Même si GreenBull fermait, cette société conserverait l'actif et les actionnaires garderaient leurs droits." },
          { question: "InvestDubai est-il régulé ?", answer: "Oui. Nous opérons sous la régulation DIFC (Dubai International Financial Centre), qui suit les standards du droit anglais. Cela offre des protections robustes pour les investisseurs et des mécanismes de recours légaux." },
          { question: "Est-ce une arnaque ou un schéma Ponzi ?", answer: "Non. C'est une vraie co-propriété dans des actifs immobiliers tangibles. Chaque investissement correspond à une villa spécifique que vous pouvez visiter. Nous avons complété 50+ projets, déployé 327M$, et servons 2 500+ investisseurs. GreenBull Group est valorisé à 230M€ avec 10+ ans d'historique." },
          { question: "Quelles protections légales ai-je ?", answer: "Vous êtes protégé par : la propriété via société dédiée, le cadre réglementaire DIFC, la juridiction du droit anglais, la séparation des actifs des opérations de l'entreprise, et une documentation transparente pour chaque transaction." },
          
          // Rendements & Frais
          { question: "Quels rendements puis-je attendre ?", answer: "La moyenne historique est d'environ 20% par projet sur 12-18 mois. Les projets individuels ont varié de 15% à 52% selon l'opportunité spécifique. Les performances passées ne garantissent pas les résultats futurs." },
          { question: "Comment le profit est-il calculé et distribué ?", answer: "Profit = Prix de Vente - (Achat + Rénovation + Coûts). Les investisseurs reçoivent 15% de rendement prioritaire d'abord, puis 60% du profit restant. La distribution se fait 2-4 semaines après la clôture via votre wallet investisseur." },
          { question: "Quels frais InvestDubai prélève-t-il ?", answer: "La structure de frais est transparente : il y a des frais d'acquisition, des frais de gestion pendant le projet, et des frais de performance sur les profits. Tous les frais sont divulgués avant que vous investissiez dans un projet." },
          { question: "Qu'est-ce que le rendement prioritaire ?", answer: "Le rendement prioritaire de 15% signifie que les investisseurs reçoivent leurs premiers 15% de profit avant tout partage avec GreenBull. Cela aligne les intérêts—nous ne profitons significativement que quand vous profitez bien." },
          { question: "Les rendements sont-ils garantis ?", answer: "Non. L'investissement immobilier comporte des risques et les rendements ne sont jamais garantis. Cependant, notre modèle value-add, notre approche sans effet de levier, et notre focus sur les emplacements prime sont conçus pour maximiser la probabilité de résultats positifs." },
          { question: "Comment reçois-je mes profits ?", answer: "Les profits sont crédités sur votre wallet investisseur 2-4 semaines après la clôture de la vente. Vous pouvez ensuite retirer vers votre compte bancaire ou réinvestir dans de nouveaux projets." },
          
          // Timeline & Liquidité
          { question: "Combien de temps mon argent est-il bloqué ?", answer: "La durée typique d'un projet est de 6-18 mois. Cela couvre l'acquisition, la rénovation, le marketing et la vente. Prévoyez la timeline complète potentielle avant d'investir—il n'y a actuellement pas d'option de sortie anticipée." },
          { question: "Puis-je sortir plus tôt si j'ai besoin de mon argent ?", answer: "Actuellement, il n'y a pas de mécanisme de sortie anticipée. Une fois investi, votre capital est engagé jusqu'à la vente du bien. N'investissez que l'argent dont vous n'aurez pas besoin pendant la durée du projet." },
          { question: "Qu'est-ce qui affecte la durée du projet ?", answer: "La durée dépend de : la complexité de la rénovation, les conditions de marché, la demande des acheteurs, et le timing optimal de vente. Nous ne précipitons pas les ventes pour respecter des délais arbitraires—nous attendons le bon acheteur pour maximiser vos rendements." },
          { question: "Quand suis-je payé après une vente ?", answer: "Les fonds sont typiquement distribués 2-4 semaines après la finalisation de la vente. Cela permet le temps pour le règlement de la transaction, la comptabilité finale et le calcul des profits." },
          { question: "Que se passe-t-il si un projet prend plus de temps que prévu ?", answer: "Certains projets s'étendent au-delà des estimations initiales en raison des conditions de marché ou de l'ampleur de la rénovation. Vous recevrez des mises à jour régulières, et la priorité est toujours de maximiser le prix de vente plutôt que de se précipiter pour conclure." },
          
          // Marché & Risques
          { question: "Que se passe-t-il si le marché s'effondre ?", answer: "Notre modèle offre une marge de sécurité : nous achetons 30-40% sous la valeur rénovée et ajoutons une valeur tangible par la rénovation. Même des baisses de marché de 20-30% n'effacent généralement pas cette marge. Les cycles courts (6-18 mois) limitent aussi l'exposition à long terme." },
          { question: "Quels sont les principaux risques ?", answer: "Les risques clés incluent : baisse de marché affectant les prix de vente, retards ou complications de rénovation, délais de vente plus longs que prévu, fluctuation de devise (pour les investisseurs non-AED), et risques généraux du marché immobilier." },
          { question: "Comment atténuez-vous les risques ?", answer: "Cinq piliers : 1) Emplacements haut de gamme uniquement, 2) Types de villas standardisés pour des comparaisons fiables, 3) Marges de sécurité importantes (achat 30-40% sous la valeur rénovée), 4) 100% fonds propres (pas d'endettement), 5) Cycles courts limitant l'exposition au marché." },
          { question: "L'immobilier à Dubai est-il stable ?", answer: "Le marché des villas prime à Dubai a montré sa résilience grâce à une offre limitée, une forte demande des HNWI, un environnement fiscal favorable, et un statut de valeur refuge mondiale. Cependant, tous les marchés immobiliers ont des cycles." },
          { question: "Et si une rénovation dépasse le budget ?", answer: "Les coûts de rénovation sont fixés dans la structure du projet. L'équipe interne de GreenBull contrôle l'exécution, et tout dépassement de coûts est absorbé par l'opérateur, pas transmis aux investisseurs." },
          { question: "Y a-t-il un risque de change ?", answer: "Les investissements sont en AED, qui est indexé sur l'USD. Les investisseurs européens peuvent connaître des fluctuations EUR/AED. Cela peut jouer en votre faveur ou contre vous selon les mouvements des taux de change." },
          
          // Processus & Support
          { question: "Comment démarrer ?", answer: "Créer un compte gratuit (2 min) → Compléter KYC (vérification 24-48h) → Alimenter wallet → Choisir projet → Investir. Notre équipe est disponible pour des appels à tout moment." },
          { question: "Qu'est-ce que le KYC et pourquoi est-il requis ?", answer: "Le KYC (Know Your Customer) est une exigence réglementaire pour vérifier l'identité des investisseurs. Il protège contre la fraude et le blanchiment d'argent. La vérification prend généralement 24-48 heures." },
          { question: "Comment alimenter mon compte ?", answer: "Vous pouvez alimenter par virement bancaire ou paiement par carte. Les fonds vont sur votre wallet investisseur, à partir duquel vous pouvez investir dans des projets ou retirer vers votre banque." },
          { question: "Comment serai-je informé de mon investissement ?", answer: "Mises à jour hebdomadaires en story Instagram, documentation YouTube, accès au tableau de bord investisseur, et emails pour les étapes majeures. La transparence est au cœur de notre modèle." },
          { question: "Puis-je visiter les propriétés ?", answer: "Oui, mais ce n'est pas requis. Contactez-nous pour organiser des visites si vous êtes à Dubai. La plupart des investisseurs ne visitent jamais et s'appuient sur nos mises à jour vidéo hebdomadaires et le tableau de bord." },
          { question: "Qui contacter pour mes questions ?", answer: "Notre équipe de succès investisseur est disponible par email, chat, ou appels programmés. Réservez un appel via votre tableau de bord ou contactez-nous directement—nous sommes là pour aider à chaque étape." },
          
          // Démarrer
          { question: "Quel est l'investissement minimum ?", answer: "L'investissement minimum est d'environ 5 000 AED (environ 1 000€). Ce seuil bas vous permet de commencer petit, d'apprendre le modèle, et de monter en puissance à mesure que vous gagnez en confiance." },
          { question: "Puis-je investir en tant qu'entreprise ?", answer: "Oui. Au-delà de certains seuils d'investissement, une documentation KYB (Know Your Business) est requise. Contactez-nous pour les exigences d'investissement corporate et les critères de patrimoine net." },
          { question: "Dois-je commencer petit ou grand ?", answer: "Nous recommandons de commencer petit avec votre premier investissement. Apprenez le modèle, vivez un cycle complet, puis montez en puissance selon votre niveau de confort et votre situation financière." },
          { question: "Combien de projets puis-je avoir en même temps ?", answer: "Pas de limite. Beaucoup d'investisseurs se diversifient sur plusieurs projets pour répartir le risque et maintenir un flux de rendements. Chaque projet est indépendant avec sa propre SPV." }
        ]
      },
      nextStep: {
        title: "Vous Avez Vos Réponses ? Voyez Ce Qui Est Disponible.",
        subtitle: "Créez votre compte gratuit, explorez les projets en cours, et investissez quand vous êtes confiant.",
        primaryCta: "Créer Mon Compte Gratuit",
        secondaryCta: "Encore des Questions ? Réservez un Appel",
        footnote: "Aucun engagement tant que vous n'investissez pas. Transparence totale à chaque étape."
      },
      footer: {
        description: "Éducation investisseur complète pour l'immobilier à Dubai.",
        explorationTitle: "Explorer",
        explorationLinks: [{ label: "Catégories FAQ", href: "#how-it-works" }, { label: "Toutes les Questions", href: "#faq" }],
        legalTitle: "Légal",
        legalLinks: [{ label: "Divulgation des Risques", href: "#" }, { label: "Conditions", href: "#" }],
        disclaimer: "Cette FAQ est à titre informatif. Consultez des conseillers avant d'investir.",
        riskWarning: "Tout investissement comporte un risque de perte en capital.",
        lastUpdated: "Dernière mise à jour : Février 2026"
      }
    }
  }
};
