import React, { useEffect } from "react";
import { Users, Award, Calendar, Globe, CheckCircle2 } from "lucide-react";
import { Footer } from "../components/Footer";

export function About() {
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

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      value: "1+",
      label: "Satisfied Clients",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      value: "2+",
      label: "Projects Completed",
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      value: "1.5+",
      label: "Years Experience",
    },
    // {
    //   icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    //   value: '10+',
    //   label: 'Countries Served'
    // }
  ];

  const achievements = [
    // 'Best Tech Startup Award 2023',
    // 'ISO 27001 Certified',
    // 'Microsoft Gold Partner',
    // 'Top 10 African Tech Companies 2024'
    "Coming Soon",
    "Coming Soon",
  ];

  const team = [
    {
      name: "Bruce Chigwa",
      role: "CEO & Co-Founder",
      image:
        "/bruce.jpg",
      bio: "Bruce leads our vision for digital innovation in Africa.",
      expertise: [
        "Full-stack Development",
        "Mobile Development",
        "Graphics Design",
        "Business Development",
      ],
    },
    {
      name: "Zvikomborero Chigudugudze",
      role: "CEO & Co-Founder",
      image: "/zviko.jpg",
      bio: "Zviko brings expertise in AI and Machine Learning development.",
      expertise: [
        "Machine Learning",
        "Full-stack Development",
        "AI Chatbots",
        "Team Leadership",
      ],
    },
    // {
    //   name: 'Grace Mutasa',
    //   role: 'Creative Director',
    //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   bio: 'Grace leads our design team with a passion for creating beautiful, user-centered digital experiences that drive results.',
    //   expertise: ['UI/UX Design', 'Brand Strategy', 'Creative Direction']
    // }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Founded in 2025, Genesisoft emerged from a vision to transform
              Zimbabwe's digital landscape. We believe in the power of
              technology to create positive change and drive economic growth
              across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll card-hover bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300"
              >
                <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-on-scroll transition-colors duration-300">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md animate-on-scroll transition-colors duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-medium transition-colors duration-300">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                At Genesisoft, we're committed to delivering innovative digital
                solutions that empower businesses and individuals across
                Zimbabwe and beyond. Our mission is to bridge the digital divide
                and create opportunities for growth through technology.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
                We believe in sustainable development, knowledge sharing, and
                building long-term partnerships that drive mutual success. Our
                team is dedicated to excellence, continuous learning, and making
                a positive impact in our community.
              </p>
            </div>
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700 rounded-xl transform -rotate-3 opacity-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Team Collaboration"
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-on-scroll transition-colors duration-300">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 card-hover transition-colors duration-300">
                  <div className="mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700 rounded-full transform rotate-3 opacity-10"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg relative z-10"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-4 text-center transition-colors duration-300">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                    {member.bio}
                  </p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
