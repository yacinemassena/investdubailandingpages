import { useDocumentHead } from "../../../hooks/useDocumentHead";
import { GlobalNavbar } from "../../../components/GlobalNavbar";
import { GlobalFooter } from "../../../components/GlobalFooter";

export const TermsOfUsePage = () => {
  useDocumentHead({
    title: "General Terms of Use | InvestDubai",
    description:
      "General Terms and Conditions of Use for www.investdubai.com. Published by GREENBULL SERVICES FZ LLC.",
    canonical: "https://www.investdubai.com/legal/terms-of-use",
  });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
          <h1 className="text-display-2 text-black mb-4">
            General Terms of Use
          </h1>
          <p className="text-body-lg text-gray-500">
            In force on January 1st, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">1. PREAMBLE</h2>
              <p className="text-body text-gray-700 mb-4">
                These General Terms and Conditions of Use (hereinafter referred
                to as the "Terms") define the terms and conditions under which
                users (hereinafter referred to as the "Users") access and use
                the website https://www.investdubai.com (hereinafter referred to
                as the "Site").
              </p>
              <p className="text-body text-gray-700 mb-4">
                The Site is published by GREENBULL SERVICES FZ-LLC and is for
                informational and promotional purposes only. It does not allow
                the creation of user accounts, direct subscription to
                investments, the execution of financial transactions, or the
                provision of investment advisory services.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Access to and use of the Site implies full and unreserved
                acceptance of these Terms by the User. This acceptance is
                signified by simply browsing the Site.
              </p>
              <p className="text-body text-gray-700">
                These Terms, together with the Legal Notices, the Privacy
                Policy, and the Cookie Policy, constitute all the rules
                applicable to the use of the Site.
              </p>
            </article>

            {/* Section 2 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">2. LEGAL INFORMATION</h2>
              <p className="text-body text-gray-700 mb-4">
                The Site is published and operated by GREENBULL SERVICES FZ LLC,
                a limited liability company incorporated under the laws of the
                United Arab Emirates, and specifically under the authority of
                the Creative City Fujairah Free Zone, with a share capital of
                AED 150,000, whose registered office is located at Creative
                Tower, P.O. Box 4422, Fujairah, United Arab Emirates, holder of
                license no. 13322/2018 issued by the Fujairah Culture & Media
                Authority (hereinafter "Greenbull" or "the Publisher").
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-none pl-0">
                <li>
                  <strong>Telephone:</strong> +33 7 57 95 75 04
                </li>
                <li>
                  <strong>Email:</strong> hello@investdubai.com
                </li>
                <li>
                  <strong>Publishing Director:</strong> Guillaume MONGES
                </li>
              </ul>
            </article>

            {/* Section 3 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                3. PRESENTATION AND PURPOSE OF THE WEBSITE
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The purpose of the website www.investdubai.com is to present,
                for strictly general informational purposes, content relating to
                real estate investment in Dubai, as well as information
                concerning opportunities offered by specialized third-party
                partners, including the platform operated by SmartCrowd
                Limited® (hereinafter "SmartCrowd").
              </p>
              <p className="text-body text-gray-700 mb-4">
                The website acts solely as a presentation and guidance site. It
                is neither an investment platform, nor a crowdfunding platform,
                nor an investment management or monitoring tool.
              </p>
              <p className="text-body text-gray-700 mb-4">
                When the User clicks on features such as "Get Started" or
                equivalent, they are redirected to an interface operated by a
                third-party partner, including SmartCrowd, which may be
                presented with a branded design or joint trademark such as
                "InvestDubai powered by SmartCrowd".
              </p>
              <p className="text-body text-gray-700 mb-4">
                All user account creation, identity verification (KYC),
                subscriptions, investments, payments, and financial transactions
                are carried out exclusively on the platforms of these
                third-party partners, under their sole responsibility, and in
                accordance with their own contractual terms and privacy
                policies.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The Publisher is not involved, either directly or indirectly:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>In the selection of investment projects,</li>
                <li>In investment decision-making,</li>
                <li>
                  In the structuring, management, redevelopment, or resale of
                  assets,
                </li>
                <li>
                  Nor in the management of user accounts on partner platforms.
                </li>
              </ul>
              <p className="text-body text-gray-700">
                The information disseminated on the Site is provided for general
                informational purposes only. It does not constitute investment
                advice, a personalized recommendation, or an inducement to
                invest within the meaning of applicable financial regulations.
              </p>
            </article>

            {/* Section 4 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                4. ACCESS TO THE SITE AND REDIRECTION TO THIRD-PARTY PLATFORMS
              </h2>

              <h3 className="text-h4 text-black mb-4">4.1 Access to the Site</h3>
              <p className="text-body text-gray-700 mb-4">
                The Site is accessible free of charge to any User with internet
                access.
              </p>
              <p className="text-body text-gray-700 mb-4">
                All costs related to accessing the Site (computer equipment,
                software, internet connection, etc.) are the sole responsibility
                of the User.
              </p>
              <p className="text-body text-gray-700 mb-6">
                The Site is accessible without creating an account or
                registering beforehand.
              </p>

              <h3 className="text-h4 text-black mb-4">
                4.2 Redirection to Third-Party Platforms
              </h3>
              <p className="text-body text-gray-700 mb-4">
                The Site may offer links or buttons allowing the User to access
                platforms operated by third parties, including the SmartCrowd
                platform.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The User expressly acknowledges that:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>These platforms are independent of the Site;</li>
                <li>
                  They are operated under the sole responsibility of their
                  respective publishers;
                </li>
                <li>
                  Any contractual relationship, account creation, processing of
                  personal data, investment, or financial transaction is
                  governed exclusively by the terms and conditions specific to
                  these platforms.
                </li>
              </ul>
              <p className="text-body text-gray-700 mb-6">
                The Publisher is neither a party to the contracts concluded
                between the User and these platforms, nor responsible for their
                content, operation, or the services they offer.
              </p>

              <h3 className="text-h4 text-black mb-4">4.3 Site Availability</h3>
              <p className="text-body text-gray-700 mb-4">
                The Publisher will use all reasonable means at its disposal to
                ensure the Site's accessibility.
              </p>
              <p className="text-body text-gray-700 mb-4">
                However, the Publisher reserves the right to temporarily
                suspend, limit, or interrupt access to the Site without prior
                notice, particularly for maintenance, updates, or technical
                improvements.
              </p>
              <p className="text-body text-gray-700">
                The User acknowledges that the Publisher cannot be held liable
                for any unavailability, interruption, or malfunction of the
                Site, regardless of the cause.
              </p>
            </article>

            {/* Section 5 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">5. SITE MANAGEMENT</h2>
              <p className="text-body text-gray-700 mb-4">
                For the proper management of the Site, the Publisher may at any
                time:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6">
                <li>
                  Suspend, interrupt, or limit access to all or part of the
                  Site;
                </li>
                <li>
                  Restrict access to the Site, or certain parts of the Site, to
                  a specific category of Users;
                </li>
                <li>
                  Remove any information that may disrupt its operation or
                  violate national or international laws, or the rules of
                  netiquette;
                </li>
                <li>Suspend the Site in order to perform updates.</li>
              </ul>
            </article>

            {/* Section 6 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">6. CONTACT</h2>
              <p className="text-body text-gray-700">
                For any questions or requests for information concerning the
                Site, or to report any illegal content or activities, the User
                may contact the Publisher at the following email address:
                hello@investdubai.com or send a registered letter with
                acknowledgment of receipt to GREENBULL SERVICES FZ-LLC -
                Creative Tower, P.O. Box 4422, Fujairah, United Arab Emirates.
              </p>
            </article>

            {/* Section 7 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                7. WEBSITE AND TERMS OF USE UPDATES
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The Publisher reserves the right to modify, update, or modify
                the content of the Website at any time and without prior notice,
                particularly to improve its presentation, accessibility,
                security, or the information provided to Users.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The Publisher also reserves the right to modify these Terms of
                Use at any time to adapt them to legal, regulatory, technical,
                or editorial developments.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The applicable Terms of Use are those in effect on the date the
                User accesses the Website. Users are therefore advised to
                regularly consult the latest version of the Terms of Use, which
                is accessible at any time on the Website.
              </p>
              <p className="text-body text-gray-700">
                Continued use of the Website after the publication of
                modifications to the Terms of Use constitutes acceptance of
                those modifications by the User.
              </p>
            </article>

            {/* Section 8 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">8. LIABILITY</h2>
              <p className="text-body text-gray-700 mb-4">
                The Publisher will use reasonable means to ensure access to and
                proper functioning of the Site. However, it is only bound by an
                obligation of means.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The Publisher is only responsible for the content it directly
                publishes on the Site.
              </p>
              <p className="text-body text-gray-700 mb-4">
                It cannot be held liable for content, information, services, or
                features offered by third parties, including those accessible
                via redirect links to the platform operated by SmartCrowd.
              </p>
              <p className="text-body text-gray-700 mb-4">
                In this respect, the Publisher cannot be held liable, in
                particular:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>
                  For malfunctions, interruptions, unavailability, or
                  incompatibility issues between the Site and the User's
                  hardware, software, or network equipment;
                </li>
                <li>
                  For information, content, or data provided by third-party
                  partners, including SmartCrowd, subject to reporting any
                  obvious anomalies of which it becomes aware;
                </li>
                <li>
                  For consequences resulting from the use of, or inability to
                  use, the Site;
                </li>
                <li>
                  The inherent characteristics and limitations of the Internet,
                  particularly regarding reliability, security, and continuity
                  of access;
                </li>
                <li>
                  Any fraudulent, unlawful, or non-compliant use of the Site by
                  a User or a third party, provided that the Publisher was
                  unaware of it or could not reasonably have prevented it.
                </li>
              </ul>
              <p className="text-body text-gray-700 mb-4">
                The information published on the Site is provided for
                informational purposes only.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Despite regular updates, the Publisher does not guarantee the
                accuracy, completeness, or timeliness of the information
                provided, and disclaims all liability for its use or
                interpretation by the User.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The Publisher shall not be held liable for:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>
                  Legislative or regulatory changes subsequent to the
                  publication of these Terms of Use;
                </li>
                <li>
                  Damages resulting from the use of information accessible on
                  the Site;
                </li>
                <li>
                  Any contamination by viruses or other harmful elements
                  affecting the User's computer equipment.
                </li>
              </ul>
              <p className="text-body text-gray-700 mb-4">
                The User is solely responsible for:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6">
                <li>Protecting their equipment and data;</li>
                <li>
                  Their use of the Site and the information accessible on it;
                </li>
                <li>Complying with these Terms of Use.</li>
              </ul>
            </article>

            {/* Section 9 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                9. INVESTMENT WARNING AND NO INVESTMENT ADVICE
              </h2>
              <p className="text-body text-gray-700 mb-4">
                Investments made through the SmartCrowd Platform are
                crowdfunding investments and, by their very nature, involve
                significant risks, including the risk of partial or total loss
                of invested capital, the risk of illiquidity, and the absence of
                any guarantee of return.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The information, data, investment status, performance
                indicators, and historical data presented on the Site are
                provided for informational purposes only and do not constitute
                investment advice, a personalized recommendation, or an
                inducement to invest as defined by applicable financial
                regulations.
              </p>
              <p className="text-body text-gray-700 mb-4">The Publisher:</p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>
                  Does not assess the suitability or relevance of investments in
                  light of the User's personal, financial, or asset situation;
                </li>
                <li>
                  Does not perform any risk profiling or future performance
                  simulations;
                </li>
                <li>
                  Does not participate in the selection of projects, nor in the
                  structuring, management, redevelopment, or resale of
                  investments.
                </li>
              </ul>
              <p className="text-body text-gray-700 mb-4">
                Investment decisions are made exclusively by the User, under
                their sole responsibility, on the SmartCrowd platform, after
                reviewing the regulatory information documents made available by
                the platform.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Before making any investment decision, the User is responsible
                for:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6">
                <li>
                  Reviewing all applicable contractual and regulatory documents;
                </li>
                <li>
                  Assessing the risks inherent in the proposed investments;
                </li>
                <li>
                  And, if necessary, consulting a qualified professional
                  (investment advisor, lawyer, accountant).
                </li>
              </ul>
            </article>

            {/* Section 10 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">10. HYPERLINKS</h2>
              <p className="text-body text-gray-700">
                The Site may contain hyperlinks to other websites over which the
                Site has no control. Despite prior and regular checks carried
                out by the Publisher, the Publisher disclaims all liability for
                the content that may be found on these sites.
              </p>
            </article>

            {/* Section 11 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                11. INTELLECTUAL PROPERTY
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The overall structure of the Site, as well as all accessible
                content, including text, images, graphics, photographs, videos,
                sounds, logos, trademarks, visual elements, databases, and
                computer applications, are protected by applicable intellectual
                property laws.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Unless otherwise indicated, the Publisher owns or is duly
                licensed to own the intellectual property rights relating to the
                Site and its content.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Any reproduction, representation, modification, adaptation,
                translation, dissemination, distribution, or exploitation, in
                whole or in part, of the Site or any of its elements, by any
                means whatsoever, without the prior, express, and written
                authorization of the Publisher, is strictly prohibited.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Access to the Site does not grant the User any intellectual
                property rights to its constituent elements, which remain the
                exclusive property of their respective owners.
              </p>
              <p className="text-body text-gray-700">
                Any unauthorized use of the Site's content may result in civil
                and/or criminal liability for the perpetrator, in accordance
                with applicable legal and regulatory provisions.
              </p>
            </article>

            {/* Section 12 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">12. TRANSFER</h2>
              <p className="text-body text-gray-700">
                Users may not transfer to a third party any rights or
                obligations incumbent upon them under these Terms of Use without
                the Publisher's consent.
              </p>
            </article>

            {/* Section 13 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                13. PROTECTION OF PERSONAL DATA
              </h2>
              <p className="text-body text-gray-700 mb-4">
                In the course of operating the Site, the Publisher may process
                personal data on a limited basis, in particular to ensure the
                technical operation of the Site, respond to User requests for
                information, and fulfill its legal obligations.
              </p>
              <p className="text-body text-gray-700 mb-4">
                This processing is carried out in accordance with applicable
                regulations on the protection of personal data, in particular
                Regulation (EU) 2016/679 of 27 April 2016 (GDPR) for Users
                located in the European Union, as well as the laws in force in
                the United Arab Emirates where applicable.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Detailed information regarding the categories of data processed,
                the purposes, the legal bases, the retention periods, the
                recipients, any data transfers outside the European Union, and
                User rights is described in the Privacy Policy, which is
                accessible at any time on the Site.
              </p>
              <p className="text-body text-gray-700">
                Any personal data collected during the creation of user
                accounts, identity verification procedures or investment
                operations is processed exclusively by third-party partner
                platforms, including SmartCrowd, under their sole responsibility
                and in accordance with their own privacy policies.
              </p>
            </article>

            {/* Section 14 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">14. COOKIES</h2>
              <p className="text-body text-gray-700 mb-4">
                The Site may use cookies to process statistics and traffic
                information, facilitate navigation, and improve the service for
                the User's convenience.
              </p>
              <p className="text-body text-gray-700">
                For more information, the User can refer to the Publisher's
                Cookie Policy, accessible at any time on the Site.
              </p>
            </article>

            {/* Section 15 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                15. APPLICABILITY OF THE TERMS OF SERVICE
              </h2>
              <p className="text-body text-gray-700">
                If one or more provisions of these Terms of Service are deemed
                invalid or unenforceable, the remaining provisions shall remain
                in full force and effect. The Publisher's failure to enforce any
                provision of these Terms of Service shall not constitute a
                waiver of that provision. Any amendment to or deviation from
                these Terms of Service must be in writing and signed by the
                Publisher.
              </p>
            </article>

            {/* Section 16 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                16. APPLICABLE LAW AND LANGUAGE
              </h2>
              <p className="text-body text-gray-700 mb-4">
                These General Terms and Conditions of Use are written in French
                and may be translated into English.
              </p>
              <p className="text-body text-gray-700 mb-4">
                In the event of any discrepancy in interpretation between the
                different language versions, the French version shall prevail,
                unless otherwise required by mandatory provisions applicable to
                the User.
              </p>
              <p className="text-body text-gray-700 mb-4">
                These General Terms and Conditions of Use are governed by the
                laws of the United Arab Emirates, as applicable in the emirate
                in which the Publisher is established.
              </p>
              <p className="text-body text-gray-700">
                However, when the User is a consumer and habitually resides in a
                Member State of the European Union, they benefit from the
                mandatory consumer protection provisions of their country of
                residence, in particular Regulation (EC) No 593/2008 of 17 June
                2008 (Rome I).
              </p>
            </article>

            {/* Section 17 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">17. DISPUTE RESOLUTION</h2>
              <p className="text-body text-gray-700 mb-4">
                In the event of a dispute relating to access to, use of, or
                interpretation of the Site or these Terms and Conditions, the
                parties shall endeavor to reach an amicable solution before
                taking any legal action.
              </p>
              <p className="text-body text-gray-700 mb-4">
                If no amicable solution can be reached, and subject to any
                applicable mandatory provisions, any dispute shall be subject to
                the exclusive jurisdiction of the competent courts of the
                emirate in which the Publisher is established.
              </p>
              <p className="text-body text-gray-700">
                However, if the User is a consumer and is domiciled in a Member
                State of the European Union, they may bring the dispute before
                the competent courts of their habitual residence, in accordance
                with the provisions of Regulation (EU) No 1215/2012 of 12
                December 2012 on jurisdiction and the recognition and
                enforcement of judgments in civil and commercial matters.
              </p>
            </article>

            {/* Section 18 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                18. ELECTION OF DOMICILE
              </h2>
              <p className="text-body text-gray-700">
                The Publisher elects domicile at its registered office: Creative
                Tower, P.O. Box 4422, Fujairah, United Arab Emirates.
              </p>
            </article>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default TermsOfUsePage;
