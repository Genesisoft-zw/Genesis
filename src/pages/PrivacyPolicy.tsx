import React from "react";
import { Footer } from "../components/Footer";
import { Helmet } from "react-helmet-async";

// Privacy policy content structured for easy updates
const privacyContent = [
  {
    title: "Privacy Policy",
    description:
      "Your privacy is important to Genesisoft. This privacy policy explains what personal data we collect, how we use it, and how we protect your information. By using our services, you agree to the practices described in this policy.",
  },
  {
    title: "About Genesisoft",
    description:
      "Genesisoft is a Private Business Corporation (PBC) based in Zimbabwe, established to deliver reliable and innovative software solutions. Our mission is to empower businesses and individuals through impactful digital solutions. We specialize in web and mobile application development, graphic design, and ai chatbots.",
  },
  {
    title: "Information We Collect",
    description:
      "We collect information to provide better services to our users. This includes:",
    points: [
      "Personal information you provide (e.g., name, email, phone number).",
      "Information collected automatically (e.g., IP address, browser type, usage data).",
      "Data from third-party services (e.g., analytics tools).",
    ],
  },
  {
    title: "How We Use Information",
    description:
      "We use the information we collect for the following purposes:",
    points: [
      "To provide, maintain, and improve our services.",
      "To communicate with you about your projects or inquiries.",
      "To personalize your experience and deliver relevant content.",
      "To protect the security and integrity of our services.",
    ],
  },
  {
    title: "Data Sharing and Disclosure",
    description:
      "We do not sell or share your personal information with third parties except in the following cases:",
    points: [
      "With your explicit consent.",
      "To comply with legal obligations or protect our rights.",
      "With trusted service providers who assist us in delivering our services.",
    ],
  },
  {
    title: "Data Security",
    description:
      "We take data security seriously and implement industry-standard measures to protect your information. These include encryption, secure servers, and regular security audits.",
  },
  {
    title: "Your Rights",
    description: "You have the right to:",
    points: [
      "Access, update, or delete your personal information.",
      "Opt-out of marketing communications.",
      "Request a copy of the data we hold about you.",
    ],
  },
  {
    title: "Contact Us",
    description:
      "If you have any questions about this privacy policy or our data practices, please contact us at:",
    contact: "info@genesisoft.co.zw",
  },
];

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="If you have any questions about this privacy policy or our data practices, please contact us at info@genesisoft.co.zw"
        />
        <link
          rel="canonical"
          href="https://www.genesisoft.co.zw/privacy-policy"
        />
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 grid-background">
        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Privacy Policy Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {privacyContent[0].title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {privacyContent[0].description}
            </p>
          </header>

          {/* Dynamic Sections */}
          {privacyContent.slice(1).map((section, index) => (
            <section
              key={index}
              className="mt-12"
              aria-labelledby={`section-${index}`}
            >
              <h2
                id={`section-${index}`}
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {section.description}
              </p>
              {section.points && (
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {section.contact && (
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  <strong>Contact:</strong> {section.contact}
                </p>
              )}
            </section>
          ))}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
