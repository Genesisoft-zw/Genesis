import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  Sparkles,
  Image,
  FileText,
  Package,
  Monitor,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet-async";

export function GraphicDesign() {
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
      icon: <Sparkles className="w-6 h-6" />,
      title: "Brand Identity Design",
      description:
        "Complete brand identity packages including logo design, color palette, typography, and brand guidelines.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Logo Design",
      description:
        "Unique, memorable logos that perfectly represent your brand and stand out from the competition.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Print Design",
      description:
        "Business cards, brochures, flyers, posters, and other print materials designed for impact.",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Digital Assets",
      description:
        "Social media graphics, email templates, web banners, and digital marketing materials.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Packaging Design",
      description:
        "Eye-catching product packaging that attracts customers and communicates your brand values.",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Marketing Materials",
      description:
        "Complete marketing collateral including presentations, infographics, and promotional materials.",
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Creative Excellence",
      description:
        "Fresh, innovative designs that capture attention and communicate effectively.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Brand Consistency",
      description:
        "Cohesive designs that strengthen your brand identity across all touchpoints.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Professional Quality",
      description:
        "High-resolution, print-ready files that meet industry standards.",
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Timely Delivery",
      description:
        "Fast turnaround times without compromising on quality or creativity.",
    },
  ];

  const designTypes = [
    "Logo Design",
    "Business Cards",
    "Brochures & Flyers",
    "Social Media Graphics",
    "Posters & Banners",
    "Product Packaging",
    "Infographics",
    "Presentations",
    "Email Templates",
    "T-shirt Designs",
    "Menu Designs",
    "Certificates",
  ];

  return (
    <>
      <Helmet>
        <title>Graphic Design Services - Branding & Marketing | Genesisoft</title>
        <meta
          name="description"
          content="Professional graphic design services including logo design, branding, print materials, and digital assets. Creative solutions that elevate your business identity."
        />
        <link
          rel="canonical"
          href="https://www.genesisoft.co.zw/services/graphic-design"
        />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 transition-colors duration-300">
        {/* Hero Section */}
        <section className="py-20 hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                  <Palette className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Creative Design Solutions
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                  Graphic Design Services
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                  Creative logos, branding, and marketing materials that elevate
                  your business identity. We design visual experiences that
                  captivate your audience and drive results.
                </p>
                <Link
                  to="/#contact"
                  className="button-primary dark:bg-blue-700 dark:hover:bg-blue-600 inline-flex items-center justify-center group"
                >
                  Start Your Design
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative hidden lg:block animate-on-scroll">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-500/10 rounded-2xl transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    alt="Graphic Design"
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
                Our Graphic Design Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Comprehensive design solutions to enhance your brand presence
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

        {/* Design Types Section */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                What We Design
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
                A wide range of design services for all your needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-on-scroll">
              {designTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg text-center font-semibold text-gray-900 dark:text-white transition-colors duration-300 hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Our Design Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
                From concept to final delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description: "Understanding your brand, goals, and target audience",
                },
                {
                  step: "2",
                  title: "Concept",
                  description: "Creating initial design concepts and mood boards",
                },
                {
                  step: "3",
                  title: "Refinement",
                  description: "Perfecting the design based on your feedback",
                },
                {
                  step: "4",
                  title: "Delivery",
                  description:
                    "Providing final files in all required formats",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-on-scroll relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 -ml-4 opacity-30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's create stunning designs that make your business stand out
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


