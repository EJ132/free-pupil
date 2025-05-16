"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, memo } from "react";
import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";
import { Button } from "@relume_io/relume-ui";
import { useIsMobile } from "@/hooks/useIsMobile";

import HomePageLayoutTreeSVG from "../../../public/svgs/Oak_Tree_Black.svg";
import HomePageLayoutSchoolSVG from "../../../public/svgs/School_Building_Black.svg";
import HomePageLayoutHeartSVG from "../../../public/svgs/Heart_Cross_Black.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  stat: string;
  statLabel: string;
};

type Props = {
  heading: string;
  subheading: string;
  cards: CardProps[];
};

export type ImpactSectionProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ImpactSection = memo(() => {
  const { heading, subheading, cards } = {
    ...ImpactSectionDefaults,
  } as Props;

  const ref = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth spring animation - disabled on mobile
  const springConfig = { damping: 15, stiffness: 100 };
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100]),
    springConfig
  );

  return (
    <section
      ref={ref}
      className="relative px-[5%] py-16 md:py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Gradient Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
          animate={
            isMobile
              ? {}
              : {
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }
          }
          transition={
            isMobile
              ? {}
              : {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
          }
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Creating
            </span>{" "}
            <span className="text-white">Lasting</span>{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Impact
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subheading}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="relative group h-full"
                whileHover={isMobile ? {} : { y: -10 }}
                transition={isMobile ? {} : { duration: 0.3 }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  animate={
                    isMobile
                      ? {}
                      : {
                          scale: [1, 1.1, 1],
                        }
                  }
                  transition={
                    isMobile
                      ? {}
                      : {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }
                  }
                />

                {/* Card Content */}
                <div
                  className={`relative ${
                    isMobile ? "bg-black/40" : "bg-black/30 backdrop-blur-md"
                  } border border-white/20 rounded-3xl p-8 h-full transform transition-transform duration-300 group-hover:border-white/30`}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                      <Image
                        src={card.icon.src}
                        alt={card.icon.alt || ""}
                        className="w-full h-full object-contain filter invert"
                        width={32}
                        height={32}
                      />
                    </div>
                  </motion.div>

                  {/* Stat Display */}
                  <motion.div
                    className="mb-6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      delay: index * 0.1 + 0.5,
                    }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {card.stat}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {card.statLabel}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {card.heading}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* CTA Link */}
                  <Button
                    variant="link"
                    size="link"
                    className="text-blue-400 hover:text-purple-400 transition-colors group/btn"
                    onClick={() =>
                      (window.location.href = "#give-lively-widget-section")
                    }
                  >
                    Learn More
                    <RxChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 rounded-full px-8 py-4"
            onClick={() =>
              (window.location.href = "#give-lively-widget-section")
            }
          >
            Make a Difference Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

ImpactSection.displayName = "ImpactSection";

export const ImpactSectionDefaults: ImpactSectionProps = {
  heading: "Creating Lasting Impact",
  subheading:
    "Through comprehensive programs and dedicated support, we're changing lives and building futures.",
  cards: [
    {
      icon: {
        src: HomePageLayoutSchoolSVG.src,
        alt: "Education icon",
      },
      heading: "Quality Education",
      description:
        "Providing access to excellent educational resources, experienced teachers, and modern learning facilities to ensure every child gets the foundation they deserve.",
      stat: "98%",
      statLabel: "Academic Success Rate",
    },
    {
      icon: {
        src: HomePageLayoutTreeSVG.src,
        alt: "Growth icon",
      },
      heading: "Personal Growth",
      description:
        "Nurturing individual talents through mentorship programs, life skills training, and character development initiatives that prepare youth for success.",
      stat: "2,500+",
      statLabel: "Active Mentorships",
    },
    {
      icon: {
        src: HomePageLayoutHeartSVG.src,
        alt: "Community icon",
      },
      heading: "Community Support",
      description:
        "Building strong support networks that provide health services, nutritional programs, and family engagement to ensure holistic development.",
      stat: "15,000+",
      statLabel: "Families Supported",
    },
  ],
};
