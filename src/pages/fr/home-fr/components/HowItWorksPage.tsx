import { useState } from "react";
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
import { GlobalNavbar } from "../../../components/GlobalNavbar";
import { GlobalFooter } from "../../../components/GlobalFooter";
import { TrackRecordCarousel } from "../../../components/TrackRecordCarousel";
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
    title: "Browse Available Projects",
    description:
      "Review current villa opportunities with full visibility. Each project includes location, acquisition price, renovation budget, target return, and projected timeline.",
    icon: Search,
    details: [
      "Detailed project financials",
      "High-resolution property photos",
      "Comparable sales data",
      "Risk assessment included",
    ],
  },
  {
    number: "03",
    title: "Invest and become a co-owner",
    description:
      "Fund your wallet via bank transfer and allocate capital to a specific project. The investment is held through a dedicated SPV, and you become a legal co-owner of the villa.",
    icon: Wallet,
    details: [
      "Minimum $1,000 investment",
      "Secure bank transfer",
      "SPV shares issued to you",
      "Title deed held by SPV",
    ],
  },
  {
    number: "04",
    title: "Follow the renovation process",
    description:
      "Track the project through each stage of renovation with direct visibility into progress, milestones, and updates. Weekly videos, WhatsApp communication, and dashboard tracking keep investors informed throughout.",
    icon: Eye,
    details: [
      "Weekly visual updates",
      "Dedicated WhatsApp communication",
      "Live dashboard tracking",
      "Direct team communication",
    ],
  },
  {
    number: "05",
    title: "Receive capital and profit distribution",
    description:
      "Once the renovated villa is sold, your capital and share of profits are credited to your wallet, typically within 2-4 weeks. You can then withdraw funds or reinvest in another project.",
    icon: Banknote,
    details: [
      "15% priority return paid first",
      "Profits credited to wallet",
      "Withdraw or reinvest",
      "Full transaction transparency",
    ],
  },
];

const experienceFeatures = [
  {
    icon: MessageCircle,
    title: "Dedicated WhatsApp Group",
    description:
      "Every project has its own WhatsApp channel for direct updates from the team on the ground. Investors can follow progress, ask questions, and stay close to key developments as the project moves forward.",
    highlight: "Real-time communication",
    type: "whatsapp",
  },
  {
    icon: Instagram,
    title: "Weekly Instagram Stories",
    description:
      "Follow renovation progress through weekly visual updates, including demolition, construction, and final finishes. The goal is simple: investors can see the work as it happens.",
    highlight: "Visual progress tracking",
    type: "instagram",
  },
  {
    icon: Users,
    title: "Meet Our In-House Architects",
    description:
      "Renovations are executed by in-house architecture and construction teams, with daily on-site supervision supporting quality control. Investors can see the people and the execution behind each project.",
    highlight: "40+ villas completed",
    video:
      "https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/videos/architectes.mp4",
  },
  {
    icon: LayoutDashboard,
    title: "Easy-to-Use Platform",
    description:
      "Your investor dashboard gives you visibility into project milestones, budget tracking, timeline updates, and documentation in one place. Clear, accessible, and built to keep investors informed.",
    highlight: "24/7 dashboard access",
    image:
      "https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/dashboard-2.png",
  },
  {
    icon: Mail,
    title: "Regular Email Updates",
    description:
      "Receive structured email updates at key milestones: acquisition complete, renovation phases, listing, offers received, and final sale. The goal is to keep investors informed at each stage of the project.",
    highlight: "Milestone notifications",
    image:
      "https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/investdubai-how-it-works.png",
  },
];

export const HowItWorksPage = () => {
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
              How the investment process works
            </h1>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto mb-10">
              From account setup to profit distribution, here is how the process
              works at each stage. Clear structure, full visibility, and no
              black-box investing.
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
              Your Investment Journey
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              We handle sourcing, renovation, and sale. Investors access the
              opportunity, follow the project, and receive their share of the
              proceeds on exit.
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
                    <h4 className="font-bold text-black mb-6 text-body-lg">
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
                        <h3 className="text-h4 text-black">
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
                              <li
                                key={j}
                                className="flex items-start gap-3 text-body"
                              >
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
              Your Experience as an Investor
            </h2>
            <p className="text-body-lg text-gray-400 max-w-2xl mx-auto">
              Investor visibility matters. Here is how we keep you informed
              throughout the life of the project, from acquisition to exit.
            </p>
          </div>

          <div className="space-y-24 md:space-y-40 mb-24">
            {experienceFeatures.map((feature, i) => (
              <div key={i} className="relative flex flex-col md:block">
                {/* Media Container */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-[80%]"
                >
                  {feature.type === "whatsapp" ? (
                    <div className="flex justify-center md:justify-start md:pl-20">
                      <div className="relative inline-block">
                        <WhatsAppMockup />
                        <div className="absolute -bottom-6 -left-6 flex items-center gap-3 z-[40]">
                          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-2xl border border-white/10">
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-label text-white bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-2xl border border-white/10">
                            {feature.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : feature.type === "instagram" ? (
                    <div className="flex justify-center md:justify-start md:pl-20">
                      <div className="relative inline-block">
                        <InstagramMockup />
                        <div className="absolute -bottom-6 -left-6 flex items-center gap-3 z-[40]">
                          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-2xl border border-white/10">
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-label text-white bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-2xl border border-white/10">
                            {feature.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative group">
                      <div className="rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-video bg-gray-900 border border-white/10 shadow-2xl">
                        {feature.video ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-[1.05] group-hover:scale-100 transition-transform duration-700"
                            src={feature.video}
                          />
                        ) : (
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        )}
                      </div>
                      <div className="absolute -bottom-6 -left-6 flex items-center gap-3 z-[40]">
                        <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-2xl border border-white/10">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-label text-white bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-2xl border border-white/10">
                          {feature.highlight}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Text Box Container */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 w-full md:w-[45%] z-10 mt-12 md:mt-0"
                >
                  <div className="bg-[#1A1A1A]/95 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl">
                    <h3 className="text-h3 text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-body-lg text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 rounded-[2.5rem] p-8 md:p-16 border border-white/10 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-h3 text-white mb-6">
                  No Black-Box Investing
                </h3>
                <p className="text-body-lg text-gray-400 mb-8">
                  Traditional real estate investing often gives investors
                  limited visibility once capital is deployed. We take the
                  opposite approach, with clear updates and operational
                  visibility at every stage.
                </p>
                <ul className="space-y-4">
                  {[
                    "See exactly where your money goes",
                    "Watch the renovation happen in real-time",
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
                  <div className="text-body text-gray-400 mb-8 font-medium">
                    Active investors trust our process
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
              Create Your Account
            </h2>
            <p className="text-body-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Join 2,500+ investors. Review available projects, see full
              financials, and invest when the opportunity fits your criteria. No
              capital is committed until you decide to invest.
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
            <p className="text-body text-gray-400 mt-8 font-medium">
              Simple signup. No capital is committed until you invest.
            </p>
          </motion.div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default HowItWorksPage;
