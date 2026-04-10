"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950 overflow-hidden relative transition-colors duration-300">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-600/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              align="left"
              title="Let's Build Something Extraordinary Together."
              subtitle="Get in Touch"
              description="Ready to start your next digital project? Our team is here to help you turn your vision into reality."
            />

            <div className="mt-8 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-white/10">
                  <FiMail className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-medium">Email Us</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white">hello@designagency.com</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-white/10">
                  <FiPhone className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-medium">Call Us</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white">+1 (555) 000-0000</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-white/10">
                  <FiMapPin className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-medium">Visit Us</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white">123 Design St, Creative Valley, CA</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 flex gap-4">
              {[FiTwitter, FiInstagram, FiLinkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-900 dark:text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-50 dark:bg-white/5 backdrop-blur-md border border-zinc-200 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Full Name</label>
                  <input 
                    id="fullName"
                    name="fullName"
                    type="text" 
                    placeholder="John Doe"
                    suppressHydrationWarning
                    className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-400 text-zinc-900 dark:text-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="emailAddress" className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Email Address</label>
                  <input 
                    id="emailAddress"
                    name="emailAddress"
                    type="email" 
                    placeholder="john@example.com"
                    suppressHydrationWarning
                    className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-400 text-zinc-900 dark:text-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Subject</label>
                <input 
                  id="subject"
                  name="subject"
                  type="text" 
                  placeholder="How can we help?"
                  suppressHydrationWarning
                  className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-400 text-zinc-900 dark:text-white transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  suppressHydrationWarning
                  className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-400 text-zinc-900 dark:text-white transition-colors resize-none"
                ></textarea>
              </div>
              <Button className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
