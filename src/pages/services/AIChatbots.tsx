import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquareText,
  Check,
  Calendar,
  ShoppingCart,
  DollarSign,
  Star,
  Home,
  Brain,
  CreditCard,
  Ticket,
  ShoppingBag,
  Users,
  Plane,
  Vote,
  AlertCircle,
  GraduationCap,
  UtensilsCrossed,
  ArrowRight,
  Clock,
  Zap,
  Shield,
} from "lucide-react";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet-async";

export function AIChatbots() {
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

  const chatbotTypes = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Bookings",
      description:
        "Automate scheduling for salons, clinics, or events. Let customers book, reschedule, and receive reminders automatically.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Sales & Order Processing",
      description:
        "Allow customers to browse products, place orders, and pay directly through WhatsApp with seamless integration.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Loan Management",
      description:
        "Handle loan applications, payment reminders, and customer support efficiently with automated workflows.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Customer Satisfaction Surveys",
      description:
        "Collect instant feedback from customers and generate comprehensive reports automatically.",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Property & Stands Inquiries",
      description:
        "Provide details on available properties, stands, and pricing with intelligent property search features.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Chat Support",
      description:
        "Answer complex queries with smart, human-like AI that learns from interactions and improves over time.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Council Utility Payments",
      description:
        "Water, electricity, and rates payment assistance with automated bill reminders and payment tracking.",
    },
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "Event Ticketing Bots",
      description:
        "Sell and manage tickets for events via WhatsApp with QR code generation and validation.",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-commerce Bots",
      description:
        "Complete online shopping and checkout in chat with product catalogs, cart management, and payment integration.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "HR & Recruitment Bots",
      description:
        "Automate job applications and candidate screening with intelligent filtering and scheduling.",
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Travel & Booking Bots",
      description:
        "Flight/hotel inquiries, reservations, and itinerary updates with real-time availability checking.",
    },
    {
      icon: <Vote className="w-6 h-6" />,
      title: "Voting & Polling Bots",
      description:
        "Run surveys, polls, and voting campaigns with secure authentication and real-time results.",
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Complaint Management Bots",
      description:
        "Capture and track service complaints automatically with priority routing and resolution tracking.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Educational Bots",
      description:
        "Class timetables, fee inquiries, and exam updates for schools, colleges, and training centers.",
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: "Restaurant Ordering Bots",
      description:
        "Table bookings and food ordering with menu browsing, customization, and delivery tracking.",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "24/7 Availability",
      description:
        "Your chatbot works round the clock, never missing a customer inquiry or opportunity.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Instant Responses",
      description:
        "Eliminate wait times with immediate automated responses to common queries.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Scalable Solution",
      description:
        "Handle unlimited conversations simultaneously without additional staff costs.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Solutions - WhatsApp Automation | Genesisoft</title>
        <meta
          name="description"
          content="Smart WhatsApp chatbots that work 24/7. Automate appointments, sales, customer support, and more with AI-powered conversational agents."
        />
        <link
          rel="canonical"
          href="https://www.genesisoft.co.zw/services/ai-chatbots"
        />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 transition-colors duration-300">
        {/* Hero Section */}
        <section className="py-20 hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                  <MessageSquareText className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    AI-Powered Automation
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                  AI Chatbot Solutions
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                  Tired of missing customer messages or manually handling
                  repetitive tasks? At Genesisoft, we build smart WhatsApp
                  chatbots that work for you 24/7.
                </p>
                <Link
                  to="/#contact"
                  className="button-primary dark:bg-blue-700 dark:hover:bg-blue-600 inline-flex items-center justify-center group"
                >
                  Get Your Chatbot
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative hidden lg:block animate-on-scroll">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-500/10 rounded-2xl transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    alt="AI Chatbot"
                    className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-xl animate-on-scroll transition-colors duration-300"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chatbot Types Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 grid-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                We Build Custom Chatbots For
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Choose from our extensive range of specialized chatbot solutions
                tailored to your industry needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chatbotTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md card-hover animate-on-scroll transition-colors duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Get your custom chatbot in four simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  description:
                    "We discuss your needs and business requirements",
                },
                {
                  step: "2",
                  title: "Design",
                  description:
                    "We create a custom chatbot flow tailored to your needs",
                },
                {
                  step: "3",
                  title: "Development",
                  description: "We build and integrate your intelligent chatbot",
                },
                {
                  step: "4",
                  title: "Launch & Support",
                  description:
                    "We deploy your bot and provide ongoing maintenance",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-on-scroll relative"
                >
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 -ml-4"></div>
                  )}
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
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's build a smart chatbot that transforms how you engage with
                customers
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


