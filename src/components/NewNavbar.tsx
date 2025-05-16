"use client";

import { useState, useEffect } from "react";
import { Button } from "@relume_io/relume-ui";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import FreePupilLogo from "../../public/svgs/FreePupilLogo.svg";

export const NewNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-[999] 
        transition-all duration-300
        ${isScrolled 
          ? "bg-black/95 backdrop-blur-lg border-b border-white/10" 
          : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="container mx-auto px-[5%]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={FreePupilLogo.src}
              alt="Free Pupil"
              className="h-10 w-10 invert"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-white">
              Free Pupil
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden lg:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#impact" className="text-white/80 hover:text-white transition-colors">
              Impact
            </a>
            <a href="#stories" className="text-white/80 hover:text-white transition-colors">
              Stories
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </motion.div>

          {/* Desktop CTA */}
          <motion.div 
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="secondary-alt"
              className="text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/10 rounded-full px-6 py-2"
              onClick={() => window.location.href = "#give-lively-widget-section"}
            >
              Get Involved
            </Button>
            <Button
              className="bg-white text-black hover:bg-white/90 border-0 rounded-full px-6 py-2"
              onClick={() => window.location.href = "#give-lively-widget-section"}
            >
              Donate
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="container mx-auto px-[5%] py-6">
              <div className="flex flex-col gap-4">
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#impact" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Impact
                </a>
                <a 
                  href="#stories" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Stories
                </a>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="secondary-alt"
                    className="text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/10 rounded-full px-6 py-3"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = "#give-lively-widget-section";
                    }}
                  >
                    Get Involved
                  </Button>
                  <Button
                    className="bg-white text-black hover:bg-white/90 border-0 rounded-full px-6 py-3"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = "#give-lively-widget-section";
                    }}
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};