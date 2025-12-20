import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Palette,
  Smartphone,
  MessageSquareText,
  ArrowRight,
} from "lucide-react";
import { Footer } from "../components/Footer";
import { Helmet } from "react-helmet-async";

export function Services() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
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
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps",
      ],
      slug: "web-development",
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
        "WhatsApp Integration",
        "Appointment Booking",
        "Sales Automation",
        "Multi-platform Integration",
        "AI-Powered Responses",
      ],
      slug: "ai-chatbots",
    },
    {
      icon: (
        <Smartphone className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
      title: "Mobile Applications Development",
      description:
        "High-performance Android and iOS apps built for seamless user experiences.",
      features: [
        "Native iOS Apps",
        "Native Android Apps",
        "Cross-platform Development",
        "UI/UX Design",
        "App Store Deployment",
        "Maintenance & Support",
      ],
      slug: "mobile-apps",
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Graphic Design",
      description:
        "Creative logos, branding, and marketing materials that elevate your business identity.",
      features: [
        "Brand Identity Design",
        "Logo Design",
        "Print Design",
        "Digital Assets",
        "Marketing Materials",
        "Social Media Graphics",
      ],
      slug: "graphic-design",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Genesisoft Digital Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive range of digital services including web development, AI chatbots, mobile apps, and graphic design. Tailored solutions for your business needs."
        />
        <link rel="canonical" href="https://www.genesisoft.co.zw/services" />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 transition-colors duration-300">
        {/* Hero Section */}
        <section className="py-20 hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Comprehensive digital solutions designed to transform your
                business and drive growth in the digital age
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 grid-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover animate-on-scroll transition-colors duration-300"
                >
                  <div className="mb-6 transform transition-transform duration-300 hover:scale-110 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="mb-6 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-300"
                      >
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business
                and achieve your goals
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}


