"use client";

import { motion } from "framer-motion";
import { FiLayout, FiCode, FiPenTool, FiSmartphone, FiMonitor, FiTarget } from "react-icons/fi";

import { SectionHeader } from "@/components/ui/SectionHeader";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful digital experiences that resonate with users.",
    icon: <FiLayout className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern technologies.",
    icon: <FiCode className="w-8 h-8" />,
    color: "bg-indigo-600",
  },
  {
    title: "Branding",
    description: "Developing unique brand identities that tell your story and stand out.",
    icon: <FiPenTool className="w-8 h-8" />,
    color: "bg-purple-600",
  },
  {
    title: "Mobile Solutions",
    description: "Crafting seamless mobile experiences for iOS and Android platforms.",
    icon: <FiSmartphone className="w-8 h-8" />,
    color: "bg-pink-600",
  },
  {
    title: "Digital Marketing",
    description: "Boosting your online presence through data-driven marketing strategies.",
    icon: <FiTarget className="w-8 h-8" />,
    color: "bg-amber-500",
  },
  {
    title: "SEO Optimization",
    description: "Improving your search engine rankings and driving organic traffic.",
    icon: <FiMonitor className="w-8 h-8" />,
    color: "bg-emerald-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Solutions Tailored to Your Success"
          subtitle="Our Expertise"
          description="We combine creativity and technology to deliver exceptional results that help your business grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm group cursor-pointer">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
