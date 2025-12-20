import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Palette,
  Smartphone,
  ArrowRight,
  MessageSquareText,
} from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";
import { Helmet } from "react-helmet-async";

export function Home() {
  const howWeWorkRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const container = howWeWorkRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const basePadding = 32; // base padding-top in px
      const extraPadding = 80; // additional padding as it becomes "pinned"
      const { top, bottom, height } = rect;

      // If the section is completely above or below the viewport, keep the
      // last active step and reset to base padding.
      if (bottom <= 0 || top >= viewportHeight) {
        container.style.paddingTop = `${basePadding}px`;
        container.setAttribute("data-pinned", "false");
        return;
      }

      // Compute progress only while the section is actually in view.
      const scrollRange = height + viewportHeight;
      const rawProgress = (viewportHeight - top) / scrollRange;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      const paddingTop = basePadding + extraPadding * progress;
      container.style.paddingTop = `${paddingTop}px`;
      container.setAttribute(
        "data-pinned",
        progress > 0.1 && progress < 0.95 ? "true" : "false"
      );

      // Map scroll progress to active step (01 → 04) so conversation + selection
      // change as the user scrolls through the section.
      const stepsCount = processSteps.length;
      if (stepsCount > 0) {
        const indexFromScroll = Math.min(
          stepsCount - 1,
          Math.max(0, Math.floor(progress * stepsCount))
        );

        setActiveStepIndex((prev) =>
          prev === indexFromScroll ? prev : indexFromScroll
        );
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        "Personalized Interactions",
        "Multi-platform Integration",
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
      features: ["Native Apps", "Cross-platform", "UI/UX Design"],
      slug: "mobile-apps",
    },

    {
      icon: <Palette className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Graphic Design",
      description:
        "Creative logos, branding, and marketing materials that elevate your business identity.",
      features: ["Brand Identity", "Print Design", "Digital Assets"],
      slug: "graphic-design",
    },

    // {
    //   icon: <Database className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    //   title: 'Database Design & Management',
    //   description: 'Secure, scalable database systems optimized for efficiency and growth.',
    //   features: ['Data Security', 'Performance Tuning', 'Backup Solutions']
    // },
  ];

  const processSteps = [
    {
      title: "Discovery & Initial Consultation",
      description:
        "We start by understanding your goals, challenges, and vision, gathering insights about your business, customers, and existing digital presence.",
      clientMessage:
        "We'd like to explore how digital solutions can help streamline our operations and customer experience.",
      replyMessage:
        "Great, let's schedule a consultation to understand your goals, current systems, and priorities so we can recommend the right solution mix.",
    },
    {
      title: "Tailored Digital Strategy",
      description:
        "Our team designs a clear, results-driven roadmap across web, mobile, and AI solutions, aligned with your budget, timeline, and growth targets.",
      clientMessage:
        "Once you understand our needs, what does the actual plan look like?",
      replyMessage:
        "We'll create a practical roadmap outlining recommended products, timelines, and investment, so you know exactly what we're building and why.",
    },
    {
      title: "Design, Build & Implementation",
      description:
        "We prototype, design, and develop your solution using modern technologies, keeping you involved through every sprint for transparency and agility.",
      clientMessage: "How involved will we be while everything is being built?",
      replyMessage:
        "You stay in the loop with regular check-ins, demos, and clear milestones while our team handles the heavy lifting.",
    },
    {
      title: "Launch & Continuous Support",
      description:
        "After launch, we monitor performance, refine features, and provide ongoing support to ensure your digital products keep delivering value.",
      clientMessage:
        "What happens after launch? We don't want things to just stop there.",
      replyMessage:
        "We stay with you post-launch, monitoring performance, refining features, and supporting new ideas as your business grows.",
    },
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>
          Genesisoft - Digital Solutions for Modern Businesses in Zimbabwe
        </title>
        <meta
          name="description"
          content="Zimbabwe's premier tech partner for web, mobile applications, and design excellence. Get innovative digital solutions tailored for your business needs."
        />
        <link rel="canonical" href="https://www.genesisoft.co.zw/" />
        // Add this right after your Helmet component in Home.tsx
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Genesisoft",
            url: "https://www.genesisoft.co.zw",
            logo: "https://www.genesisoft.co.zw/logo.svg",
            description:
              "Zimbabwe's premier tech partner for web, mobile, and design excellence",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Harare",
              addressCountry: "ZW",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@genesisoft.co.zw",
              contactType: "customer service",
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-16 transition-colors duration-300">
        {/* Hero Section */}
        <section
          id="home"
          className="relative pt-20 pb-32 hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300 grid-background"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center pt-2">
              {/* Left Content */}
              <div className="animate-on-scroll">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Trusted by innovative businesses
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
                  Digital Solutions for{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Modern Business
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                  Your powerful tech partner for web applications, mobile apps,
                  AI solutions, and design excellence
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="button-primary dark:bg-blue-700 dark:hover:bg-blue-600 inline-flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold
                         hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    Explore Services
                  </a>
                </div>

                {/* Additional Info */}
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  Free consultation • Harare, Zimbabwe
                </p>
              </div>

              {/* Right Visual */}
              <div className="relative hidden lg:block animate-on-scroll">
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-500/10 rounded-2xl transform rotate-3"></div>

                  {/* Main image */}
                  <img
                    fetchPriority="high"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    alt="Digital Innovation"
                    className="relative rounded-2xl shadow-2xl w-full object-cover h-[600px] transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 dark:bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 grid-background"
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
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group flex items-center transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section
          id="how-we-work"
          className="pt-8 pb-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 grid-background"
        >
          <div
            ref={howWeWorkRef}
            className="relative z-10 flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col gap-12 transition-[padding-top] duration-300 ease-[cubic-bezier(.165,.84,.44,1)] lg:gap-16 lg:min-h-screen"
          >
            <h2 className="section-heading dark:text-white animate-on-scroll transition-colors duration-300">
              How We Work
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
              From the first conversation to long-term support, we guide you
              through a clear, collaborative process designed to deliver
              reliable, high-impact digital solutions.
            </p>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Chat-style preview - hidden on mobile */}
              <div className="hidden lg:block space-y-6 animate-on-scroll">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Client • Genesisoft Conversation
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Client message */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                      C
                    </div>
                    <div className="max-w-md rounded-2xl bg-white dark:bg-gray-800 px-5 py-4 shadow-md">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        Client
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                        {processSteps[activeStepIndex].clientMessage}
                      </p>
                    </div>
                  </div>

                  {/* Genesisoft reply */}
                  <div className="flex justify-end">
                    <div className="flex items-start gap-3">
                      <div className="max-w-md rounded-2xl bg-gray-900 text-white px-5 py-4 shadow-xl">
                        <p className="text-sm font-semibold mb-1">Genesisoft</p>
                        <p className="text-sm text-gray-100 leading-relaxed">
                          {processSteps[activeStepIndex].replyMessage}
                        </p>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                        G
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical step list */}
              <div className="relative animate-on-scroll">
                <div className="absolute left-4 top-0 bottom-0 hidden lg:block border-l border-gray-200 dark:border-gray-700" />
                <div className="space-y-4">
                  {processSteps.map((step, index) => {
                    const isActive = index === activeStepIndex;
                    return (
                      <button
                        key={step.title}
                        type="button"
                        onClick={() => setActiveStepIndex(index)}
                        className={`relative w-full text-left rounded-xl px-6 py-5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isActive
                            ? "bg-white dark:bg-gray-800 shadow-md border border-blue-500/40"
                            : "bg-transparent hover:bg-white/40 dark:hover:bg-gray-800/40 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                              isActive
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white dark:bg-gray-900 text-blue-600 border-blue-300 dark:border-blue-500/60"
                            }`}
                          >
                            {`0${index + 1}`}
                          </div>
                          <div>
                            <h3
                              className={`text-base md:text-lg font-semibold mb-1 transition-colors duration-300 ${
                                isActive
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-gray-900 dark:text-white"
                              }`}
                            >
                              {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 grid-background"
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
          className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 grid-background"
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
