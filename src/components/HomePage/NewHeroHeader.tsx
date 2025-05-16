"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";
import Image from "next/image";
import { Play, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

import HomeImage1 from "../../../public/images/home/HomeImage1.png";

export const NewHeroHeader = memo(() => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  // Parallax effects - disable on mobile for performance
  const y = useTransform(scrollY, [0, 1000], isMobile ? [0, 0] : [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], isMobile ? [1, 1] : [1, 0]);
  const scale = useTransform(scrollY, [0, 400], isMobile ? [1, 1] : [1, 1.1]);
  
  // Mouse movement effect - disable on mobile
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  return (
    <header ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Layer */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <Image
          src={HomeImage1.src}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Animated Background Elements - static on mobile */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={isMobile ? {} : {
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={isMobile ? {} : {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={isMobile ? {} : {
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={isMobile ? {} : {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 container mx-auto px-[5%] text-center py-12 sm:py-16 md:py-20"
        style={{ opacity }}
      >
        <motion.div
          className={`max-w-4xl mx-auto ${isMobile ? 'bg-black/60' : 'bg-black/20 backdrop-blur-md'} p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 ${isMobile ? 'bg-white/20' : 'bg-white/10 backdrop-blur-md'} rounded-full text-xs sm:text-sm text-white mb-6 sm:mb-8 border border-white/30`}
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
            <span>Making a difference since 2001</span>
          </motion.div>

          {/* Main Heading with Split Animation */}
          <motion.h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold mb-6" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering
            </motion.span>
            <motion.span
              className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text font-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Underprivileged Youth
            </motion.span>
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Through Education
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Join us in transforming lives and creating brighter futures 
            for children who need it most.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              size="sm"
              className="bg-white text-black hover:bg-white/90 border-0 transform hover:scale-105 transition-all duration-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              onClick={() => window.location.href = "#give-lively-widget-section"}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Donate Now
            </Button>
            <Button
              size="sm"
              variant="secondary-alt"
              className={`text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 ${isMobile ? '' : 'backdrop-blur-sm'} transform hover:scale-105 transition-all duration-300 group rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base`}
              onClick={() => window.location.href = "#about"}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { number: "20+", label: "Years of Impact" },
              { number: "5000+", label: "Lives Changed" },
              { number: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - simpler animation on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
          animate={isMobile ? {} : { y: [0, 10, 0] }}
          transition={isMobile ? {} : { duration: 2, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={isMobile ? {} : { y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={isMobile ? {} : { duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </header>
  );
});