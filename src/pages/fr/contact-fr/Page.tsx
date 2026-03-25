import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { GlobalNavbar } from '../../../components/GlobalNavbar';
import { GlobalFooter } from '../../../components/GlobalFooter';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <GlobalNavbar />
      
      <main className="flex-grow pt-32 pb-16 md:pb-24 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 w-full">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent text-label rounded-full mb-6 border border-brand-accent/20">
              Nous Contacter
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-h2 text-brand-dark mb-6">
              Contactez Notre Équipe
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-brand-muted">
              Des questions sur l'investissement dans les villas de luxe à Dubaï ? Notre équipe est là pour vous aider.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-brand-border shadow-sm"
            >
              <h2 className="text-h3 text-brand-dark mb-8">Envoyez-nous un message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-body text-brand-dark">Prénom</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all" placeholder="Jean" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-body text-brand-dark">Nom</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all" placeholder="Dupont" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-body text-brand-dark">Adresse Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all" placeholder="jean@exemple.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-body text-brand-dark">Numéro de Téléphone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all" placeholder="+33 6 12 34 56 78" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-body text-brand-dark">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-accent text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 text-body hover:opacity-90 transition-opacity shadow-lg shadow-brand-accent/20">
                  Envoyer le Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col justify-center space-y-10"
            >
              <div>
                <h2 className="text-h3 text-brand-dark mb-6">Coordonnées</h2>
                <p className="text-brand-muted leading-relaxed mb-8">
                  Vous préférez nous contacter directement ? Utilisez les coordonnées ci-dessous pour joindre notre équipe.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-h4 text-brand-dark mb-1">Par Email</h3>
                    <p className="text-brand-muted mb-1">Pour toute demande d'information ou assistance</p>
                    <a href="mailto:hello@investdubai.com" className="text-brand-accent font-medium hover:underline">hello@investdubai.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-h4 text-brand-dark mb-1">Par Téléphone</h3>
                    <p className="text-brand-muted mb-1">Lun-Ven de 9h à 18h (heure de Dubaï)</p>
                    <a href="tel:+97141234567" className="text-brand-accent font-medium hover:underline">+971 4 123 4567</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
