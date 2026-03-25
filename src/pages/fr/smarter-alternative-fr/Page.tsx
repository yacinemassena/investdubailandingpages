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
  ['Villas de luxe Dubaï', 'Objectif 20%+', '12-18 mois', 'Rénovation active. Sortie définie à la revente.'],
];

const steps = [
  {
    title: 'Vous accédez au projet',
    description:
      'Consultez une opportunité spécifique et investissez à partir de 1 000 $ (~4 000 AED). Chaque projet est détenu via une SPV dédiée qui donne aux investisseurs une exposition à un actif sous-jacent spécifique.',
    icon: Wallet,
  },
  {
    title: 'Nous sourçons',
    description:
      'Nous identifions des villas de luxe à fort potentiel dans les emplacements haut de gamme de Dubaï, appuyés par les données, l\'expérience et le timing.',
    icon: Search,
  },
  {
    title: 'Nous exécutons',
    description:
      'Notre équipe gère la conception, les autorisations, la rénovation, les finitions haut de gamme et la revente. Les investisseurs bénéficient de l\'exécution sans rien gérer.',
    icon: Hammer,
  },
  {
    title: 'Vous gagnez',
    description:
      'À la vente du bien, les investisseurs récupèrent leur capital plus leur part de la plus-value via la structure du projet.',
    icon: BadgeDollarSign,
  },
];

const whyDifferent = [
  {
    title: 'Création de valeur',
    description:
      'Les rendements proviennent de la rénovation et du repositionnement, pas d\'une attente passive de l\'appréciation.',
    icon: TrendingUp,
  },
  {
    title: 'Cycles plus courts',
    description:
      '12-18 mois signifie que votre capital n\'est pas bloqué pendant des années. Vous pouvez redéployer plus rapidement qu\'avec un investissement locatif traditionnel.',
    icon: Clock,
  },
  {
    title: 'Reventes attractives',
    description:
      'Les quartiers haut de gamme de Dubaï attirent des acheteurs internationaux à la recherche de luxe clé en main. Ce bassin d\'acheteurs soutient une dynamique de revente solide.',
    icon: Shield,
  },
];

const protectionCards = [
  {
    title: 'Vous détenez des parts dans l\'entité qui possède la villa.',
    description:
      'Chaque projet passe par sa propre SPV. Cette SPV détient le titre de propriété. Vous êtes actionnaire de cette entité — une propriété réelle liée à un bien réel, pas un fonds mutualisé.',
    subtext:
      '',
  },
  {
    title: 'Budgets de rénovation fixés. Pas d\'appel de fonds.',
    description:
      'Nous définissons le budget de rénovation à l\'avance. En cas de dépassement, c\'est pour nous. Vous ne recevrez pas de demande de capital supplémentaire pendant le projet.',
    subtext:
      '',
  },
  {
    title: 'Les investisseurs sont payés en premier. Rendement prioritaire de 15%.',
    description:
      'Vous recevez un rendement préférentiel de 15% avant le partage des bénéfices. Ce n\'est qu\'après ce seuil que nous participons à la plus-value. 60% pour vous, 40% pour nous.',
    subtext:
      '',
  },
];

const whyChoose = [
  'Résultats réalisés sur des projets terminés, soutenus par un historique de sorties réelles et de bénéfices distribués.',
  'L\'équipe gère le sourcing, la rénovation et l\'exécution de la revente, tandis que les investisseurs accèdent à l\'opportunité sans gestion directe du bien.',
  'Commencez à partir de 1 000 $ (~4 000 AED) et construisez votre exposition progressivement sur plusieurs projets.',
];

const fit = [
  'Vous souhaitez des rendements supérieurs aux ETF ou aux livrets d\'épargne',
  'Vous préférez des cycles courts plutôt que des placements sur 10 ans',
  'Vous voulez une exposition immobilière sans gestion directe',
  'Vous avez des capitaux dont vous n\'aurez pas besoin immédiatement',
];

const notFit = [
  'Vous avez besoin de rendements garantis',
  'Vous nécessitez une liquidité immédiate',
  'Vous n\'êtes pas à l\'aise avec l\'immobilisation du capital pendant tout le cycle du projet',
  'Vous souhaitez uniquement une exposition passive au marché',
];

