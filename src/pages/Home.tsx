import React, { useEffect } from "react";
import {
  Code2,
  Palette,
  Smartphone,
  Database,
  Lightbulb,
  Star,
  Shield,
  TrendingUp,
  ArrowRight,
  MessageSquareText,
} from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";
import { Helmet } from "react-helmet-async";

export function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Web Applications Development",
      description:
        "Custom websites and scalable web-based systems tailored to client needs.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Focused",
      ],
    },

    {
      icon: (
        <MessageSquareText className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
      title: "AI Chatbot Solutions",
      description:
        "Intelligent conversational agents that enhance customer engagement and streamline operations.",
      features: [
        "24/7 Customer Support",
        "Personalized Interactions",
        "Multi-platform Integration",
      ],
    },

    {
      icon: (
        <Smartphone className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
      title: "Mobile Applications Development",
      description:
        "High-performance Android and iOS apps built for seamless user experiences.",
      features: ["Native Apps", "Cross-platform", "UI/UX Design"],
    },

    {
      icon: <Palette className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Graphic Design",
      description:
        "Creative logos, branding, and marketing materials that elevate your business identity.",
      features: ["Brand Identity", "Print Design", "Digital Assets"],
    },

    // {
    //   icon: <Database className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    //   title: 'Database Design & Management',
    //   description: 'Secure, scalable database systems optimized for efficiency and growth.',
    //   features: ['Data Security', 'Performance Tuning', 'Backup Solutions']
    // },
  ];

  const values = [
    {
      icon: (
        <Lightbulb className="w-10 h-10 text-orange-500 dark:text-orange-400" />
      ),
      title: "Innovation",
      description: "Embracing creativity and cutting-edge solutions.",
    },
    {
      icon: <Star className="w-10 h-10 text-orange-500 dark:text-orange-400" />,
      title: "Excellence",
      description: "Delivering unmatched quality and exceeding expectations.",
    },
    {
      icon: (
        <Shield className="w-10 h-10 text-orange-500 dark:text-orange-400" />
      ),
      title: "Integrity",
      description:
        "Operating with honesty and transparency in all interactions.",
    },
    {
      icon: (
        <TrendingUp className="w-10 h-10 text-orange-500 dark:text-orange-400" />
      ),
      title: "Growth",
      description: "Committed to continuous learning and improvement.",
    },
  ];

  return (
    <>
           <Helmet>
        <title>Genesisoft - Digital Solutions for Modern Businesses in Zimbabwe</title>
        <meta
          name="description"
          content="Zimbabwe's premier tech partner for web, mobile applications, and design excellence. Get innovative digital solutions tailored for your business needs."
        />
        
        <link rel="canonical" href="https://www.genesisoft.co.zw/" />
                // Add this right after your Helmet component in Home.tsx
        <script type="application/ld+json">
        {
            JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Genesisoft",
              "url": "https://www.genesisoft.co.zw",
              "logo": "https://www.genesisoft.co.zw/logo.svg",
              "description": "Zimbabwe's premier tech partner for web, mobile, and design excellence",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Harare",
                "addressCountry": "ZW"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@genesisoft.co.zw",
                "contactType": "customer service"
              }}
            )}
        </script>
      </Helmet>
      <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-16 transition-colors duration-300">
        {/* Hero Section */}
        <section
          id="home"
          className="pt-20 pb-32 hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center pt-20 animate-on-scroll">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
                Digital Solutions for Modern Business
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                Zimbabwe's premier tech partner for web, mobile, and design
                excellence
              </p>
              <div className="mt-8 space-x-4 ">
                <a
                  href="#contact"
                  className="button-primary dark:bg-blue-700 dark:hover:bg-blue-600 inline-flex items-center my-2"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 font-semibold
                         hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="mt-16 animate-on-scroll">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700 rounded-xl transform rotate-1 opacity-10"></div>
                <img
                  fetchPriority="high"
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  alt="Digital Innovation"
                  className="rounded-xl shadow-2xl w-full object-cover h-[500px] relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading dark:text-white animate-on-scroll transition-colors duration-300">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover animate-on-scroll transition-colors duration-300"
                >
                  <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="mb-4 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group flex items-center transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          id="values"
          className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading dark:text-white animate-on-scroll transition-colors duration-300">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md card-hover animate-on-scroll transition-colors duration-300"
                >
                  <div className="mb-4 flex justify-center transform transition-transform duration-300 hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 dark:text-white transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading dark:text-white animate-on-scroll transition-colors duration-300">
              Get in Touch
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 animate-on-scroll transition-colors duration-300">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
                Join Our Newsletter
              </h2>
              <Newsletter />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
