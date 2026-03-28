import { useDocumentHead } from "../../../hooks/useDocumentHead";
import { GlobalNavbar } from "../../../components/GlobalNavbar";
import { GlobalFooter } from "../../../components/GlobalFooter";

export const PrivacyPolicyPage = () => {
  useDocumentHead({
    title: "Privacy Policy | InvestDubai",
    description:
      "Privacy Policy for www.investdubai.com. Learn how GREENBULL SERVICES FZ LLC collects and processes your personal data.",
    canonical: "https://www.investdubai.com/legal/privacy-policy",
  });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
          <h1 className="text-display-2 text-black mb-4">Privacy Policy</h1>
          <p className="text-body-lg text-gray-500">
            In force on January 1st, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            {/* Article 1 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">ARTICLE 1 - PREAMBLE</h2>
              <p className="text-body text-gray-700 mb-4">
                This Privacy Policy aims to inform users ("Users") of the
                website https://www.investdubai.com/ (the "Site") about how
                their personal data may be collected and processed, in
                accordance with applicable data protection regulations.
              </p>
              <p className="text-body text-gray-700 mb-4">
                It is established in particular with regard to:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>
                  Regulation (EU) 2016/679 of 27 April 2016 on the protection of
                  personal data (GDPR), for Users located in the European Union;
                </li>
                <li>
                  Federal Decree-Law No. 45/2021 on the protection of personal
                  data of the United Arab Emirates;
                </li>
                <li>
                  As well as, where applicable, other local legislation
                  depending on the User's place of residence.
                </li>
              </ul>
              <p className="text-body text-gray-700 mb-4">
                The Site is for informational and promotional purposes only. It
                does not allow the creation of user accounts, direct investment
                subscriptions, or the execution of financial transactions on its
                own interfaces.
              </p>
              <p className="text-body text-gray-700">
                This Policy supplements the Legal Notices, the General Terms and
                Conditions of Use, and the Cookie Policy, which are accessible
                at any time on the Site.
              </p>
            </article>

            {/* Article 2 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 2 - DATA CONTROLLER
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The processing of personal data implemented in connection with
                the operation of the Site is carried out under the
                responsibility of:
              </p>
              <p className="text-body text-gray-700 mb-4">
                GREENBULL SERVICES FZ LLC, a limited liability company
                incorporated under the laws of the United Arab Emirates, and
                specifically under the authority of Creative City Fujairah Free
                Zone, with a share capital of AED 150,000, whose registered
                office is located at Creative Tower, P.O. Box 4422, Fujairah,
                United Arab Emirates, holder of license no. 13322/2018 issued by
                the Fujairah Culture & Media Authority (hereinafter "Greenbull"
                or "the Data Controller").
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-none pl-0">
                <li>
                  <strong>Telephone:</strong> +33 7 57 95 75 04
                </li>
                <li>
                  <strong>Email:</strong> hello@investdubai.com
                </li>
              </ul>
            </article>

            {/* Article 3 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 3 - SCOPE OF DATA PROCESSING CARRIED OUT VIA THE WEBSITE
              </h2>

              <h3 className="text-h4 text-black mb-4">
                3.1 No Account Creation or Investment on the Website
              </h3>
              <p className="text-body text-gray-700 mb-4">
                The www.investdubai.com website does not allow the creation of
                user accounts or the execution of investment transactions.
              </p>
              <p className="text-body text-gray-700 mb-4">
                When the User clicks on features such as "Get Started," they are
                redirected to an interface operated by a third-party partner,
                specifically the SmartCrowd® platform, which may be presented
                with a different branding or joint trademark such as
                "InvestDubai powered by SmartCrowd."
              </p>
              <p className="text-body text-gray-700 mb-6">
                All account creation, login credentials, KYC processing,
                investment, and payment are carried out exclusively on these
                third-party platforms, under the responsibility of their
                operators, acting as separate data controllers. The User is
                advised to consult their privacy policies before transmitting
                any personal data.
              </p>

              <h3 className="text-h4 text-black mb-4">
                3.2 Data Processed by the Publisher During Browsing
              </h3>
              <p className="text-body text-gray-700 mb-4">
                When simply browsing the Site, the Data Controller may process
                limited personal data, including:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>
                  Technical browsing data (IP address, browser type, security
                  logs);
                </li>
                <li>
                  Audience and traffic data (aggregated or anonymized
                  statistics);
                </li>
                <li>
                  Data voluntarily provided by the User when requesting contact
                  or information.
                </li>
              </ul>
              <p className="text-body text-gray-700">
                This processing is not for the purpose of providing investment
                services.
              </p>
            </article>

            {/* Article 4 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 4 - CATEGORIES OF DATA PROCESSED AND PURPOSES
              </h2>
              <p className="text-body text-gray-700 mb-6">
                In the course of operating the website www.investdubai.com, the
                Data Controller processes personal data in a limited manner,
                exclusively for the purposes described below.
              </p>

              <h3 className="text-h4 text-black mb-4">
                4.1 Data processed directly by the Publisher
              </h3>
              <p className="text-body text-gray-700 mb-6">
                The Publisher processes limited data for technical operation,
                security, audience measurement, and managing information
                requests.
              </p>

              <h3 className="text-h4 text-black mb-4">
                4.2 Data Processed by Partner Platforms
              </h3>
              <p className="text-body text-gray-700 mb-4">
                The Site does not allow the creation of user accounts, the
                execution of investment transactions, or the implementation of
                Know Your Customer (KYC) verification procedures.
              </p>
              <p className="text-body text-gray-700 mb-6">
                Personal data relating to account creation, user identity,
                financial situation, investments, or any regulated transaction
                are collected and processed exclusively by third-party partner
                platforms, including SmartCrowd®, acting as separate data
                controllers, in accordance with their own privacy policies. The
                Data Controller has no access to, control over, or
                responsibility for this processing.
              </p>

              <h3 className="text-h4 text-black mb-4">
                4.3 Data Retention Periods
              </h3>
              <p className="text-body text-gray-700">
                Personal data is retained for a period not exceeding that
                strictly necessary for the purposes for which it was collected.
                When the retention period cannot be determined in advance, the
                criteria used to determine it are communicated to the User in
                accordance with applicable regulations.
              </p>
            </article>

            {/* Article 5 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 5 - RECIPIENTS OF PERSONAL DATA
              </h2>
              <p className="text-body text-gray-700 mb-4">
                Personal data processed in connection with the operation of the
                Site is intended exclusively for:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>
                  The Data Controller's strictly authorized internal
                  departments;
                </li>
                <li>
                  Its technical service providers, including the Site's hosting
                  provider, acting as data processors within the meaning of
                  applicable regulations.
                </li>
              </ul>
              <p className="text-body text-gray-700 mb-4">
                The Data Controller does not sell Users' personal data or use it
                for advertising or marketing purposes without the User's prior
                consent when required.
              </p>
              <p className="text-body text-gray-700">
                Data necessary for creating an account, making an investment, or
                providing investment services is processed exclusively by
                third-party partner platforms, including SmartCrowd®, under
                their own responsibility. Users are encouraged to consult the
                privacy policies of these partners before transmitting any
                personal data.
              </p>
            </article>

            {/* Article 6 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 6 - DATA TRANSFER AND SERVICE PROVIDERS
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The Site is hosted by WEBFLOW, whose servers may be located in
                the United States.
              </p>
              <p className="text-body text-gray-700 mb-4">
                When personal data of Users located in the European Union is
                processed, the Data Controller ensures that transfers to
                countries outside the European Union are governed by appropriate
                safeguards, in accordance with Articles 44 et seq. of the GDPR.
              </p>
              <p className="text-body text-gray-700">
                The Data Controller may also be required to disclose personal
                data when such disclosure is required by law, applicable
                regulation, or a decision of a competent authority.
              </p>
            </article>

            {/* Article 7 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 7 - DATA RETENTION PERIOD
              </h2>
              <p className="text-body text-gray-700 mb-4">
                Personal data processed via the Site is retained for a period
                not exceeding that strictly necessary for the purposes for which
                it was collected.
              </p>
              <p className="text-body text-gray-700">
                Certain data may be retained beyond this period when required to
                comply with legal or regulatory obligations, or for the
                establishment, exercise, or defense of legal claims.
              </p>
            </article>

            {/* Article 8 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 8 - DATA HOSTING
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The website https://www.investdubai.com is hosted by:
              </p>
              <div className="text-body text-gray-700 space-y-1">
                <p>
                  <strong>Webflow Inc.</strong>
                </p>
                <p>398 11th Street, 2nd Floor</p>
                <p>San Francisco, CA 94103</p>
                <p>USA</p>
                <p>📞 +1 415 964 0555</p>
                <p>📧 contact@webflow.com</p>
              </div>
            </article>

            {/* Article 9 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 9 - USER RIGHTS
              </h2>
              <p className="text-body text-gray-700 mb-6">
                In accordance with applicable data protection regulations, and
                in particular Regulation (EU) 2016/679 ("GDPR") where
                applicable, any User whose personal data is processed by the
                Data Controller has the following rights, under the conditions
                provided for by applicable law.
              </p>

              <h3 className="text-h4 text-black mb-4">
                9.1 Right to Information
              </h3>
              <p className="text-body text-gray-700 mb-6">
                The User has the right to obtain clear, transparent, and
                understandable information about how their personal data is
                processed, including the purposes for which it is processed, the
                categories of data concerned, the potential recipients, and
                their rights.
              </p>

              <h3 className="text-h4 text-black mb-4">
                9.2 Right of Access, Rectification, and Erasure
              </h3>
              <p className="text-body text-gray-700 mb-4">
                The User may request:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>Access to their personal data;</li>
                <li>Rectification of inaccurate or incomplete data;</li>
                <li>
                  Erasure of their data, where the conditions provided for by
                  the regulations are met.
                </li>
              </ul>
              <p className="text-body text-gray-700 mb-4">
                These rights can be exercised by sending a request to the Data
                Controller by email or post, using the contact details provided
                in Article 2 of this Privacy Policy.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Since no personal space or user account is created on the
                www.investdubai.com website, these rights are exercised
                exclusively through contact.
              </p>
              <p className="text-body text-gray-700 mb-6">
                In case of reasonable doubt regarding the identity of the
                requester, the Data Controller may request any information or
                document necessary to verify their identity, in order to prevent
                identity theft.
              </p>

              <h3 className="text-h4 text-black mb-4">
                9.3 Right to Data Portability
              </h3>
              <p className="text-body text-gray-700 mb-4">
                When processing is based on consent or the performance of a
                contract and is carried out using automated means, the User may
                request to receive the personal data they have provided to the
                Data Controller in a structured, commonly used, and
                machine-readable format, or to have it transmitted to another
                data controller where technically feasible.
              </p>
              <p className="text-body text-gray-700 mb-6">
                This right applies only to data actually processed by the Data
                Controller in connection with the operation of the Website.
              </p>

              <h3 className="text-h4 text-black mb-4">
                9.4 Right to Restriction and Right to Object
              </h3>
              <p className="text-body text-gray-700 mb-6">
                The User may request the restriction of the processing of their
                personal data or object to its processing, under the conditions
                provided for by applicable regulations, in particular when the
                processing is based on the legitimate interest of the Data
                Controller, unless there are compelling legitimate grounds
                justifying the continuation of the processing.
              </p>

              <h3 className="text-h4 text-black mb-4">
                9.5 Right to Lodge a Complaint
              </h3>
              <p className="text-body text-gray-700 mb-4">
                The User may exercise their rights or lodge a complaint:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>
                  Directly with the Data Controller, by contacting them using
                  the contact details provided in Article 2 of this Privacy
                  Policy. The Data Controller will endeavor to respond within
                  one (1) month of receiving the request, a period that may be
                  extended under the conditions provided for by applicable
                  regulations;
                </li>
                <li>
                  For Users located in the United Arab Emirates, to the
                  competent data protection authority;
                </li>
                <li>
                  For Users located in the European Union, to the competent
                  supervisory authority of their country of habitual residence,
                  in particular the Commission Nationale de l'Informatique et
                  des Libertés (CNIL) for France, in accordance with Article 77
                  of the GDPR.
                </li>
              </ul>
              <p className="text-body text-gray-700">
                Independently of any administrative complaint, any User residing
                in the European Union may also lodge a legal claim with the
                competent courts, in accordance with Article 79 of the GDPR.
              </p>
            </article>

            {/* Article 10 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">ARTICLE 10 - UPDATES</h2>
              <p className="text-body text-gray-700 mb-4">
                This Privacy Policy may be amended at any time to reflect legal,
                regulatory, or technical developments.
              </p>
              <p className="text-body text-gray-700">
                The applicable version is the one published on the Website on
                the date of consultation.
              </p>
            </article>

            {/* Article 11 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 11 - SECURITY AND CONFIDENTIALITY
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The Data Controller implements appropriate technical,
                organizational, and security measures, taking into account the
                nature of the data processed, the purposes pursued, and the
                risks presented by the processing, to protect personal data
                against destruction, loss, alteration, unauthorized disclosure,
                or access.
              </p>
              <p className="text-body text-gray-700 mb-4">
                These measures include, in particular, the use of recognized
                technical service providers, subject to contractual obligations
                regarding confidentiality and security, as well as mechanisms
                designed to preserve the integrity and availability of the data.
              </p>
              <p className="text-body text-gray-700">
                However, the Data Controller draws Users' attention to the fact
                that data transmission via the Internet involves inherent risks
                and that no technology can guarantee absolute security for the
                exchange or storage of information. Consequently, total security
                cannot be guaranteed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default PrivacyPolicyPage;