const faqItems = [
  {
    q: 'Dans quoi est-ce que j\'investis exactement ?',
    a: 'Vous investissez dans un projet de villa de luxe spécifique à Dubaï.\nChaque projet est détenu via sa propre SPV (Special Purpose Vehicle), une entité juridique dédiée qui possède le titre de propriété.\nLorsque vous investissez, vous recevez des parts de cette SPV. Votre capital est lié à un actif identifiable et tangible, pas réparti dans un portefeuille anonyme.',
  },
  {
    q: 'Comment les rendements sont-ils générés ?',
    a: 'Les rendements proviennent de l\'écart entre ce que nous payons pour une villa sous-évaluée et son prix de vente après rénovation.\nNous acquérons des villas en dessous de leur valeur rénovée, les transformons selon des standards haut de gamme et les vendons au prix du marché.\nLe profit est la différence entre le coût total (acquisition + rénovation + frais) et le prix de vente.\nAprès votre rendement prioritaire de 15%, les profits restants sont répartis 60% pour les investisseurs et 40% pour InvestDubai.',
  },
  {
    q: 'Quels rendements puis-je espérer ?',
    a: 'Nous visons plus de 20% par projet. Le rendement moyen historique pour les investisseurs sur les projets finalisés est de 29%.\nLes rendements dépendent de trois facteurs : acheter au bon prix, exécuter la rénovation dans le budget et vendre dans des conditions de marché favorables.\nUn historique solide, mais les rendements ne sont jamais garantis. L\'immobilier comporte des risques inhérents.',
  },
  {
    q: 'Comment mon investissement est-il protégé ?',
    a: 'Plusieurs couches de protection sont intégrées dans la structure :\n• Chaque projet est logé dans sa propre SPV qui détient le bien de manière indépendante.\n• Les budgets de rénovation sont fixés à l\'avance. Pas d\'appel de fonds.\n• Zéro effet de levier signifie pas de risque de vente forcée si le marché baisse.\n• Vous recevez un rendement prioritaire de 15% avant que nous ne participions à la plus-value.\nCette structure isole chaque actif et aligne les intérêts.',
  },
  {
    q: 'Qu\'est-ce que le rendement préférentiel de 15% ?',
    a: 'Le rendement préférentiel signifie que les investisseurs sont payés en premier.\nÀ la sortie d\'un projet, les premiers 15% de profits vont entièrement aux investisseurs. Ce n\'est qu\'après ce seuil que la répartition 60/40 s\'applique (60% aux investisseurs, 40% à InvestDubai).\nCette structure garantit que nous ne gagnons que lorsque vous gagnez bien.',
  },
  {
    q: 'Que se passe-t-il si les coûts de rénovation dépassent le budget ?',
    a: 'Nous absorbons le dépassement. Les budgets de rénovation sont verrouillés avant le démarrage du projet, et les investisseurs ne sont jamais sollicités pour du capital supplémentaire.\nVotre exposition est plafonnée à votre investissement initial. Si les coûts dépassent les projections, ce risque est pour nous, pas pour vous.',
  },
  {
    q: 'Puis-je investir à distance depuis un autre pays ?',
    a: 'Absolument. L\'ensemble du processus est 100% en ligne. Création de compte, vérification d\'identité, approvisionnement du portefeuille et investissement se font tous en ligne.\nNos 2 500+ investisseurs viennent de 40+ pays à travers l\'Europe, l\'Asie, le Moyen-Orient et au-delà. La plupart n\'ont jamais mis les pieds à Dubaï.\nVous pouvez suivre l\'avancement via le tableau de bord, les mises à jour WhatsApp et le contenu Instagram hebdomadaire.',
  },
  {
    q: "Quel est l'investissement minimum ?",
    a: 'Le minimum est de 1 000 $ (~4 000 AED).\nCe point d\'entrée vous permet de comprendre le fonctionnement du modèle avant de monter en puissance. De nombreux investisseurs qui ont commencé au minimum déploient maintenant significativement plus par projet à mesure qu\'ils gagnent en confiance dans la stratégie.',
  },
  {
    q: 'Combien de temps mon argent est-il bloqué ?',
    a: 'Le cycle de projet typique est de 12 à 18 mois, couvrant l\'acquisition, la rénovation, la commercialisation et la vente.\nLe capital est restitué après la vente de la villa et la finalisation du bilan. Généralement sous 2 à 4 semaines après la clôture.\nIl n\'existe actuellement pas de marché secondaire pour les sorties anticipées, donc n\'investissez que des capitaux que vous êtes prêt à laisser immobilisés pendant toute la durée.',
  },
  {
    q: 'Quels sont les principaux risques ?',
    a: 'Comme tout investissement immobilier, il y a des risques :\n• Risque de marché : les prix des villas peuvent baisser.\n• Risque d\'exécution : retards de rénovation ou dépassements de coûts.\n• Risque de liquidité : le capital est bloqué pendant le projet.\n• Risque de timing : la vente pourrait prendre plus de temps que prévu.\nNous réduisons l\'exposition en achetant sous le marché, en contrôlant les budgets rigoureusement et en opérant sans effet de levier. Mais aucun investissement n\'est sans risque.',
  },
];

