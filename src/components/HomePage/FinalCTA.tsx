"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@relume_io/relume-ui";
import { Heart, ArrowRight } from "lucide-react";

type Props = {
  heading: string;
  subheading: string;
  description: string;
};

export type FinalCTAProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FinalCTA = () => {
  const { heading, subheading, description } = {
    ...FinalCTADefaults,
  } as Props;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section
      ref={ref}
      className="relative px-[5%] py-16 sm:py-24 md:py-32 lg:py-40 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="container relative z-10"
        style={{ scale, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Hearts Animation */}
          <motion.div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: Math.random() * 100 - 50,
                  y: 100,
                  opacity: 0,
                }}
                animate={{
                  y: -100,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut",
                }}
                style={{
                  left: `${20 + i * 12}%`,
                }}
              >
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-[size:200%] animate-gradient-x">
                Be the Change
              </span>
            </motion.h2>

            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subheading}
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {description}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: "$50", label: "Provides school supplies" },
                { number: "$100", label: "Funds tutoring sessions" },
                { number: "$500", label: "Sponsors a child's education" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1 sm:mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                  onClick={() => window.location.href = "#give-lively-widget-section"}
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse" />
                  Donate Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="sm"
                  variant="secondary-alt"
                  className="text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                  onClick={() => window.location.href = "#give-lively-widget-section"}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-base sm:text-lg text-white/90 italic mb-3 sm:mb-4">
              &ldquo;Every dollar donated to Free Pupil goes directly toward changing a child&apos;s life. We maintain a 95% program expense ratio, ensuring your generosity creates maximum impact.&rdquo;
            </p>
            <p className="text-white/70">- Gabriel Gonzalez, Founder</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export const FinalCTADefaults: FinalCTAProps = {
  heading: "Be the Change",
  subheading: "They Need Today",
  description: "Your support can transform a child's future. Every contribution, no matter the size, makes a profound difference in the lives of underprivileged youth.",
};