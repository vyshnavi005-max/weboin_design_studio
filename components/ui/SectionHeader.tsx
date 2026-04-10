"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  description, 
  className = "",
  align = "center"
}) => {
  const alignmentClass = align === "center" ? "text-center" : "text-left";
  const marginClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-16 ${alignmentClass} ${className}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm inline-block mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed ${marginClass}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
