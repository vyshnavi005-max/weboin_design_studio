import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white border-t border-white/5 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight mb-6 block text-white">
              Design<span className="text-indigo-500">Agency</span>
            </Link>
            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              Crafting high-end digital experiences that define the future of technology and design.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Twitter">
                <FaTwitter className="w-5 h-5 text-indigo-400" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 text-indigo-400" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 text-indigo-400" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="GitHub">
                <FaGithub className="w-5 h-5 text-indigo-400" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-zinc-400 hover:text-indigo-400 transition-colors">UI/UX Design</Link></li>
              <li><Link href="#services" className="text-zinc-400 hover:text-indigo-400 transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="text-zinc-400 hover:text-indigo-400 transition-colors">Brand Strategy</Link></li>
              <li><Link href="#services" className="text-zinc-400 hover:text-indigo-400 transition-colors">Mobile Apps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="#portfolio" className="text-zinc-400 hover:text-indigo-400 transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="text-zinc-400 hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">Subscribe to get our latest design insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="email@example.com"
                suppressHydrationWarning
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-4 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                id="footer-newsletter"
              />
              <button suppressHydrationWarning className="absolute right-1 top-1 bottom-1 px-4 bg-indigo-600 rounded-full text-xs font-bold hover:bg-indigo-500 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} DesignAgency. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


