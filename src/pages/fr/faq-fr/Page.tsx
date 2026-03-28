import { useState } from 'react';
import { useDocumentHead } from '../../../hooks/useDocumentHead';
import { ChevronDown, Search, Shield, Clock, TrendingUp, AlertTriangle, Settings, Rocket } from 'lucide-react';
import { GlobalNavbar } from '../../../components/GlobalNavbar';
import { GlobalFooter } from '../../../components/GlobalFooter';

type FAQItem = { category: string; question: string; shortAnswer?: string; answer: string };

const categories = [
  { id: 'security', label: 'Sécurité & Propriété', icon: Shield },
  { id: 'returns', label: 'Rendements & Frais', icon: TrendingUp },
  { id: 'timeline', label: 'Durée & Liquidité', icon: Clock },
  { id: 'risk', label: 'Marché & Risques', icon: AlertTriangle },
  { id: 'process', label: 'Processus & Suivi', icon: Settings },
  { id: 'getting-started', label: 'Pour Commencer', icon: Rocket },
];

const faqItems: FAQItem[] = [
  { category: 'security', question: 'Comment puis-je être sûr que mon argent est en sécurité ?', answer: "Chaque projet est structuré via une entité juridique dédiée (SPV) qui détient directement le bien. Votre capital est investi dans une villa spécifique et non dans un compte global.\nCette structuration permet d’isoler votre investissement de l’opérateur et de sécuriser l’allocation des fonds à chaque étape." },
  { category: 'security', question: "Dans quoi est-ce que j'investis exactement ?", answer: "Vous investissez dans une villa de luxe spécifique à Dubaï. Vous achetez des parts dans la société (SPV) qui détient directement ce bien.\nVotre capital est associé à un actif précis, identifiable, et non réparti dans un portefeuille anonyme." },
  { category: 'security', question: "Qu'est-ce qu'une SPV et pourquoi est-ce important ?", answer: "Une SPV (Special Purpose Vehicle) est une entité juridique créée pour un projet spécifique. Elle détient le bien séparément de la société d'exploitation. Cela signifie que votre investissement reste isolé. Même en cas de défaillance de l’opérateur, la SPV conserve la propriété de la villa et vous conservez vos parts." },
  { category: 'security', question: 'Est-ce que je reçois un titre de propriété ?', answer: "Le titre de propriété est détenu par la SPV qui possède la villa. En tant qu’investisseur, vous détenez des parts de cette société.\nCela vous donne une exposition documentée à l’actif immobilier, via une structure juridique encadrée." },
  { category: 'security', question: "Que se passe-t-il si l'opérateur disparaît ?", answer: "La SPV reste propriétaire de la villa et vous conservez vos parts. Si l’opérateur n’est plus en mesure d’assurer le projet, un gestionnaire de remplacement peut être nommé pour finaliser l’opération, vendre le bien et distribuer les fonds aux investisseurs." },
  { category: 'security', question: 'InvestDubai est-il régulé ?', answer: "Oui. Les investissements passent par une plateforme partenaire régulée, avec vérification d'identité complète. Chaque projet est structuré via des SPV dédiées, adossées à des actifs immobiliers réels à Dubaï." },
  { category: 'security', question: 'Comment puis-je vérifier que c\'est légitime ?', answer: "Vous pouvez vérifier chaque élément avant d’investir. Chaque projet est lié à une villa identifiable, avec prix d’acquisition, budget de rénovation et calendrier détaillés. Vous pouvez également consulter l’historique des opérations réalisées et les rendements associés.\nEnfin, vous pouvez échanger directement avec notre équipe pour obtenir toutes les réponses nécessaires." },
  { category: 'security', question: 'Quelles protections juridiques ai-je ?', answer: "Vous détenez des parts dans une SPV au niveau du projet. Le bien est séparé de la société d'exploitation. L'accès régulé, la propriété documentée et la transparence au niveau du projet offrent une protection plus claire qu'un arrangement groupé ou informel." },
  { category: 'security', question: 'Qui opère les projets ?', answer: "InvestDubai est la plateforme dédiée aux investisseurs. Les projets sont opérés par Greenbull Properties, basé à Dubaï. L’équipe gère l’ensemble du processus, de l’acquisition à la revente, incluant la rénovation et la gestion du projet." },
  { category: 'returns', question: 'Quels rendements puis-je espérer ?', answer: "Nous visons plus de 20% par projet. Le rendement moyen historique pour les investisseurs sur les projets finalisés est de 29%. Les rendements dépendent de la discipline d'acquisition, de la qualité de rénovation et des conditions de revente. Ils sont solides, mais jamais garantis." },
  { category: 'returns', question: 'Comment les bénéfices sont-ils calculés et distribués ?', answer: "Les bénéfices correspondent à la différence entre le prix de vente du bien et l’ensemble des coûts liés au projet. Les investisseurs perçoivent en priorité un rendement de 15%. Au-delà, les profits sont répartis à hauteur de 60% pour les investisseurs et 40% pour l’opérateur. Les fonds sont crédités sur votre portefeuille dans un délai de 2 à 4 semaines après la vente." },
  { category: 'returns', question: 'Quels frais InvestDubai facture-t-il ?', answer: "Les coûts au niveau du projet (montage juridique, acquisition, frais de transaction) sont divulgués à l'avance. Au-delà, notre modèle économique repose sur le partage des bénéfices : nous ne touchons notre part qu'après que vous ayez reçu votre rendement prioritaire de 15%." },
  { category: 'returns', question: "Qu'est-ce que le rendement prioritaire ?", answer: "Le rendement prioritaire signifie que les investisseurs sont payés en premier. Les premiers 15% de rendement leur sont entièrement attribués avant tout partage des bénéfices. Ce n’est qu’au-delà de ce seuil que la répartition 60% pour les investisseurs et 40% pour l’opérateur s’applique." },
  { category: 'returns', question: 'Les rendements sont-ils garantis ?', answer: "Non. Tout investissement immobilier légitime comporte des risques. Nous les réduisons en acquérant des biens sous leur valeur de marché, en créant de la valeur via la rénovation et en opérant sans effet de levier. Cela aide, mais n'élimine pas le risque de marché, d'exécution ou de temps." },
  { category: 'returns', question: 'Comment est-ce que je reçois mes bénéfices ?', answer: "Après la vente de la villa et le bilan final, votre capital plus les bénéfices sont crédités sur votre portefeuille InvestDubai. Généralement sous 2-4 semaines. Vous pouvez retirer ou réinvestir." },
  { category: 'timeline', question: "Combien de temps mon argent est-il bloqué ?", answer: "La durée de détention typique est de 12 à 18 mois. Le capital est restitué après la vente de la villa et la finalisation du bilan, généralement dans un délai de 2 à 4 semaines après la clôture." },
  { category: 'timeline', question: 'Puis-je vendre mes parts avant la fin du projet ?', answer: "Il n’existe pas actuellement de marché secondaire pour les parts. Votre investissement est donc immobilisé pendant la durée du projet. Il est recommandé d’investir uniquement des fonds que vous pouvez mobiliser sur une période de 12 à 18 mois." },
  { category: 'timeline', question: 'Que se passe-t-il si le projet prend plus de temps que prévu ?', answer: "Les délais de rénovation et de vente peuvent s'allonger. Nous communiquons de manière proactive si un projet prend du retard. La structure du projet reste intacte indépendamment des changements de calendrier." },
  { category: 'risk', question: "Et si le marché de Dubaï s'effondre ?", answer: "Nous achetons en dessous de la valeur rénovée, ce qui offre une marge de sécurité. Nous opérons sans effet de levier, donc pas de pression de vente forcée. Cela dit, un repli significatif du marché pourrait réduire les prix de sortie et les rendements." },
  { category: 'risk', question: 'Quels sont les principaux risques ?', answer: "Tout investissement immobilier comporte des risques. Les principaux sont le risque de marché, si les prix baissent, le risque d’exécution lié aux travaux, le risque de liquidité pendant la durée du projet et le risque de timing si la revente prend plus de temps que prévu.\nNous gérons ces risques activement à chaque étape, sans pouvoir les éliminer totalement." },
  { category: 'risk', question: 'Pourquoi Dubaï spécifiquement ?', answer: "Dubaï offre un marché immobilier dynamique, porté par une forte demande internationale. Les villas dans les quartiers établis présentent un fort potentiel de valorisation grâce à la rénovation. Ce modèle permet de créer de la valeur de manière structurée et reproductible." },
  { category: 'process', question: 'Comment puis-je suivre mon investissement ?', answer: "Via votre tableau de bord (jalons, budget, calendrier), un groupe WhatsApp dédié par projet, des mises à jour Instagram hebdomadaires et des notifications par email aux étapes clés." },
  { category: 'process', question: 'Que signifie concrètement « exécution en interne » ?', answer: "Nous faisons la rénovation nous-mêmes : architectes internes, chefs de projet et équipes de construction. Supervision quotidienne sur site. Aucune sous-traitance sur le cœur de métier." },
  { category: 'process', question: 'Puis-je visiter la villa ?', answer: "Oui. Les investisseurs peuvent visiter les sites de projet à Dubaï. Contactez l'équipe pour organiser une visite." },
  { category: 'getting-started', question: "Quel est l'investissement minimum ?", answer: "L’investissement minimum est de 1 000 € environ 4 000 AED." },
  { category: 'getting-started', question: 'Comment créer un compte ?', answer: "Inscrivez-vous en ligne et complétez la vérification d’identité. L’approbation intervient généralement sous 24 à 48 heures. Aucun capital n’est engagé tant que vous n’avez pas choisi un projet." },
  { category: 'getting-started', question: 'Quelle est la fiscalité pour les résidents français ?', answer: "Dubaï ne prélève pas d’impôt sur le revenu. En revanche, les résidents fiscaux français doivent déclarer leurs revenus selon la réglementation française. Nous fournissons une documentation claire pour faciliter votre déclaration." },
];

