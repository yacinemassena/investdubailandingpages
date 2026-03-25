import { useState } from "react";
import { useDocumentHead } from "../../hooks/useDocumentHead";
import { motion, AnimatePresence } from "motion/react";
import {
  UserPlus,
  Search,
  Wallet,
  Eye,
  Banknote,
  ArrowRight,
  Phone,
  MessageCircle,
  Instagram,
  Users,
  LayoutDashboard,
  Mail,
  CheckCircle,
  Play,
  ChevronRight,
} from "lucide-react";
import { GlobalNavbar } from "../../components/GlobalNavbar";
import { GlobalFooter } from "../../components/GlobalFooter";
import { TrackRecordCarousel } from "../../components/TrackRecordCarousel";
import { WhatsAppMockup } from "./WhatsAppMockup";
import { InstagramMockup } from "./InstagramMockup";

const processSteps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up online in minutes and complete identity verification (KYC). Documents are typically verified within 24-48 hours. No capital is committed until you choose to invest.",
    icon: UserPlus,
    details: [
      "Simple online registration",
      "Government ID + proof of address",
      "Approval within 24-48 hours",
      "No capital committed until you invest",
    ],
  },
  {
    number: "02",
    title: "Review Villa Opportunities",
    description:
      "Browse curated projects, each backed by a specific villa in a prime Dubai community. You see the property, the renovation plan, the budget, and the target return before you invest.",
    icon: Search,
    details: [
      "Detailed project page per villa",
      "Acquisition price, renovation budget, projected timeline",
      "Comparable sales and target return",
      "Full documentation before you commit",
    ],
  },
  {
    number: "03",
    title: "Invest from $1,000",
    description:
      "Choose a project and invest. You become a shareholder in the SPV that holds the villa. Your capital goes to a specific property, not a pool.",
    icon: Wallet,
    details: [
      "Select your investment amount ($1,000 minimum)",
      "Funds allocated to a specific villa project",
      "Share certificate issued",
      "Dashboard access activated",
    ],
  },
  {
    number: "04",
    title: "Follow the Renovation",
    description:
      "Track progress through multiple channels. We send updates because we want you to see the work, not because regulations require it.",
    icon: Eye,
    details: [
      "WhatsApp group with the project team",
      "Weekly photo and video updates",
      "Dashboard milestones and budget tracking",
      "Email notifications at key stages",
    ],
  },
  {
    number: "05",
    title: "Receive Your Proceeds",
    description:
      "When the villa sells, the final accounting is prepared and your capital plus profits are credited to your wallet. Typically within 2-4 weeks of closing.",
    icon: Banknote,
    details: [
      "Villa sold at full market value",
      "Final accounting prepared",
      "Capital + profit credited to your wallet",
      "Withdraw or reinvest in the next project",
    ],
  },
];

const experienceFeatures = [
  {
    icon: MessageCircle,
    title: "Dedicated WhatsApp Group",
    description:
      "Every project has its own WhatsApp channel. Direct updates from the team on the ground, progress photos, timelines, and answers to your questions in real time.",
    highlight: "Real-time communication",
    type: "whatsapp",
  },
  {
    icon: Instagram,
    title: "Weekly Instagram Stories",
    description:
      "Demolition, construction, finishes. Follow the renovation week by week through visual updates. You see the villa transform.",
    highlight: "Visual progress tracking",
    type: "instagram",
  },
  {
    icon: Users,
    title: "Meet the Operator",
    description:
      "Every InvestDubai project is executed by Greenbull Properties, a Dubai-based real estate operator with 40+ luxury villas acquired, renovated, and sold.\n\nIn-house architects, dedicated project managers, and daily on-site supervision from acquisition to exit. You know exactly who's doing the work.",
    highlight: "40+ luxury villas",
    video:
      "https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/videos/architectes.mp4",
  },
  {
    icon: LayoutDashboard,
    title: "Your Dashboard",
    description:
      "Project milestones, budget tracking, timeline, documentation. All in one place. Accessible 24/7.",
    highlight: "24/7 dashboard access",
    image:
      "https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/dashboard-2.png",
  },
  {
    icon: Mail,
    title: "Regular Email Updates",
    description:
      "Structured email updates at every major milestone: acquisition complete, renovation phases, listing, offers received, final sale.",
    highlight: "Milestone notifications",
    image:
      "https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/investdubai-how-it-works.png",
  },
];

