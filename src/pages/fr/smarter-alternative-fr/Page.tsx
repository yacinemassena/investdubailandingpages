import { useState } from 'react';
import { useDocumentHead } from '../../../hooks/useDocumentHead';
import { Shield, History, Scale, Lock, ShieldCheck, ArrowRight, TrendingUp, Clock, Users, Wallet, Search, Hammer, BadgeDollarSign, BarChart3, Target, CalendarClock, CheckCircle, Phone, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalNavbar } from '../../../components/GlobalNavbar';
import { GlobalFooter } from '../../../components/GlobalFooter';
import { TrackRecordCarousel } from '../../../components/TrackRecordCarousel';

const comparisonRows = [
  ['ETF', '8-12%', 'Liquidité quotidienne', 'Aucun contrôle sur la création de valeur'],
  ['Locatif', '4-8%', 'Long terme', 'Pression sur les rendements, locataires, gestion'],
  ['VEFA', 'Variable', 'Plusieurs années', 'Capital bloqué jusqu\'à la livraison'],
  ['Villas de luxe Dubaï', 'Objectif 20%+', '12-18 mois', 'Rénovation active avec sortie définie à la revente.'],
];

const steps = [
  {
    title: 'Vous accédez au projet',
    description:
      'Consultez une opportunité et investissez à partir de 4 000 AED. Chaque opération est structurée au travers d’une SPV dédiée, vous garantissant un accès direct à l’actif immobilier sous-jacent.',
    icon: Wallet,
  },
  {
    title: 'Nous sourçons',
    description:
      'Nous identifions des villas de luxe décotées dans les quartiers les plus exclusifs de Dubaï. Notre approche repose sur l’analyse des données, notre expertise du marché et une sélection rigoureuse du moment d’acquisition.',
    icon: Search,
  },
  {
    title: 'Nous pilotons l’opération',
    description:
      'Notre équipe pilote l’intégralité du processus : conception architecturale, obtention des permis, rénovation haut de gamme et commercialisation. Vous bénéficiez d’une gestion entièrement prise en charge, sans intervention de votre part.',
    icon: Hammer,
  },
  {
    title: 'Vous percevez vos plus-values',
    description:
      'Lors de la revente de la propriété, vous récupérez votre capital initial ainsi que votre quote-part des bénéfices générés par l\'opération.',
    icon: BadgeDollarSign,
  },
];

const whyDifferent = [
  {
    title: 'Création de valeur active',
    description:
      'Notre rentabilité repose sur la rénovation et le repositionnement du bien sur le marché, et non sur une logique spéculative.',
    icon: TrendingUp,
  },
  {
    title: 'Cycles d’investissement courts et optimisés',
    description:
      'Avec des cycles de 12 à 18 mois, votre capital n’est pas immobilisé sur le long terme. Vous conservez ainsi la capacité de redéployer vos fonds rapidement.',
    icon: Clock,
  },
  {
    title: 'Stratégie de revente premium',
    description:
      'Les quartiers les plus prestigieux de Dubaï attirent une clientèle internationale fortunée, exigeante sur des biens clé en main. Cette demande structurelle soutient la liquidité de nos reventes.',
    icon: Shield,
  },
];

const protectionCards = [
  {
    title: 'Vous êtes actionnaire de l\'entité détentrice de l\'actif.',
    description:
      'Chaque opération est adossée à une SPV dédiée, détentrice du titre de propriété. En tant qu’actionnaire, votre investissement est directement lié à un actif immobilier tangible, avec une structure claire et transparente.',
    subtext:
      '',
  },
  {
    title: 'Budgets de rénovation garantis. Aucun appel de fonds.',
    description:
      'Les budgets de rénovation sont validés en amont. Tout dépassement éventuel est pris en charge par l’opérateur. Vous n’êtes jamais sollicité pour des versements complémentaires.',
    subtext:
      '',
  },
  {
    title: 'Rendement prioritaire de 15% pour les investisseurs.',
    description:
      'La structure vous attribue les premiers 15 % de rentabilité générée. Ce n’est qu’au-delà de ce seuil que nous percevons notre rémunération (répartition : 60 % investisseurs / 40 % InvestDubai).',
    subtext:
      '',
  },
];

