import { useDocumentHead } from "../../../hooks/useDocumentHead";
import { GlobalNavbar } from "../../../components/GlobalNavbar";
import { GlobalFooter } from "../../../components/GlobalFooter";

export const LegalInformationPage = () => {
  useDocumentHead({
    title: "Legal Information | InvestDubai",
    description:
      "Legal information and terms for www.investdubai.com. Published by GREENBULL SERVICES FZ LLC.",
    canonical: "https://www.investdubai.com/legal/legal-information",
  });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
          <h1 className="text-display-2 text-black mb-4">Legal Information</h1>
          <p className="text-body-lg text-gray-500">
            In force on January 1st, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-body-lg text-gray-600 mb-12">
              In accordance with applicable legal provisions, and in particular
              Law No. 2004-575 of 21 June 2004 for confidence in the digital
              economy (France), users ("User(s)" or "You") of the website
              www.investdubai.com (the "Site") are informed of the identity of
              the various parties involved in its creation and maintenance.
            </p>

            {/* Article 1 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 1 - WEBSITE PUBLISHER
              </h2>
              <p className="text-body text-gray-700 mb-4">
                This Website is published by GREENBULL SERVICES FZ LLC, a
                limited liability company incorporated under the laws of the
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

            {/* Article 2 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 2 - WEBSITE HOST
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The website is hosted by WEBFLOW, 398 11th Street, 2nd Floor,
                San Francisco, CA 94103, USA.
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-none pl-0">
                <li>
                  <strong>Phone:</strong> +1-415-964-0555
                </li>
                <li>
                  <strong>Email:</strong> contact@webflow.com
                </li>
              </ul>
            </article>

            {/* Article 3 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 3 - PURPOSE OF THE WEBSITE
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The purpose of the website www.investdubai.com is to present
                general information relating to real estate investment in Dubai
                and the opportunities offered by specialized partners.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The website is a showcase site for informational and promotional
                purposes.
              </p>
              <p className="text-body text-gray-700 mb-4">
                It does not allow the creation of user accounts, the
                subscription of investments, or the execution of financial
                transactions.
              </p>
              <p className="text-body text-gray-700">
                All investment operations are carried out exclusively on
                platforms operated by third-party partners, including the
                SmartCrowd® platform, accessible via redirect links from the
                website.
              </p>
            </article>

            {/* Article 4 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 4 - ACCESS TO THE SITE
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The Site is accessible from anywhere, 24/7, except in cases of
                force majeure, scheduled or unscheduled interruptions due to
                maintenance requirements.
              </p>
              <p className="text-body text-gray-700">
                The Publisher shall not be held liable for any modification,
                interruption, or suspension of the Site.
              </p>
            </article>

            {/* Article 5 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 5 - NO INVESTMENT ADVICE
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The information on the website www.investdubai.com is provided
                for informational purposes only.
              </p>
              <p className="text-body text-gray-700 mb-4">
                GREENBULL SERVICES FZ LLC:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-4">
                <li>Does not provide investment advice,</li>
                <li>Does not make any personalized recommendations,</li>
                <li>Does not guarantee any returns,</li>
                <li>Does not receive or hold funds on behalf of Users.</li>
              </ul>
              <p className="text-body text-gray-700">
                All investment decisions are made under the sole responsibility
                of the User, based on the information and contractual documents
                provided by the relevant partner platforms.
              </p>
            </article>

            {/* Article 6 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">ARTICLE 6 - COOKIES</h2>

              <h3 className="text-h4 text-black mb-4">6.1 Use of Cookies</h3>

              <p className="text-body text-gray-700 mb-4">
                <strong>What is a cookie?</strong>
              </p>
              <p className="text-body text-gray-700 mb-4">
                A cookie is a small data file that a website asks your browser
                to store on your computer or mobile device. It allows the
                website to remember your actions or preferences over time. Most
                browsers support cookies, but you can configure your browser to
                refuse them and you can delete them at any time.
              </p>

              <p className="text-body text-gray-700 mb-4">
                <strong>Use of Cookies by GREENBULL SERVICES FZ LLC</strong>
              </p>
              <p className="text-body text-gray-700 mb-4">
                The use of cookies allows us to improve the content and
                functionality of our Site and make your browsing experience
                smoother, to operate the Website, to collect traffic
                information, and to remember User actions and preferences over
                time.
              </p>
              <p className="text-body text-gray-700 mb-4">
                We use different types of cookies:
              </p>
              <ul className="text-body text-gray-700 space-y-2 list-disc pl-6 mb-6">
                <li>
                  <strong>Technical cookies:</strong> These are only necessary
                  for the Website to function;
                </li>
                <li>
                  <strong>Functional cookies:</strong> These are necessary to
                  provide the services requested by Users on the Website;
                </li>
                <li>
                  <strong>Analytical cookies:</strong> These allow us to observe
                  Users' movements on the Site and record which content is
                  viewed and of interest to Website Users. They contribute to
                  improving the service we provide by ensuring that Users access
                  the information they are looking for.
                </li>
              </ul>

              <h3 className="text-h4 text-black mb-4">6.2 Cookie Management</h3>
              <p className="text-body text-gray-700">
                You can configure your internet browser to enable or disable
                cookies at any time. However, please note that if you disable
                cookies, your access to certain features and areas of our Site
                will likely be limited.
              </p>
            </article>

            {/* Article 7 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 7 - COLLECTION OF PERSONAL DATA
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The website www.investdubai.com is for informational and
                promotional purposes only. It does not allow the creation of
                user accounts, direct investment subscriptions, or the execution
                of financial transactions on its own interfaces.
              </p>
              <p className="text-body text-gray-700 mb-4">
                When the User clicks on features such as "Get Started" or
                equivalent, they are redirected to an interface operated by a
                third-party partner, specifically the SmartCrowd® platform,
                which may be presented with a different graphic design or a
                joint branding such as "InvestDubai powered by SmartCrowd".
              </p>
              <p className="text-body text-gray-700 mb-4">
                Any creation of a user account, including the entry of an email
                address, password, or any other personal information, is carried
                out exclusively on this third-party platform, under the
                responsibility of its operator.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The personal data necessary for creating an account, making an
                investment, processing any payments, or more generally,
                providing investment services, is collected and processed
                directly by these third-party partners, including SmartCrowd®,
                acting as data controllers within the meaning of applicable data
                protection regulations.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The Website Publisher does not determine the purposes or means
                of this processing and does not intervene in its implementation.
              </p>
              <p className="text-body text-gray-700 mb-4">
                When simply browsing the www.investdubai.com website, the
                Publisher may process personal data in a limited way,
                particularly for technical operation, security, audience
                measurement, or managing information requests, where applicable.
                This processing is carried out in accordance with applicable
                data protection regulations.
              </p>
              <p className="text-body text-gray-700 mb-4">
                For more information regarding the data processing carried out
                by the Publisher, its purposes, legal bases, retention periods,
                the rights of data subjects, and, where applicable, data
                transfers outside the European Union, the User is invited to
                consult the Privacy Policy available on the Website.
              </p>
              <p className="text-body text-gray-700">
                For processing carried out by partner platforms, the User is
                invited to refer to the privacy policies and legal information
                published by these partners before any transmission of personal
                data.
              </p>
            </article>

            {/* Article 8 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 8 - INTELLECTUAL PROPERTY
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The Publisher owns, or is duly authorized to use, all
                intellectual property rights relating to the structure,
                architecture, and content of the Site, including text, graphics,
                illustrations, images, photographs, videos, logos, trademarks,
                visual elements, and their formatting, worldwide.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Any reproduction, representation, modification, adaptation,
                translation, extraction, reuse, distribution, or exploitation,
                in whole or in part, of all or part of the Site or its content,
                by any means whatsoever, without the prior written authorization
                of the Publisher, is strictly prohibited.
              </p>
              <p className="text-body text-gray-700 mb-4">
                However, the User is authorized to view, display, and reproduce
                the Site's content for strictly personal, private, and
                non-commercial purposes, subject to compliance with the
                intellectual property rights of the Publisher and, where
                applicable, those of its partners.
              </p>
              <p className="text-body text-gray-700">
                Any unauthorized use of the Site or any of its elements
                constitutes an infringement and may result in civil and/or
                criminal liability for its perpetrator, in accordance with
                applicable regulations.
              </p>
            </article>

            {/* Article 9 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 9 - LIABILITY
              </h2>
              <p className="text-body text-gray-700 mb-4">
                The Publisher takes reasonable steps to ensure the accuracy and
                timeliness of the information published on the Site. However,
                the information presented is provided for informational purposes
                only and should not be considered investment advice, a
                personalized recommendation, or an inducement to invest.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The Publisher does not guarantee the completeness, timeliness,
                or accuracy of the published information and disclaims all
                liability for any use that may be made of it by the User. Any
                decision made by the User based on the information accessible on
                the Site is made under their sole responsibility.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The Site may contain hyperlinks to websites published by third
                parties, including the SmartCrowd® platform. The Publisher has
                no control over these sites and cannot be held liable for their
                content, operation, or any contractual, financial, or legal
                relationships that may be established between the User and these
                third parties.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The Publisher shall not be held liable for any direct or
                indirect damages resulting from access to or use of the Site,
                including but not limited to interruptions, malfunctions,
                temporary unavailability, technical errors, internet network
                failures, virus contamination, or fraudulent use of data.
              </p>
              <p className="text-body text-gray-700">
                Communications between the User and the Publisher, particularly
                via email or WhatsApp messaging, are strictly for informational
                purposes and have no contractual value.
              </p>
            </article>

            {/* Article 10 */}
            <article className="mb-12">
              <h2 className="text-h3 text-black mb-6">
                ARTICLE 10 - APPLICABLE LAW
              </h2>
              <p className="text-body text-gray-700 mb-4">
                These legal information and the use of the website
                www.investdubai.com are governed by the law of the state in
                which the website publisher is established, namely the law of
                the United Arab Emirates, subject to any mandatory provisions
                that may apply due to the user's habitual residence.
              </p>
              <p className="text-body text-gray-700 mb-4">
                The website www.investdubai.com is for informational and
                promotional purposes only. It does not allow the creation of
                user accounts, direct subscription to investments, or the
                execution of financial transactions.
              </p>
              <p className="text-body text-gray-700 mb-4">
                Any investment transaction carried out by the user is conducted
                exclusively on third-party platforms, including the SmartCrowd®
                platform, and is governed by the contractual terms and
                applicable law specific to those platforms, without the website
                publisher being held liable in any way.
              </p>
              <p className="text-body text-gray-700">
                When the User is a consumer and habitually resides in a Member
                State of the European Union, he benefits from the mandatory
                protection provisions provided for by the legislation of his
                State of residence, in accordance with the applicable rules on
                consumer protection.
              </p>
            </article>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default LegalInformationPage;
