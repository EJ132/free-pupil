"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import HomePageLayout6Image from "../../../public/images/home/HomePageLayout6Image2.png";

type ImageProps = {
  src: string;
  alt?: string;
};

type StatProps = {
  number: string;
  label: string;
};

type Props = {
  heading: string;
  description: string;
  stats: StatProps[];
  image: ImageProps;
};

export type AboutSectionProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AboutSection = () => {
  const { heading, description, stats, image } = {
    ...AboutSectionDefaults,
  } as Props;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative px-[5%] py-16 md:py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="container relative z-10"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-black/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Every Child
              </span>{" "}
              <span className="text-white">
                Deserves a Chance to
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Shine
              </span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg text-white/80"
            >
              {description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-2 sm:p-4 border border-white/10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    <CountUp end={parseInt(stat.number)} duration={2} />
                    {stat.number.includes('+') && '+'}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1 sm:mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            style={{ y, scale }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt || ""}
                className="w-full object-cover"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
            
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">97%</div>
              <div className="text-xs sm:text-sm text-white/70">Success Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// CountUp Component
const CountUp = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
    };
  }, [end, duration]);
  
  return <span ref={ref}>{count}</span>;
};

import { useState, useEffect } from "react";

export const AboutSectionDefaults: AboutSectionProps = {
  heading: "Every Child Deserves a Chance to Shine",
  description:
    "For over two decades, Free Pupil has been a beacon of hope for underprivileged youth. We believe that every child, regardless of their circumstances, deserves access to quality education and the opportunity to reach their full potential.",
  stats: [
    { number: "5000+", label: "Lives Changed" },
    { number: "95+", label: "Graduation Rate" },
    { number: "20+", label: "Years of Impact" },
  ],
  image: {
    src: HomePageLayout6Image.src,
    alt: "Children learning and growing together",
  },
};