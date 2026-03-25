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
  { category: 'security', question: 'Comment puis-je être sûr que mon argent est en sécurité ?', answer: "Chaque projet est logé dans une entité juridique distincte (SPV) qui détient le bien. Votre argent est affecté à une villa spécifique, pas à un compte général. La structure SPV, l'accès régulé et les budgets de rénovation fixés sont conçus pour isoler votre investissement de l'opérateur." },
  { category: 'security', question: "Dans quoi est-ce que j'investis exactement ?", answer: "Un projet de villa de luxe spécifique à Dubaï. Vous achetez des parts dans la SPV qui détient la villa : un bien, une entité. Votre capital est lié à un actif identifiable, pas réparti dans un portefeuille anonyme." },
  { category: 'security', question: "Qu'est-ce qu'une SPV et pourquoi est-ce important ?", answer: "Une SPV (Special Purpose Vehicle) est une entité juridique créée pour un projet spécifique. Elle détient le bien séparément de la société d'exploitation. Si quelque chose arrivait à l'opérateur, la SPV détiendrait toujours la villa et vous détiendriez toujours vos parts." },
  { category: 'security', question: 'Est-ce que je reçois un titre de propriété ?', answer: "Le titre de propriété appartient à la SPV qui détient la villa. Vous détenez des parts de cette SPV. Cela vous donne une exposition documentée à la propriété via la structure du projet." },
  { category: 'security', question: "Que se passe-t-il si l'opérateur disparaît ?", answer: "La SPV détient toujours la villa et vous détenez toujours vos parts. Un gestionnaire de remplacement pourrait être nommé pour terminer le projet, vendre le bien et distribuer les fonds aux actionnaires." },
  { category: 'security', question: 'InvestDubai est-il régulé ?', answer: "Oui. Les investissements passent par une plateforme partenaire régulée avec vérification d'identité complète. Les projets sont détenus via des SPV dédiées liées à de vrais biens immobiliers à Dubaï." },
  { category: 'security', question: 'Comment puis-je vérifier que c\'est légitime ?', answer: "Examinez la structure, l'actif et l'historique. Chaque projet est lié à une villa spécifique avec prix d'acquisition, budget de rénovation et calendrier divulgués. Consultez les 40+ sorties réalisées avec rendements publiés. Appelez l'équipe directement si vous souhaitez plus de clarté avant d'investir." },
  { category: 'security', question: 'Quelles protections juridiques ai-je ?', answer: "Vous détenez des parts dans une SPV au niveau du projet. Le bien est séparé de la société d'exploitation. L'accès régulé, la propriété documentée et la transparence au niveau du projet offrent une protection plus claire qu'un arrangement groupé ou informel." },
  { category: 'security', question: 'Qui opère les projets ?', answer: "InvestDubai est la marque destinée aux investisseurs. Greenbull Properties est l'opérateur basé à Dubaï : sourcing, acquisition, rénovation, gestion de projet, revente. Tout est géré en interne." },
  { category: 'returns', question: 'Quels rendements puis-je espérer ?', answer: "Nous visons plus de 20% par projet. Le rendement moyen historique pour les investisseurs sur les projets finalisés est de 29%. Les rendements dépendent de la discipline d'acquisition, de la qualité de rénovation et des conditions de revente. Ils sont solides, mais jamais garantis." },
  { category: 'returns', question: 'Comment les bénéfices sont-ils calculés et distribués ?', answer: "Prix de vente moins coût d'acquisition, coût de rénovation et frais de transaction. Les investisseurs reçoivent d'abord un rendement prioritaire de 15%. Ensuite, les profits sont répartis 60/40 : 60% pour les investisseurs, 40% pour l'opérateur. Les fonds sont crédités sur votre portefeuille sous 2-4 semaines après la clôture." },
  { category: 'returns', question: 'Quels frais InvestDubai facture-t-il ?', answer: "Les coûts au niveau du projet (montage juridique, acquisition, frais de transaction) sont divulgués à l'avance. Au-delà, notre modèle économique repose sur le partage des bénéfices : nous ne touchons notre part qu'après que vous ayez reçu votre rendement prioritaire de 15%." },
  { category: 'returns', question: "Qu'est-ce que le rendement prioritaire ?", answer: "Les investisseurs sont payés en premier. Les premiers 15% de rendement vont aux investisseurs avant tout partage des bénéfices. Ce n'est qu'après ce seuil que la répartition 60/40 s'applique." },
  { category: 'returns', question: 'Les rendements sont-ils garantis ?', answer: "Non. Tout investissement immobilier légitime comporte des risques. Nous réduisons l'exposition en achetant sous le marché, en créant de la valeur par la rénovation et en opérant sans effet de levier. Cela aide, mais n'élimine pas le risque de marché, d'exécution ou de timing." },
  { category: 'returns', question: 'Comment est-ce que je reçois mes bénéfices ?', answer: "Après la vente de la villa et le bilan final, votre capital plus les bénéfices sont crédités sur votre portefeuille InvestDubai. Généralement sous 2-4 semaines. Vous pouvez retirer ou réinvestir." },
  { category: 'timeline', question: "Combien de temps mon argent est-il bloqué ?", answer: "La durée de détention typique est de 12-18 mois. Le capital est restitué une fois la villa vendue et le bilan finalisé, généralement 2-4 semaines après la clôture." },
  { category: 'timeline', question: 'Puis-je vendre mes parts avant la fin du projet ?', answer: "Il n'existe actuellement pas de marché secondaire pour les parts, votre investissement est donc illiquide pendant le projet. Vous ne devez investir que des capitaux que vous êtes prêt à immobiliser pendant 12-18 mois." },
  { category: 'timeline', question: 'Que se passe-t-il si le projet prend plus de temps que prévu ?', answer: "Les délais de rénovation et de vente peuvent s'allonger. Nous communiquons de manière proactive si un projet prend du retard. La structure du projet reste intacte indépendamment des changements de calendrier." },
  { category: 'risk', question: "Et si le marché de Dubaï s'effondre ?", answer: "Nous achetons en dessous de la valeur rénovée, ce qui offre une marge de sécurité. Nous opérons sans effet de levier, donc pas de pression de vente forcée. Cela dit, un repli significatif du marché pourrait réduire les prix de sortie et les rendements." },
  { category: 'risk', question: 'Quels sont les principaux risques ?', answer: "Risque de marché (les prix des villas peuvent baisser), risque d'exécution (retards de rénovation ou dépassements de coûts), risque de liquidité (votre argent est bloqué pendant le projet), et risque de timing (la vente pourrait prendre plus de temps). Nous gérons ces risques activement, mais ne pouvons pas les éliminer." },
  { category: 'risk', question: 'Pourquoi Dubaï spécifiquement ?', answer: "Les communautés de villas standardisées avec des plans identiques rendent la tarification transparente. Le parc vieillissant dans les adresses prestigieuses crée une opportunité de rénovation répétable. Un large bassin d'acheteurs internationaux soutient des reventes haut de gamme pour les villas rénovées." },
  { category: 'process', question: 'Comment puis-je suivre mon investissement ?', answer: "Via votre tableau de bord (jalons, budget, calendrier), un groupe WhatsApp dédié par projet, des mises à jour Instagram hebdomadaires et des notifications par email aux étapes clés." },
  { category: 'process', question: 'Que signifie concrètement « exécution en interne » ?', answer: "Nous faisons la rénovation nous-mêmes : architectes internes, chefs de projet et équipes de construction. Supervision quotidienne sur site. Aucune sous-traitance sur le cœur de métier." },
  { category: 'process', question: 'Puis-je visiter la villa ?', answer: "Oui. Les investisseurs peuvent visiter les sites de projet à Dubaï. Contactez l'équipe pour organiser une visite." },
  { category: 'getting-started', question: "Quel est l'investissement minimum ?", answer: "1 000 $ (~4 000 AED)." },
  { category: 'getting-started', question: 'Comment créer un compte ?', answer: "Inscrivez-vous en ligne, soumettez votre pièce d'identité et un justificatif de domicile, et complétez la vérification. Approbation généralement sous 24-48 heures. Aucun capital engagé tant que vous n'avez pas choisi un projet." },
  { category: 'getting-started', question: 'Quid de la fiscalité pour les résidents français ?', answer: "Dubaï n'a pas d'impôt sur le revenu. Les résidents fiscaux français doivent consulter leur conseiller pour les obligations déclaratives. Nous fournissons une documentation claire pour votre déclaration." },
];

export const FAQPage = () => {
  useDocumentHead({
    title: 'FAQ : Questions des Investisseurs Avant de Commencer | InvestDubai',
    description: '27 questions sur la structure, les rendements, les risques, la liquidité et le processus. Des réponses claires sur les villas de luxe à Dubaï, les SPV, les rendements prioritaires et le fonctionnement d\'InvestDubai.',
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
          <span className="section-label">FAQ Complète</span>
          <h1 className="text-display-1 text-brand-dark mb-6">Les questions que se posent les investisseurs avant de commencer</h1>
          <p className="text-body-lg text-brand-muted max-w-2xl mx-auto mb-12 leading-relaxed">Des réponses claires sur la structure, les rendements, les risques et le processus. Sans jargon.</p>
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
