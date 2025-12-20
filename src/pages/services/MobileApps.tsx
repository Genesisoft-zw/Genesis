import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Apple,
  Zap,
  Users,
  Bell,
  Lock,
  Palette,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet-async";

export function MobileApps() {
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
      icon: <Smartphone className="w-6 h-6" />,
      title: "Native Android Apps",
      description:
        "High-performance Android applications built with Kotlin and Java, optimized for the Google Play Store.",
    },
    {
      icon: <Apple className="w-6 h-6" />,
      title: "Native iOS Apps",
      description:
        "Elegant iOS applications developed with Swift, designed to meet Apple's strict guidelines.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Cross-Platform Development",
      description:
        "Build once, deploy everywhere with React Native and Flutter for cost-effective solutions.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description:
        "Intuitive and beautiful interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Push Notifications",
      description:
        "Keep users engaged with timely notifications and in-app messaging systems.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "App Store Deployment",
      description:
        "Complete submission and optimization for both Google Play Store and Apple App Store.",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "High Performance",
      description:
        "Optimized code for smooth, responsive apps that users love.",
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Secure by Design",
      description:
        "Built-in security features to protect user data and transactions.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "User-Centric",
      description:
        "Designed with your target audience in mind for maximum engagement.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Ongoing Support",
      description:
        "Regular updates and maintenance to keep your app running smoothly.",
    },
  ];

  const appTypes = [
    "E-commerce Apps",
    "Social Networking Apps",
    "Business Management Apps",
    "Healthcare Apps",
    "Education & E-learning Apps",
    "Food Delivery Apps",
    "Fitness & Wellness Apps",
    "Travel & Booking Apps",
    "Finance & Banking Apps",
    "Entertainment Apps",
  ];

  return (
    <>
      <Helmet>
        <title>Mobile App Development - iOS & Android | Genesisoft</title>
        <meta
          name="description"
          content="Professional mobile app development for iOS and Android. Native and cross-platform apps with beautiful UI/UX and seamless performance."
        />
        <link
          rel="canonical"
          href="https://www.genesisoft.co.zw/services/mobile-apps"
        />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 transition-colors duration-300">
        {/* Hero Section */}
        <section className="py-20 hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                  <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    iOS & Android Excellence
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                  Mobile Applications Development
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                  High-performance Android and iOS apps built for seamless user
                  experiences. We create mobile solutions that your customers
                  will love and use every day.
                </p>
                <Link
                  to="/#contact"
                  className="button-primary dark:bg-blue-700 dark:hover:bg-blue-600 inline-flex items-center justify-center group"
                >
                  Start Your App
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative hidden lg:block animate-on-scroll">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-500/10 rounded-2xl transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    alt="Mobile App Development"
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
                Our Mobile Development Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Comprehensive mobile solutions for every platform and use case
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

        {/* App Types Section */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Types of Apps We Build
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
                From concept to launch, we build apps for every industry
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-on-scroll">
              {appTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg text-center font-semibold text-gray-900 dark:text-white transition-colors duration-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                >
                  {type}
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
                Ready to Launch Your Mobile App?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's turn your app idea into reality with a solution that
                delights users
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


