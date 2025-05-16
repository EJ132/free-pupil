"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform, useMotionValue, useVelocity, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { cx } from "class-variance-authority";

import HomeImage1 from "../../../public/images/home/HomeImage1.png";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type HeroHeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeader = () => {
  const { heading, description, buttons, image } = {
    ...HeroHeaderDefaults,
  } as Props;

  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for background image
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animation for smooth movement
  const springConfig = { damping: 25, stiffness: 700 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);
  
  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth) - 0.5;
      const y = (event.clientY / innerHeight) - 0.5;
      mouseX.set(x * 40);
      mouseY.set(y * 40);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <header ref={ref} className="relative h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Image
          src={image.src}
          className="object-cover w-full h-[120%]"
          alt={image.alt || ""}
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full blur-xl opacity-50"
        style={{ x: xSpring, y: ySpring }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-purple-500 rounded-full blur-xl opacity-50"
        style={{ x: xSpring, y: ySpring }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center px-[5%]"
        style={{ opacity }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[size:200%] animate-gradient-x"
              >
                Transforming Lives
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-white"
              >
                Through Education
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block text-white/90"
              >
                & Opportunity
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mb-8 text-lg md:text-xl text-white/80 max-w-2xl"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  className={cx(
                    "relative group transition-all duration-300 transform hover:scale-105",
                    button.variant === "secondary-alt"
                      ? "text-white border-white/20 hover:border-white/40 hover:bg-white/10"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40"
                  )}
                  onClick={() =>
                    (window.location.href = "#give-lively-widget-section")
                  }
                >
                  <span className="relative z-10">{button.title}</span>
                  {button.variant !== "secondary-alt" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"
                      initial={false}
                    />
                  )}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/80 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </header>
  );
};

export const HeroHeaderDefaults: HeroHeaderProps = {
  heading: "Transforming Lives Through Education & Opportunity",
  description:
    "Join us in creating a brighter future for underprivileged youth. Your support provides education, mentorship, and life-changing opportunities for children who need it most.",
  buttons: [
    { title: "Donate Now" },
    { title: "Get Involved", variant: "secondary-alt" },
  ],
  image: {
    src: HomeImage1.src,
    alt: "Children receiving education and support",
  },
};

// CSS animation for gradient
const style = `
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  animation: gradient-x 4s ease infinite;
}
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = style;
  document.head.appendChild(styleElement);
}