export const HowItWorksPage = () => {
  useDocumentHead({
    title: 'How It Works | From Signup to Profit | InvestDubai',
    description: 'From account setup to profit distribution in 5 steps. See how InvestDubai investors access Dubai luxury villa flips with full transparency. WhatsApp updates, dashboard, weekly photos.',
    canonical: 'https://www.investdubai.com/how-it-works',
  });
  const [activeStep, setActiveStep] = useState(0);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-black selection:text-white">
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/0A6A5723.jpg"
            alt="Dubai luxury villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-gray-50 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-black/5 text-black text-label rounded-full mb-6 border border-black/10">
              How It Works
            </span>
            <h1 className="text-display-1 text-black mb-6">
              From signup to profit. Here's every step.
            </h1>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto mb-10">
              No black boxes. You see where your money goes, what happens to the
              villa, and how you get paid. Here's the full process.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://investdubai.my.smartcrowd.ae/"
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto bg-black text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Create Your Account <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#experience"
                className="w-full sm:w-auto border border-gray-300 bg-white/50 backdrop-blur-md text-black px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 hover:bg-white hover:border-gray-400 transition-all duration-300"
              >
                <Play className="w-4 h-4" /> See How Investor Updates Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 Simple Steps Section */}
      <section className="py-12 md:py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-label text-gray-400 mb-2 block">
              5 Simple Steps
            </span>
            <h2 className="text-h2 text-black mb-6">
              Your investment journey
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              We handle sourcing, renovation, and sale. You choose a project,
              invest, follow the transformation, and receive your proceeds.
            </p>
          </div>

          {/* Desktop Steps */}
          <div className="hidden lg:block mb-16">
            <div className="flex items-center justify-between mb-12 relative">
              {/* Progress Line */}
              <div className="absolute top-8 left-10 right-10 h-0.5 bg-gray-100 -z-10" />
              <div
                className="absolute top-8 left-10 h-0.5 bg-black -z-10 transition-all duration-500 ease-out"
                style={{
                  width: `calc(${(activeStep / (processSteps.length - 1)) * 100}% - 2.5rem)`,
                }}
              />

              {processSteps.map((step, i) => {
                const isActive = activeStep === i;
                const isPast = activeStep > i;

                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex flex-col items-center gap-4 transition-all duration-300 w-32 ${isActive ? "scale-110" : "opacity-70 hover:opacity-100"}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive ? "bg-black text-white shadow-xl shadow-black/20" : isPast ? "bg-gray-900 text-white" : "bg-white text-gray-400 border-2 border-gray-100"}`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-label ${isActive ? "text-black" : isPast ? "text-gray-800" : "text-gray-400"}`}
                    >
                      Step {step.number}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-16 items-center"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                        {(() => {
                          const Icon = processSteps[activeStep].icon;
                          return <Icon className="w-7 h-7 text-black" />;
                        })()}
                      </div>
                      <span className="text-label text-gray-400">
                        Step {processSteps[activeStep].number}
                      </span>
                    </div>
                    <h3 className="text-h3 text-black mb-6">
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-body-lg text-gray-600">
                      {processSteps[activeStep].description}
                    </p>
                  </div>

                  <div className="bg-white rounded-[1.5rem] p-8 border border-gray-100 shadow-lg shadow-gray-200/50">
                    <h4 className="text-h4 text-black mb-6">
                      What happens:
                    </h4>
                    <ul className="space-y-4">
                      {processSteps[activeStep].details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="lg:hidden space-y-4 relative">
            {processSteps.map((step, i) => {
              const isExpanded = expandedStep === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedStep(isExpanded ? null : i)}
                    className="w-full text-left p-6 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300 ${isExpanded ? "bg-black text-white" : "bg-gray-100 text-gray-400"}`}
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-label text-gray-400">
                          Step {step.number}
                        </span>
                        <h3 className="text-h3 text-black">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                          <ul className="space-y-3">
                            {step.details.map((detail, j) => (
                              <li key={j} className="flex items-start gap-3 text-body">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-12 md:py-20 bg-[#0A0A0A] relative overflow-hidden"
      >
        {/* Abstract background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-label rounded-full mb-6 border border-white/10">
              After You Invest
            </span>
            <h2 className="text-h2 text-white mb-6">
              What it actually looks like to be an investor
            </h2>
            <p className="text-body-lg text-gray-400 max-w-2xl mx-auto">
              We keep you informed because this is your money, your villa, your
              project. Here's how.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24 mb-16">
            {/* WhatsApp & Instagram Side by Side on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
              {/* WhatsApp */}
              <div className="flex flex-col">
                <div className="flex justify-center mb-4">
                  <WhatsAppMockup />
                </div>
                <div className="bg-[#1A1A1A]/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl flex-1">
                  <h3 className="text-h4 text-white mb-3">
                    {experienceFeatures[0].title}
                  </h3>
                  <p className="text-body text-gray-400">
                    {experienceFeatures[0].description}
                  </p>
                </div>
              </div>
              {/* Instagram */}
              <div className="flex flex-col">
                <div className="flex justify-center mb-4">
                  <InstagramMockup />
                </div>
                <div className="bg-[#1A1A1A]/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl flex-1">
                  <h3 className="text-h4 text-white mb-3">
                    {experienceFeatures[1].title}
                  </h3>
                  <p className="text-body text-gray-400">
                    {experienceFeatures[1].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Architects Video - Standalone */}
            <div className="relative flex flex-col md:block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[78%] md:mx-auto"
              >
                <div className="relative group">
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-video bg-gray-900 border border-white/10 shadow-2xl">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-[1.05] group-hover:scale-100 transition-transform duration-700"
                      src={experienceFeatures[2].video}
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-[42%] z-10 mt-4 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0"
              >
                <div className="bg-[#1A1A1A]/95 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl">
                  <h3 className="text-h3 text-white mb-4">
                    {experienceFeatures[2].title}
                  </h3>
                  <p className="text-body-lg text-gray-400">
                    {experienceFeatures[2].description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Dashboard & Email Side by Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
              {/* Dashboard */}
              <div className="flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 border border-white/10 shadow-2xl w-full">
                    <img
                      src={experienceFeatures[3].image}
                      alt={experienceFeatures[3].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="bg-[#1A1A1A]/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl flex-1">
                  <h3 className="text-h4 text-white mb-3">
                    {experienceFeatures[3].title}
                  </h3>
                  <p className="text-body text-gray-400">
                    {experienceFeatures[3].description}
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 border border-white/10 shadow-2xl w-full">
                    <img
                      src={experienceFeatures[4].image}
                      alt={experienceFeatures[4].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="bg-[#1A1A1A]/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl flex-1">
                  <h3 className="text-h4 text-white mb-3">
                    {experienceFeatures[4].title}
                  </h3>
                  <p className="text-body text-gray-400">
                    {experienceFeatures[4].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 rounded-[2.5rem] p-8 md:p-16 border border-white/10 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-h2 text-white mb-6">
                  You see everything.
                </h3>
                <p className="text-body-lg text-gray-400 mb-8">
                  Traditional real estate funds deploy your capital and go quiet
                  until the exit. We do the opposite.
                </p>
                <ul className="space-y-4">
                  {[
                    "See exactly where your money goes",
                    "Watch the renovation happen week by week",
                    "Direct access to the team on the ground",
                    "Full documentation at every milestone",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-black/50 rounded-[2rem] p-6 md:p-10 backdrop-blur-md border border-white/10">
                <div className="text-center">
                  <div className="text-stat text-white mb-2">
                    2,500+
                  </div>
                  <div className="text-body text-gray-400 mb-8">
                    Active investors
                  </div>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10">
                      <div className="text-stat text-white mb-1">
                        40+
                      </div>
                      <div className="text-body-sm text-gray-400 font-medium">
                        Villas completed
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10">
                      <div className="text-stat text-white mb-1">
                        $327M
                      </div>
                      <div className="text-body-sm text-gray-400 font-medium">
                        Capital deployed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-12 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 mb-12">
          <div className="text-center">
            <h2 className="text-h2 text-white mb-6">
              40+ villas acquired, renovated & sold
            </h2>
            <p className="text-body-lg text-gray-400 max-w-2xl mx-auto">
              Every project follows the same model: find undervalued villas,
              renovate to modern standards, and sell at full market value.
            </p>
          </div>
        </div>
        <TrackRecordCarousel
          rows={1}
          showTitle={false}
          showExpandButton={false}
        />
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50/50" />
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-label text-gray-400 mb-4 block">
              Ready to Start?
            </span>
            <h2 className="text-h2 text-black mb-6">
              Ready to see current projects?
            </h2>
            <p className="text-body-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Create your account in minutes and explore live villa
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://investdubai.my.smartcrowd.ae/"
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto bg-black text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Create Your Account <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://calendly.com/acheffi/invest-dubai"
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto border border-gray-300 bg-white text-black px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> Book a Call
              </a>
            </div>
            <p className="text-body text-gray-400 mt-8">
              No capital committed until you choose to invest.
            </p>
          </motion.div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default HowItWorksPage;