export default function SmarterAlternative() {
  useDocumentHead({
    title: 'Une Alternative Plus Intelligente aux Investissements Traditionnels | InvestDubai',
    description: 'Rénovation de villas de luxe à Dubaï. 29% de rendement moyen. Cycles de 12-18 mois. Comparez aux ETF, locatif et VEFA. Accès régulé dès 1 000 $.',
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
            <span className="section-label shadow-sm border border-emerald-100">A smarter alternative to traditional investing</span>
            <h1 className="text-display-1 text-zinc-900 mb-6 md:mb-8">
              Dubai luxury villa flips. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">29% average payout.</span>
            </h1>
            <p className="text-body-lg text-zinc-600 max-w-3xl mx-auto mb-8 md:mb-10">
              For investors who want real estate exposure with shorter timelines, active value creation, and a defined exit - instead of waiting years for appreciation or managing tenants.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-zinc-900 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-xl shadow-zinc-900/20 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all">
                Create an Account <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto bg-white text-zinc-900 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 border border-zinc-200 hover:bg-zinc-50 transition-all">
                See How It Works
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Historical Payout', value: '29% avg' },
                { label: 'Hold Period', value: '12-18 mo' },
                { label: 'Leverage Used', value: '0%' },
                { label: 'Profits Distributed', value: '$80M+' }
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-label rounded-full mb-6 border border-emerald-500/20">Why this strategy</span>
            <h2 className="text-h2 text-white mb-6">How villa flips compare to what you're probably already doing</h2>
            <p className="text-body-lg text-zinc-400 max-w-3xl mx-auto">Most investors juggle the same options: ETFs, buy-to-let, off-plan. Each has trade-offs. Here's where Dubai luxury villa flips sit.</p>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl mb-12 shadow-2xl">
            <table className="w-full text-body whitespace-nowrap md:whitespace-normal">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/80">
                  <th className="text-left px-6 py-5 text-white font-semibold tracking-wide">Investment</th>
                  <th className="text-left px-6 py-5 text-white font-semibold tracking-wide">Return Profile</th>
                  <th className="text-left px-6 py-5 text-white font-semibold tracking-wide">Timeline</th>
                  <th className="text-left px-6 py-5 text-white font-semibold tracking-wide">Trade-off</th>
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
                      <span className="text-label text-zinc-500 block mb-1.5">Return Profile</span>
                      <span className={`text-body ${i === 3 ? 'text-emerald-400 font-semibold' : 'text-zinc-300'}`}>{row[1]}</span>
                    </div>
                    <div>
                      <span className="text-label text-zinc-500 block mb-1.5">Timeline</span>
                      <span className={`text-body ${i === 3 ? 'text-white font-medium' : 'text-zinc-300'}`}>{row[2]}</span>
                    </div>
                    <div>
                      <span className="text-label text-zinc-500 block mb-1.5">Trade-off</span>
                      <span className={`text-body leading-relaxed block ${i === 3 ? 'text-white' : 'text-zinc-400'}`}>{row[3]}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-zinc-500 max-w-3xl mx-auto text-body">This strategy works best for investors who want exposure to tangible real estate, shorter capital cycles, and returns driven by execution rather than market timing.</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label border border-emerald-100">How it works</span>
            <h2 className="text-h2 text-zinc-900 mb-6">
              Buy. Renovate. Sell. That's the model.
            </h2>
            <p className="text-body-lg text-zinc-600">
              We acquire undervalued luxury villas, renovate them to premium standards, and sell them at the renovated market price. The return comes from execution.
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
            <h3 className="text-h3 text-zinc-900 text-center mb-12">Why the return profile is different?</h3>
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
                Create an Account
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-300 bg-white text-zinc-900 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium hover:bg-zinc-50 transition-colors">
                <Phone className="w-4 h-4" />
                Book a Call
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-label rounded-full mb-6 border border-emerald-500/20">Investor safeguards</span>
            <h2 className="text-h2 text-white mb-6">How the structure protects you</h2>
            <p className="text-body-lg text-zinc-400 max-w-3xl mx-auto">Strong returns matter. So does knowing your money is handled properly. Here's how each project is structured.</p>
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-label rounded-full mb-6 border border-emerald-500/20">Track Record</span>
            <h2 className="text-h2 text-white mb-6">40+ villas acquired, renovated & sold</h2>
            <p className="text-body-lg text-zinc-400 max-w-2xl mx-auto">Every project follows the same model: find undervalued villas, renovate to modern standards, and sell at full market value.</p>
          </div>
        </div>
        <TrackRecordCarousel rows={1} showTitle={false} showExpandButton={false} />
      </section>

      {/* Fit Section */}
      <section className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label border border-emerald-100">Portfolio fit</span>
            <h2 className="text-h2 text-zinc-900 mb-6">Is this the right fit for your portfolio?</h2>
            <p className="text-body-lg text-zinc-600 max-w-3xl mx-auto">If you are looking for a more deliberate alternative to traditional investing, this model may be worth exploring further.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-zinc-200 p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 opacity-50" />
              <h3 className="text-h3 text-zinc-900 mb-8 relative z-10">This may fit if you...</h3>
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
              <h3 className="text-h3 text-zinc-900 mb-8 relative z-10">This may not fit if you...</h3>
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
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 text-label rounded-full mb-8 border border-emerald-500/30">Get Started</span>
          <h2 className="text-h2 text-white mb-6">Start with $1,000. See what's available now.</h2>
          <p className="text-body-lg text-zinc-300 mb-12 max-w-2xl mx-auto">Create your account, explore current projects, and invest through a regulated structure.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-emerald-500 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all">
              Create an Account <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label border border-emerald-100">FAQ</span>
            <h2 className="text-h2 text-zinc-900 mb-6">Common investor questions</h2>
            <p className="text-body-lg text-zinc-600 max-w-2xl mx-auto">Key questions around structure, returns, liquidity, and risk.</p>
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
