"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-24 bg-white dark:bg-[#030303] text-zinc-900 dark:text-white px-4 relative overflow-hidden transition-colors duration-300"
    >
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -30, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"
        ></motion.div>

        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <div className="flex flex-col items-center gap-6">

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] max-w-5xl mx-auto"
          >
            We Design Digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Experiences That Inspire
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Leading design agency specializing in modern UI/UX, branding, and professional digital solutions for ambitious brands.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" href="#contact" className="gap-2">
              Get Started
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            <Button variant="secondary" href="#portfolio">
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
