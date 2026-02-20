import React, { useState } from 'react';
import { CookieBanner } from '../components/CookieBanner';
import { useNavigate } from 'react-router-dom';
const documents = [
{
  id: 'privacy-policy',
  title: 'Privacy Policy'
},
{
  id: 'cookie-policy',
  title: 'Cookie Policy'
},
{
  id: 'terms-of-service',
  title: 'Terms of Service'
}];

export function LegalPage() {
  const [activeDocument, setActiveDocument] = useState('privacy-policy');
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const navigate = useNavigate();
  const renderContent = () => {
    switch (activeDocument) {
      case 'privacy-policy':
        return (
          <>
            <p className="text-slate-500 text-sm mb-8">
              Updated on November 26th, 2025
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Introduction
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              This Privacy Policy explains how PT Immenzo Jaya International
              ("Immenzo," "we," "our," or "us") collects, uses, discloses, and
              safeguards personal information ("Personal Information") when you
              engage with our website, web applications, mobile apps, and other
              services ("Services"). This policy is governed by Indonesian law.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Scope and Application
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              This Privacy Policy is part of Immenzo's Terms and Conditions and
              applies whenever you use our Services. It details our data
              practices concerning the Personal Information collected from or
              about you. By continuing to use our Services, you agree to these
              terms. If you disagree, please stop using our Services
              immediately.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Use of Third-Party Services
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              To enhance our Services, we may work with third-party providers
              who may independently collect and process your information. While
              we strive to ensure their compliance with data protection
              regulations such as Singapore's PDPA and Indonesian laws, we do
              not guarantee their practices. Information gathered by these third
              parties is not covered by this Privacy Policy, and we bear no
              responsibility for their privacy handling. Only data collected
              directly through our Services fall under this policy.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Collection of Personal Information
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              We collect Personal Information to deliver and improve our
              Services. This includes: Information you provide during account
              registration, communication, file uploads, feedback, surveys, or
              social media interactions. Automatically gathered data like IP
              addresses, browser type, operating system, usage behavior, device
              identifiers, and cookies. User-generated content, feedback, and
              responses given to Immenzo.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Use of Personal Information
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Collected Personal Information is used for: Operating,
              maintaining, and improving our Services. Training and refining our
              AI models using user inputs, feedback, and responses.
              Communicating updates, promotional materials, and responding to
              inquiries. Personalizing content and advertisements to user
              preferences. Complying with legal requirements and defending our
              rights. Conducting research and analysis to develop our Services
              further.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Disclosure of Personal Information
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              We do not share Personal Information with third parties except:
              With service providers working on our behalf. During corporate
              transactions like mergers or sales. When required by law or to
              protect rights and safety. In aggregated or anonymized form for
              analysis or marketing.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Data Security
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              We have implemented robust security measures to protect your
              Personal Information from unauthorized access or misuse. However,
              no online transmission or storage method is completely secure.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Data Retention
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Personal Information is kept only as long as necessary for the
              purposes outlined or as required by law. When no longer needed,
              data will be deleted, destroyed, or anonymized.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Your Rights
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Depending on your jurisdiction, you may have rights to: Access and
              correct your Personal Information. Withdraw consent for
              processing. Request deletion or restrictions on your data. Object
              to processing activities. To exercise these rights, contact us
              using the details below. Identity verification may be required.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Changes to the Policy
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              We may update this Privacy Policy periodically. Notable changes
              will be notified on our website. Users should review this policy
              occasionally. The latest revision date is displayed at the top of
              the document.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Consent for AI Training
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              By providing user-generated content or feedback and continuing to
              use our Services, you agree to allow such data to be used in
              training and improving our AI models. If you disagree, please stop
              using our Services or contact us to revoke consent.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Translation Clause
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              This Agreement is available in English and Bahasa Indonesia. In
              case of discrepancies, the English version prevails and serves as
              the primary reference.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Contact Information
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              For questions or to exercise your rights regarding this Privacy
              Policy, please reach out to us at: Email:{' '}
              <a
                href="mailto:legal@immenzo.com"
                className="text-white hover:underline">

                legal@immenzo.com
              </a>
              , Subject: "Immenzo Privacy"
            </p>

            <div className="mt-12 pt-10 border-t border-white/[0.06]">
              <h2 className="text-2xl font-bold text-white mb-2">
                Data Privacy Policy
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                This section forms part of our Privacy Policy and governs how we
                handle document and processing data.
              </p>
              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Data Collection
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                We collect data necessary to provide our document automation
                services. This includes document content uploaded for processing
                and metadata associated with those documents.
              </p>
              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Data Processing and Storage
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Data is processed automatically by our AI models. We do not
                access the content of your documents unless specifically
                authorized for support or quality assurance purposes.
              </p>
              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Data Residency
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                All customer data is stored and processed within the territory
                of Indonesia, in compliance with PP 71/2019 regarding Electronic
                Systems and Transactions.
              </p>
              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Data Retention
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                We retain processed data only for as long as necessary to
                deliver the service or as required by law. You may configure
                retention policies within your dashboard.
              </p>
              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Data Subject Rights
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                You retain full ownership of your data. You have the right to
                export, delete, or correct your data at any time via our API or
                dashboard.
              </p>
              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Security Measures
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                We employ strict technical and organizational measures to
                protect your data, including encryption, access controls, and
                regular security audits.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-white/[0.06]">
              <h2 className="text-2xl font-bold text-white mb-2">
                Cookie Policy
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                This section forms part of our Privacy Policy and governs how we
                use cookies and similar technologies.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Definitions and Key Terms
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Cookie: small amount of data generated by a website and saved by
                your web browser. Company: PT Immenzo Jaya International.
                Device: any internet connected device such as a phone, tablet,
                computer. Personal Data: any information that allows for the
                identification of a natural person. Service: the service
                provided by PT Immenzo Jaya International. Website: Immenzo's
                site at https://immenzo.com/
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Introduction
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                This Cookie Policy explains how our website uses cookies and
                similar technologies to provide, improve, and protect our
                services. By continuing to browse or use our website, you agree
                to the use of cookies as described below.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                What is a Cookie?
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                A cookie is a small text file stored on your device to identify
                your browser, provide analytics, and remember information about
                you. They are completely safe and cannot run programs or deliver
                viruses to your device.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Types of Cookies We Use
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                We use Essential Cookies for core functions, Performance Cookies
                to understand user interaction, Analytics Cookies for trend
                analysis, and Social Media Cookies for platform integrations.
                Session cookies expire when you close your browser; persistent
                cookies remain until they expire or you delete them.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Essential Cookies
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Strictly necessary for the operation of our website. They enable
                core functions such as security, page navigation, and access to
                protected areas. Without these cookies, the website cannot
                function properly.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Performance Cookies
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Help us understand how users interact with our website by
                collecting information such as pages visited, time spent on the
                site, and any issues encountered.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Analytics and Customization Cookies
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Collect information to help us analyze trends, understand user
                behavior, and optimize features. They also assist in customizing
                content based on general user interactions.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Social Media Cookies
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Used when users interact with social media features on our
                website. These cookies may allow social platforms to track user
                behavior on our site.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Third-Party Cookies
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Third-party service providers may place cookies on your device.
                These are controlled by external companies and subject to their
                respective privacy and cookie policies.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Managing and Blocking Cookies
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Most browsers allow you to control cookies through their
                settings. Blocking cookies may worsen your user experience. You
                can manage cookies in Chrome, Firefox, Safari, Edge, and Opera.
                Blocking essential cookies may prevent our website from
                functioning properly.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Changes to Our Cookie Policy
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                We may update this Cookie Policy to reflect changes to our
                Service. Unless required by law, we will notify you before
                changes take effect and give you an opportunity to review them.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Your Consent
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                By using our website, registering an account, or making a
                purchase, you consent to our Cookie Policy and agree to its
                terms. You may update your preferences at any time via Cookie
                Settings.
              </p>

              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                Contact
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Questions about cookies? Email{' '}
                <a
                  href="mailto:support@immenzo.com"
                  className="text-white hover:underline">

                  support@immenzo.com
                </a>
              </p>
            </div>
          </>);

      case 'cookie-policy':
        return (
          <>
            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Definitions and Key Terms
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              To help explain things as clearly as possible in this Cookie
              Policy, every time any of these terms are referenced, are strictly
              defined as: Cookie: small amount of data generated by a website
              and saved by your web browser. Company: when this policy mentions
              "Company," "we," "us," or "our," it refers to PT Immenzo Jaya
              International. Device: any internet connected device such as a
              phone, tablet, computer. Personal Data: any information that
              allows for the identification of a natural person. Service: refers
              to the service provided by PT Immenzo Jaya International. Website:
              Immenzo's site at https://immenzo.com/
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Introduction
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              This Cookie Policy explains how our website uses cookies and
              similar technologies to provide, improve, and protect our
              services. By continuing to browse or use our website, you agree to
              the use of cookies as described below.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              What is a Cookie?
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              A cookie is a small text file that is stored on your computer or
              other internet connected device in order to identify your browser,
              provide analytics, remember information about you such as your
              language preference or login information. They're completely safe
              and can't be used to run programs or deliver viruses to your
              device.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              What Type of Cookies Does Immenzo Use?
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Cookies can either be session cookies or persistent cookies. A
              session cookie expires automatically when you close your browser.
              A persistent cookie will remain until it expires or you delete
              your cookies. We use Essential Cookies for core functions,
              Performance Cookies to understand user interaction, Analytics
              Cookies for trend analysis, and Social Media Cookies for platform
              integrations.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Essential Cookies
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              These cookies are strictly necessary for the operation of our
              website. They enable core functions such as security, page
              navigation, and access to protected areas. Without these cookies,
              the website cannot function properly.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Performance Cookies
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Performance cookies help us understand how users interact with our
              website by collecting information such as pages visited, time
              spent on the site, and any issues encountered. This data allows us
              to improve the site's overall performance and user experience.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Analytics and Customization Cookies
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              These cookies collect information to help us analyze trends,
              understand user behavior, and optimize features. They also assist
              in customizing content based on general user interactions.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Social Media Cookies
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Social media cookies are used when users interact with social
              media features on our website, such as login integrations or
              content sharing. These cookies may allow social platforms to track
              user behavior on our site.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Third-Party Cookies
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Third-party service providers may place cookies on your device
              when you use our website. These include analytics providers,
              social platforms, and other service partners. These cookies are
              controlled by external companies and are subject to their
              respective privacy and cookie policies.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              How Can You Manage Cookies?
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Most browsers allow you to control cookies through their settings
              preferences. However, if you limit the ability of websites to set
              cookies, you may worsen your overall user experience, since it
              will no longer be personalized to you. You can manage cookies in
              browsers like Google Chrome, Internet Explorer, Mozilla Firefox,
              Safari, Android Browser, and Opera.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Blocking and Disabling Cookies
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Wherever you're located you may also set your browser to block
              cookies and similar technologies, but this action may block our
              essential cookies and prevent our website from functioning
              properly, and you may not be able to fully utilize all of its
              features and services.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Changes To Our Cookie Policy
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              We may change our Service and policies, and we may need to make
              changes to this Cookie Policy so that they accurately reflect our
              Service and policies. Unless otherwise required by law, we will
              notify you before we make changes to this Cookie Policy and give
              you an opportunity to review them before they go into effect.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Your Consent
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              By using our website, registering an account, or making a
              purchase, you hereby consent to our Cookie Policy and agree to its
              terms.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Contact Us
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Don't hesitate to contact us if you have any questions regarding
              our Cookie Policy. Via Email:{' '}
              <a
                href="mailto:support@immenzo.com"
                className="text-white hover:underline">

                support@immenzo.com
              </a>
            </p>
          </>);

      case 'terms-of-service':
        return (
          <>
            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Introduction / Consent to Terms
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Welcome to Immenzo, an all-in-one legal platform powered by AI
              ("Immenzo"). This Terms of Use agreement ("Agreement") forms a
              binding contract between you ("User," "you," or "your") and PT
              Immenzo Jaya International, a company registered under Indonesian
              law ("Company," "we," "us," or "our"). Your access, browsing, use
              of our services, subscription, or any agreement related to the use
              or access of our services signifies your consent to adhere to the
              terms specified in this Agreement.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Definitions
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              For this Agreement, the following terms are defined as: Service or
              Services refers to the Immenzo Platform, including website
              (immenzo.com), mobile apps, API services, and related offerings
              provided by the Company. Platform covers the web platforms, mobile
              apps, APIs, and third-party applications linked via the Company's
              API. User or Users encompasses any individual, organization, or
              entity accessing, browsing, subscribing, or agreeing to our
              Services.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Eligibility
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              The Service is designed for persons aged 18 or older. By using the
              Service, you confirm that you meet these age requirements and
              possess the legal capacity to agree to this Agreement. If you do
              not meet these criteria, you must not access or use the Service.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Account Creation and Security
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Access to certain features may require account registration.
              During this process, you agree to provide accurate, up-to-date
              information and to update it as necessary. You are responsible for
              keeping your account credentials confidential and for all
              activities under your account. Notify us immediately if you detect
              any unauthorized use or security breach.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              User Responsibilities
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              You agree to use the Service lawfully and responsibly. You are
              solely accountable for your conduct and any content you upload or
              transmit. You must not misuse the Service for illegal, harmful, or
              unethical reasons, and you agree to abide by all usage policies
              and restrictions.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Use Restrictions
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Users must not: Violate legal regulations. Engage in harassment,
              bullying, or spam. Upload unlawful, harmful, defamatory, or
              infringing content. Use the Service for commercial purposes
              without authorization. Exploit the Service to create or distribute
              commercial products. Disrupt or compromise the Service's
              functioning or security.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              User Content
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              When you submit content: You grant the Company a worldwide,
              non-exclusive license to use, reproduce, share, and adapt your
              submissions for operational and promotional purposes. You warrant
              that you own or have rights to your content and that it does not
              infringe third-party rights.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Intellectual Property
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              All rights related to the Service and its content are owned or
              licensed by the Company. Users may only access and use content for
              personal, non-commercial purposes, without modifying or creating
              derivatives unless authorized.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Termination of Access
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              The Company may suspend or terminate your access without notice
              for breaches or misconduct. Upon termination, you must stop using
              and distributing the Service. You can also end your account
              anytime. Termination absolves the Company from further obligations
              or refunds related to the Service.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Disclaimers and Limitation of Liability
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Immenzo is an AI tool designed to assist document workflows, not
              providing legal or medical advice. Responses are informational and
              not a substitute for professional advice. Errors can occur; the
              Company does not guarantee accuracy and encourages verification
              with qualified professionals. The Service is provided "as is" and
              "as available," without warranties.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Indemnity
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              You agree to defend and hold harmless the Company and affiliates
              from claims or damages resulting from your usage, breach of this
              Agreement, wrongful acts, or infringement of rights.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Payment and Indemnity
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              All payments must be lawful and free of illegal activities. You
              agree to cover taxes and currency conversion costs. You will
              indemnify the Company for claims related to illegitimate payments.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Privacy Policy
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Your use is also governed by our Privacy Policy, which explains
              data collection and protection. Continued use signifies
              acceptance; discontinuation is advised if you disagree.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Legal Jurisdiction
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              This Agreement is governed by Indonesian law. Disputes are subject
              to the South Jakarta District Court.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">
              Modifications
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              The Company may alter this Agreement at any time; changes will be
              posted online. Your continued use indicates acceptance of
              amendments.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-8">Contact</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Have any questions or concerns? Reach us at:{' '}
              <a
                href="mailto:support@immenzo.com"
                className="text-white hover:underline">

                support@immenzo.com
              </a>
            </p>
          </>);

      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 border-r border-white/[0.06] pr-8">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-6 font-bold">
              Documents
            </h4>
            <nav className="flex flex-col space-y-4">
              {documents.map((doc) =>
              <button
                key={doc.id}
                onClick={() => setActiveDocument(doc.id)}
                className={`text-left text-sm transition-colors ${activeDocument === doc.id ? 'text-white font-medium' : 'text-slate-400 hover:text-white'}`}>

                  {doc.title}
                </button>
              )}
              <button
                onClick={() => navigate('/portal?redirect=/legal')}
                className="text-left text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1">

                Sub-Processors{' '}
                <span className="text-[10px] text-slate-600">🔒</span>
              </button>
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => setShowCookieBanner(true)}
                  className="text-left text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">

                  <span>⚙️</span> Cookie Settings
                </button>
              </div>
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 lg:pl-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {documents.find((d) => d.id === activeDocument)?.title}
            </h1>
            <p className="text-sm text-slate-500 mb-12">February 17, 2026</p>
            <div className="prose prose-invert max-w-none">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
      <CookieBanner
        isOpen={showCookieBanner}
        onClose={() => setShowCookieBanner(false)}
        onAcceptAll={() => {
          localStorage.setItem('immenzo_cookie_consent', 'all');
          setShowCookieBanner(false);
        }}
        onEssentialOnly={() => {
          localStorage.setItem('immenzo_cookie_consent', 'essential');
          setShowCookieBanner(false);
        }} />

    </div>);

}