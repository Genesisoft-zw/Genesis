import React from "react";
import { Helmet } from "react-helmet-async";
import { Footer } from "../components/Footer";

const termsContent = [
  {
    title: "Terms of Service",
    description:
      "These Terms of Service govern your use of Genesisoft's services. By engaging with our services, you agree to comply with and be bound by these terms. Please read them carefully before proceeding with any project engagement.",
  },
  {
    title: "1. Introduction",
    description:
      "Genesisoft is a Zimbabwean-based digital solutions provider committed to delivering innovative services to businesses and individuals.",
  },
  {
    title: "2. Services",
    description:
      "We offer a range of digital solutions, including but not limited to software development, web design, and IT consultancy. Specific services and deliverables will be outlined in individual project agreements.",
  },
  {
    title: "3. Project Engagement and Commitment Fee",
    description:
      "Upon mutual agreement of a project scope and deliverables, the client is required to pay a non-refundable commitment fee equal to 10% of the total project cost. This fee secures project scheduling and resource allocation. Work will commence only after receipt of this commitment fee.",
  },
  {
    title: "4. Payment Terms",
    description:
      "Payment schedules, including milestones and final payments, will be detailed in the project agreement. All payments are due as specified, and late payments may incur additional charges.",
  },
  {
    title: "5. Client Responsibilities",
    description: "As our client, you are responsible for:",
    points: [
      "Provide all necessary information and materials required for project execution in a timely manner.",
      "Ensure that all content provided does not infringe on any third-party rights.",
      "Respond promptly to communications and feedback requests.",
    ],
  },
  {
    title: "6. Intellectual Property",
    description:
      "Unless otherwise agreed, Genesisoft retains ownership of all intellectual property created prior to or independently of the project. Upon full payment, clients will receive rights to the final deliverables as specified in the project agreement.",
  },
  {
    title: "7. Confidentiality",
    description:
      "Both parties agree to maintain the confidentiality of proprietary information disclosed during the course of the project.",
  },
  {
    title: "8. Termination",
    description:
      "Either party may terminate the agreement with written notice if the other party breaches any material term of the agreement. In the event of termination, the client is responsible for payment of all work completed up to the termination date.",
  },
  {
    title: "9. Limitation of Liability",
    description:
      "Genesisoft shall not be liable for any indirect, incidental, or consequential damages arising out of or related to the services provided.",
  },
  {
    title: "10. Governing Law",
    description:
      "These Terms are governed by the laws of Zimbabwe. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.",
  },
  {
    title: "11. Changes to Terms",
    description:
      "Genesisoft reserves the right to modify these Terms at any time. Clients will be notified of significant changes, and continued use of our services constitutes acceptance of the revised Terms.",
  },
];

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Genesisoft</title>
        <meta
          name="description"
          content="Read Genesisoft's Terms of Service including project engagement, payment terms, and client responsibilities for our digital solutions services."
        />
        <link
          rel="canonical"
          href="https://www.genesisoft.co.zw/terms-of-service"
        />
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Terms of Service Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {termsContent[0].title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {termsContent[0].description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Effective Date: February 26, 2025
            </p>
          </header>

          {/* Dynamic Sections */}
          {termsContent.slice(1).map((section, index) => (
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
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.description}
              </p>
              
              {section.points && (
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-2 flex-shrink-0">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Privacy Policy Reference */}
          <section className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
            <p className="text-gray-600 dark:text-gray-300">
              For more information about how we handle personal data, please see our{" "}
              <a 
                href="/privacy-policy" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-200"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;