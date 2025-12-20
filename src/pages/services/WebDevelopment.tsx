import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Globe,
  Search,
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  FileText,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet-async";

export function WebDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);

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
      icon: <Globe className="w-6 h-6" />,
      title: "Custom Website Development",
      description:
        "Bespoke websites built from scratch to match your unique business requirements and brand identity.",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-commerce Solutions",
      description:
        "Full-featured online stores with secure payment integration, inventory management, and order tracking.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Management Systems",
      description:
        "Easy-to-use CMS platforms that let you update your website content without technical knowledge.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Web Applications",
      description:
        "Complex web-based systems including booking platforms, dashboards, and business management tools.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Progressive Web Apps",
      description:
        "App-like experiences that work offline and can be installed on any device directly from the browser.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Website Maintenance",
      description:
        "Ongoing support, security updates, and performance optimization to keep your site running smoothly.",
    },
  ];

  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Responsive Design",
      description:
        "Websites that look perfect on all devices - desktop, tablet, and mobile.",
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "SEO Optimized",
      description:
        "Built-in SEO best practices to help your website rank higher in search results.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Fast Performance",
      description:
        "Lightning-fast loading times with optimized code and modern technologies.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Secure & Reliable",
      description:
        "Industry-standard security measures and regular backups to protect your data.",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "WordPress",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services - Custom Websites | Genesisoft</title>
        <meta
          name="description"
          content="Professional web development services including custom websites, e-commerce solutions, and web applications. Responsive, SEO-optimized, and performance-focused."
        />
        <link
          rel="canonical"
          href="https://www.genesisoft.co.zw/services/web-development"
        />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 transition-colors duration-300">
        {/* Hero Section */}
        <section className="py-20 hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                  <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Professional Web Solutions
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                  Web Applications Development
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                  Transform your online presence with custom websites and
                  scalable web-based systems tailored to your business needs. We
                  build fast, secure, and beautiful web solutions that drive
                  results.
                </p>
                <Link
                  to="/#contact"
                  className="button-primary dark:bg-blue-700 dark:hover:bg-blue-600 inline-flex items-center justify-center group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative hidden lg:block animate-on-scroll">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-500/10 rounded-2xl transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    alt="Web Development"
                    className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-xl animate-on-scroll transition-colors duration-300"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 grid-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Our Web Development Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Comprehensive web solutions designed to meet your business
                objectives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md card-hover animate-on-scroll transition-colors duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Modern, reliable technologies for robust web solutions
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full font-semibold transition-colors duration-300 hover:bg-blue-200 dark:hover:bg-gray-700"
                >
                  {tech}
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
                Ready to Build Your Website?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's create a powerful web presence that drives your business
                forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}