const whyChoose = [
  'Des performances établies sur des opérations clôturées, documentées par un historique de reventes réelles et de plus-values distribuées.',
  'Notre équipe internalise le sourcing, la maîtrise d\'œuvre et la commercialisation. L\'investisseur accède à une classe d\'actifs exclusive, sans les contraintes de gestion.',
  'Accessible dès 4 000 AED, permettant une diversification progressive de votre portefeuille sur de multiples opérations.',
];

const fit = [
  'Vous recherchez des rendements supérieurs à ceux des ETF ou des livrets d’épargne',
  'Vous privilégiez des cycles courts plutôt que des placements à long terme',
  'Vous voulez une exposition immobilière sans gestion directe',
  'Vous disposez de capitaux que vous pouvez immobiliser temporairement',
];

const notFit = [
  'Vous avez besoin de rendements garantis',
  'Vous avez besoin de liquidités immédiates',
  'Vous n’êtes pas à l’aise avec l’immobilisation de votre capital sur toute la durée du projet',
  'Vous recherchez uniquement une exposition passive au marché',
];

const faqItems = [
  {
    q: 'Dans quoi est-ce que j\'investis exactement ?',
    a: 'Vous investissez dans un projet de villa de luxe situé à Dubaï.\nChaque projet est détenu par une SPV (Special Purpose Vehicle), une entité juridique dédiée, titulaire du titre de propriété.\nEn investissant, vous détenez des actions de cette SPV. Votre capital est ainsi directement adossé à un actif immobilier tangible et identifiable, et non réparti dans un portefeuille anonyme.',
  },
  {
    q: 'Comment les rendements sont-ils générés ?',
    a: 'Les rendements proviennent de l’écart entre le prix d’acquisition d’une villa sous-évaluée et son prix de revente après rénovation.\nNous acquérons des biens en dessous de leur valeur après rénovation, les rénovons selon des standards élevés, puis les revendons au prix du marché.\nLe profit correspond à la différence entre le coût total de l’opération (acquisition, rénovation et frais) et le prix de vente.\nAprès application d’un rendement prioritaire de 15 %, les profits restants sont répartis à hauteur de 60 % pour les investisseurs et 40 % pour InvestDubai.',
  },
  {
    q: 'Quels rendements puis-je espérer ?',
    a: 'Nous visons un rendement supérieur à 20 % par projet. Le rendement moyen historique constaté sur les opérations finalisées s’élève à 29 %.\nLes performances reposent sur trois facteurs clés : acquisition au bon prix, maîtrise du budget de rénovation et revente dans des conditions de marché favorables.\nMalgré un historique solide, les rendements ne sont jamais garantis. L’immobilier comporte des risques inhérents.',
  },
  {
    q: 'Comment mon investissement est-il protégé ?',
    a: 'Plusieurs mécanismes de protection sont intégrés à la structure :\n• Chaque projet est logé dans une SPV dédiée, détentrice du bien de manière indépendante.\n• Les budgets de rénovation sont définis en amont, sans appel de fonds.\n• L’absence d’effet de levier élimine tout risque de vente forcée en cas de baisse du marché.\n• Vous bénéficiez d’un rendement prioritaire de 15 % avant toute participation d’InvestDubai à la plus-value.\nCette structuration permet d’isoler chaque actif et d’aligner pleinement les intérêts.',
  },
  {
    q: 'Qu\'est-ce que le rendement préférentiel de 15% ?',
    a: 'Le rendement préférentiel signifie que les investisseurs sont rémunérés en priorité.\nÀ la sortie d’un projet, les premiers 15 % de profits sont intégralement attribués aux investisseurs. Ce n’est qu’au-delà de ce seuil que la répartition 60/40 s’applique (60 % pour les investisseurs, 40 % pour InvestDubai).\nCette structure garantit que nous ne gagnons que lorsque vous gagnez bien.',
  },
  {
    q: 'Que se passe-t-il si les coûts de rénovation dépassent le budget ?',
    a: 'Nous prenons en charge tout dépassement éventuel. Les budgets de rénovation sont définis en amont du projet, et les investisseurs ne sont jamais sollicités pour des apports complémentaires.\nVotre exposition est strictement limitée à votre investissement initial. En cas de dépassement des coûts, ce risque est assumé par InvestDubai, et non par vous.',
  },
  {
    q: 'Puis-je investir à distance depuis un autre pays ?',
    a: 'Absolument. L’ensemble du processus est entièrement en ligne : création de compte, vérification d’identité, approvisionnement du portefeuille et investissement.\nNos plus de 2 500 investisseurs sont présents dans plus de 40 pays, à travers l’Europe, l’Asie, le Moyen-Orient et au-delà. La majorité n’a jamais eu besoin de se rendre à Dubaï.\nVous pouvez suivre l’avancement de votre investissement via votre tableau de bord, recevoir des mises à jour sur WhatsApp et consulter du contenu hebdomadaire sur Instagram.',
  },
  {
    q: "Quel est l'investissement minimum ?",
    a: 'L’investissement minimum est de 1 000 € (environ 4 000 AED).\nCe ticket d’entrée permet de se familiariser avec le fonctionnement du modèle avant de monter en puissance.\nDe nombreux investisseurs ayant commencé avec ce montant investissent aujourd’hui des montants plus importants à mesure qu’ils gagnent en confiance dans la stratégie.',
  },
  {
    q: 'Pendant combien de temps mon capital est-il immobilisé ?',
    a: 'La durée moyenne d’une opération est de 12 à 18 mois, couvrant l’ensemble du cycle : acquisition, rénovation et revente.\nLes fonds sont distribués après la vente du bien et la clôture de l’opération, généralement sous 2 à 4 semaines.\nIl n’existe pas de marché secondaire permettant une sortie anticipée. Nous recommandons donc de n’investir que des capitaux que vous pouvez immobiliser sur cette durée.',
  },
  {
    q: 'Quels sont les risques principaux ?',
    a: 'Comme pour tout investissement immobilier, des risques existent :\n• Risque de marché : la valorisation des biens peut fluctuer.\n• Risque d\'exécution : retards éventuels ou aléas de chantier.\n• Risque d\'illiquidité : votre capital est bloqué sur la durée de l\'opération.\n• Risque de liquidité à la sortie : la revente peut exiger plus de temps que prévu.\nNous atténuons ces risques par des acquisitions décotées, un contrôle budgétaire rigoureux et une stratégie sans endettement. Toutefois, le risque zéro n\'existe pas.',
  },
];

