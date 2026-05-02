import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onSignInClick: () => void;
}

export function Navbar({ onSignInClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions", dropdown: true },
    { name: "Resources", href: "#resources", dropdown: true },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center transition-all duration-300 ${
        scrolled ? "bg-[#0B0B0F]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
      style={{
        background: scrolled 
          ? "linear-gradient(90deg, #0B0B0F 60%, rgba(255,115,0,0.15) 100%)" 
          : "transparent"
      }}
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-20"></div>
      
      <div className="container mx-auto px-10 flex items-center justify-between w-full relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-[#FF7A18] to-[#FFB347] rounded-xl flex items-center justify-center text-xl shadow-[0_0_20px_rgba(255,122,24,0.4)] text-white">
            ✦
          </div>
          <span className="text-[22px] font-bold text-white tracking-tight font-sora">
            Captions
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a 
                href={link.href} 
                className="text-[14px] font-medium text-[#CFCFCF] hover:text-white transition-all flex items-center gap-1.5"
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
              </a>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onSignInClick}
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            Sign in
          </button>
          <button 
            onClick={onSignInClick}
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-linear-to-br from-[#FF7A18] to-[#FFB347] shadow-[0_0_25px_rgba(255,122,24,0.3)] hover:scale-105 active:scale-95 transition-all text-white"
          >
            Get started free
          </button>
        </div>
      </div>
    </nav>
  );
}