export const FAQPage = () => {
  useDocumentHead({
    title: 'FAQ : Questions des Investisseurs Avant de Commencer | InvestDubai',
    description: '27 questions sur la structure, les rendements, les risques, la liquidité et le processus. Des réponses claires sur les propriétés de luxe à Dubaï, les SPV, les rendements prioritaires et le fonctionnement d\'InvestDubai.',
    canonical: 'https://www.investdubai.com/fr/faq',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqItems.filter((item) => {
    const haystack = `${item.question} ${item.answer}`.toLowerCase();
    const matchesSearch = searchQuery === '' || haystack.includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === null || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-brand-bg">
      <GlobalNavbar />
      <section className="pt-40 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center">
          <span className="section-label">FAQ</span>
          <h1 className="text-display-1 text-brand-dark mb-6">Toutes les réponses à vos questions d'investissement.</h1>
          <p className="text-body-lg text-brand-muted max-w-2xl mx-auto mb-12 leading-relaxed">De la structuration de votre investissement à la distribution des plus-values, tout est expliqué avec clarté et transparence.</p>
          <div className="relative max-w-xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-border rounded-full px-6 py-4 pl-14 text-brand-dark placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-2 focus:ring-brand-accent/10 transition-all shadow-sm"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-body-sm font-medium transition-all ${activeCategory === null ? 'bg-brand-dark text-white' : 'bg-white text-brand-muted border border-brand-border hover:border-brand-dark'}`}
            >
              Toutes
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-body-sm font-medium transition-all flex items-center gap-2 ${activeCategory === cat.id ? 'bg-brand-dark text-white' : 'bg-white text-brand-muted border border-brand-border hover:border-brand-dark'}`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="space-y-4">
            {filteredFaqs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl border border-brand-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-body-lg font-medium text-brand-dark pr-4">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-body text-brand-muted whitespace-pre-line">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default FAQPage;