export default function SmarterAlternative() {
  useDocumentHead({
    title: 'Une Alternative Plus Performante aux Investissements Traditionnels | InvestDubai',
    description: 'Acquisition et valorisation de villas de luxe à Dubaï. Objectif de rentabilité 20%+. Cycles de capitaux de 12-18 mois. Accès exclusif et régulé dès 1 000 $.',
    canonical: 'https://www.investdubai.com/fr/smarteralternative',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-emerald-500/30">
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/0A6A6039.jpg" 
            alt="Dubai luxury villa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label shadow-sm border border-emerald-100">Une alternative plus performante que l’investissement traditionnel.</span>
            <h1 className="text-display-1 text-zinc-900 mb-6 md:mb-8">
              Rénovation de villas de luxe à Dubaï. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Un objectif de rendement supérieur à 20 %.</span>
            </h1>
            <p className="text-body-lg text-zinc-600 max-w-3xl mx-auto mb-8 md:mb-10">
              Pour les investisseurs souhaitant s’exposer à l’immobilier sur des cycles courts, avec une création de valeur active et une sortie définie, sans attendre des années ni gérer des locataires.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-zinc-900 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-xl shadow-zinc-900/20 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all">
                Commencer <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto bg-white text-zinc-900 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 border border-zinc-200 hover:bg-zinc-50 transition-all">
                Notre Méthodologie
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Rendement moyen', value: '29%' },
                { label: 'Durée moyenne', value: '12-18 mois' },
                { label: 'Endettement', value: '0%' },
                { label: 'Plus-values distribuées', value: '$80M+' }
              ].map((stat, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  key={stat.label} 
                  className="bg-white/80 backdrop-blur-md border border-zinc-200 rounded-2xl p-4 shadow-sm"
                >
                  <p className="text-stat text-zinc-900 mb-1">{stat.value}</p>
                  <p className="text-label text-zinc-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 md:py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 -z-10" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-label rounded-full mb-6 border border-emerald-500/20">Notre différence d’approche</span>
            <h2 className="text-h2 text-white mb-6">Comparatif : notre stratégie face aux placements traditionnels.</h2>
            <p className="text-body-lg text-zinc-400 max-w-3xl mx-auto">La plupart des investisseurs hésitent entre les mêmes options : ETF, immobilier locatif, achat sur plan (VEFA). Chacune présente ses limites. Voici comment notre stratégie de rénovation de villas de luxe à Dubaï se distingue.</p>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl mb-12 shadow-2xl">
            <table className="w-full text-body whitespace-nowrap md:whitespace-normal">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/80">
                  <th className="text-left px-6 py-5 text-white font-semibold tracking-wide">Investissement</th>
                  <th className="text-left px-6 py-5 text-white font-semibold tracking-wide">Profil de Rendement</th>
                  <th className="text-left px-6 py-5 text-white font-semibold tracking-wide">Horizon de temps</th>
                  <th className="text-left px-6 py-5 text-white font-semibold tracking-wide">Compromis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`transition-colors ${i === 3 ? 'bg-emerald-950/30 shadow-[inset_4px_0_0_0_#10b981]' : 'hover:bg-zinc-800/30'}`}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-6 py-5 ${i === 3 ? 'text-white font-medium' : 'text-zinc-400'}`}>
                        {i === 3 && j === 0 ? (
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            {cell}
                          </span>
                        ) : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 mb-12">
            {comparisonRows.map((row, i) => {
              if (i !== 1 && i !== 3) return null;
              return (
                <div key={i} className={`p-6 rounded-3xl border relative overflow-hidden ${i === 3 ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-zinc-900/50 border-zinc-800'}`}>
                  {i === 3 && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                  )}
                  <h3 className="text-h4 text-white mb-6 flex items-center gap-3">
                    {i === 3 && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>}
                    {row[0]}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-label text-zinc-500 block mb-1.5">Profil de Rendement</span>
                      <span className={`text-body ${i === 3 ? 'text-emerald-400 font-semibold' : 'text-zinc-300'}`}>{row[1]}</span>
                    </div>
                    <div>
                      <span className="text-label text-zinc-500 block mb-1.5">Horizon de temps</span>
                      <span className={`text-body ${i === 3 ? 'text-white font-medium' : 'text-zinc-300'}`}>{row[2]}</span>
                    </div>
                    <div>
                      <span className="text-label text-zinc-500 block mb-1.5">Compromis</span>
                      <span className={`text-body leading-relaxed block ${i === 3 ? 'text-white' : 'text-zinc-400'}`}>{row[3]}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-zinc-500 max-w-3xl mx-auto text-body">Cette stratégie s’adresse aux investisseurs souhaitant accéder à l’immobilier tangible sur des cycles plus courts, avec des rendements fondés sur la création de valeur réelle plutôt que sur la spéculation de marché.</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label border border-emerald-100">Notre Méthodologie</span>
            <h2 className="text-h2 text-zinc-900 mb-6">
              Acheter. Rénover. Revendre.
            </h2>
            <p className="text-body-lg text-zinc-600">
              Nous acquérons des villas de luxe sous-évaluées, les rénovons selon des standards élevés, puis les revendons à leur juste valeur. Le rendement est le fruit de notre exécution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent z-0" />

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 group h-full">
                <div className="h-full p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 flex flex-col relative overflow-hidden hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors duration-300 relative z-10">
                    <step.icon className="w-6 h-6 text-zinc-600 group-hover:text-emerald-600 transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  
                  <div className="absolute top-6 right-6 text-6xl font-bold text-zinc-100 pointer-events-none transition-colors duration-300 group-hover:text-zinc-200 select-none">
                    0{index + 1}
                  </div>

                  <h3 className="text-h4 text-zinc-900 mb-4 relative z-10">{step.title}</h3>
                  <p className="text-body-sm text-zinc-600 flex-grow relative z-10">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-h3 text-zinc-900 text-center mb-12">Pourquoi notre stratégie de rendement est différente&nbsp;?</h3>
            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              {whyDifferent.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-zinc-50 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-zinc-100 hover:border-zinc-200 transition-colors">
                    <div className="flex items-center gap-3 md:block">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white border border-zinc-200 flex items-center justify-center md:mb-6 shadow-sm flex-shrink-0">
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-zinc-700" />
                      </div>
                      <h4 className="text-h4 text-zinc-900 md:mb-3">{item.title}</h4>
                    </div>
                    <p className="text-body-sm text-zinc-600 mt-3 md:mt-0">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
                Commencer
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-300 bg-white text-zinc-900 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium hover:bg-zinc-50 transition-colors">
                <Phone className="w-4 h-4" />
                Prenez rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-31.jpg" 
            alt="Dubai luxury villa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-label rounded-full mb-6 border border-emerald-500/20">La protection des investisseurs</span>
            <h2 className="text-h2 text-white mb-6">La structuration de la protection de votre investissement</h2>
            <p className="text-body-lg text-zinc-400 max-w-3xl mx-auto">Offrir des rendements élevés est essentiel, mais la sécurité de vos capitaux l’est tout autant. Voici comment chaque opération est structurée.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {protectionCards.map((card) => (
              <div key={card.title} className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 p-5 md:p-8 h-full flex flex-col hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-h3 text-white mb-4">{card.title}</h3>
                <p className="text-body-sm text-zinc-300 mb-6">{card.description}</p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-zinc-500 leading-relaxed text-body italic">{card.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section id="track-record" className="py-12 md:py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 mb-12">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-label rounded-full mb-6 border border-emerald-500/20">Nos Performances</span>
            <h2 className="text-h2 text-white mb-6">Plus de 40 villas acquises, rénovées et revendues</h2>
            <p className="text-body-lg text-zinc-400 max-w-2xl mx-auto">Chaque opération suit le même modèle : identifier des biens sous-évalués, les rénover selon des standards élevés, puis les revendre à leur pleine valeur.</p>
          </div>
        </div>
        <TrackRecordCarousel rows={1} showTitle={false} showExpandButton={false} />
      </section>

      {/* Fit Section */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label border border-emerald-100">Stratégie d’investissement</span>
            <h2 className="text-h2 text-zinc-900 mb-6">Ce modèle est-il adapté à votre stratégie d'investissement&nbsp;?</h2>
            <p className="text-body-lg text-zinc-600 max-w-3xl mx-auto">Si vous recherchez une alternative plus performante aux investissements traditionnels, ce modèle mérite toute votre attention.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-zinc-200 p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 opacity-50" />
              <h3 className="text-h3 text-zinc-900 mb-8 relative z-10">Cette stratégie vous correspond si…</h3>
              <div className="space-y-3 md:space-y-6 relative z-10">
                {fit.map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-zinc-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-100 rounded-3xl border border-zinc-200 p-10 relative overflow-hidden">
              <h3 className="text-h3 text-zinc-900 mb-8 relative z-10">Cette stratégie ne vous correspond pas si…</h3>
              <div className="space-y-3 md:space-y-6 relative z-10">
                {notFit.map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-zinc-500" />
                    </div>
                    <p className="text-zinc-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/0K8A7245.jpg" 
            alt="Dubai luxury villa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm" />
        </div>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 text-label rounded-full mb-8 border border-emerald-500/30">Stratégie d'investissement</span>
          <h2 className="text-h2 text-white mb-6">Prêt à investir&nbsp;? Découvrez nos projets en cours.</h2>
          <p className="text-body-lg text-zinc-300 mb-12 max-w-2xl mx-auto">Créez votre compte, explorez les opportunités disponibles et investissez au sein d’une structure régulée.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-emerald-500 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all">
              Commencer <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> Prenez rendez-vous
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label border border-emerald-100">FAQ</span>
            <h2 className="text-h2 text-zinc-900 mb-6">Questions fréquentes</h2>
            <p className="text-body-lg text-zinc-600 max-w-2xl mx-auto">Tout ce que vous devez savoir sur la structure, les rendements, la liquidité et les risques.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={item.q} className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-colors">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-body-lg text-zinc-900 pr-8">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === i ? 'bg-zinc-200' : 'bg-zinc-100'}`}>
                    <ChevronDown className={`w-5 h-5 text-zinc-600 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-zinc-200/50">
                        <p className="text-zinc-600 leading-relaxed whitespace-pre-line">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GlobalFooter />
    </div>
  );
}
