"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

interface Project {
  title: string;
  category: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Eco-Friendly Platform",
    category: "Branding / UI Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tags: ["UI/UX", "Eco", "React"],
  },
  {
    title: "Financial Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Fintech", "Dashboard", "Next.js"],
  },
  {
    title: "Luxury Watch Store",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    tags: ["Shopify", "Luxury", "Design"],
  },
  {
    title: "Modern Architecture Portfolio",
    category: "Digital Experience",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    tags: ["Minimalist", "Portfolio", "3D"],
  },
  {
    title: "Wellness App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    tags: ["Health", "Mobile", "App"],
  },
  {
    title: "SaaS Analytics Tool",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    tags: ["SaaS", "Big Data", "UI"],
  },
];


const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader 
            align="left"
            title="Showcasing Our Digital Craftsmanship"
            subtitle="Selected Work"
            className="mb-0" // remove bottom margin since flex handles it here
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button className="!bg-zinc-900 !text-white dark:!bg-white dark:!text-zinc-950 hover:!bg-zinc-800 dark:hover:!bg-zinc-200 !border-none !shadow-none">
              View All Projects
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent flex items-end p-8"
                >
                  <div className="text-white">
                    <div className="flex gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

