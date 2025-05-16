"use client";

import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@relume_io/relume-ui";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";

import HomePageLayout22Image from "../../../public/images/home/HomePageLayout22Image2.png";

type StoryProps = {
  id: number;
  name: string;
  age: string;
  story: string;
  achievement: string;
  image: string;
  quote: string;
};

type Props = {
  heading: string;
  subheading: string;
  stories: StoryProps[];
};

export type SuccessStoriesProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const SuccessStories = memo(() => {
  const { heading, subheading, stories } = {
    ...SuccessStoriesDefaults,
  } as Props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isMobile = useIsMobile();

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === stories.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? stories.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(59, 130, 246, 0.1) 35px,
            rgba(59, 130, 246, 0.1) 70px
          )`
        }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Stories
            </span>{" "}
            <span className="text-white">That</span>{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Inspire
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: isMobile ? 100 : 300, damping: isMobile ? 20 : 30 },
                opacity: { duration: 0.3 }
              }}
              drag={isMobile ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                if (isMobile) return;
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full"
            >
              <div className={`${isMobile ? 'bg-gray-900/80' : 'bg-gray-900/50 backdrop-blur-sm'} border border-white/10 rounded-3xl p-4 sm:p-8 md:p-12`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-blue-500 mb-6" />
                      
                      <p className="text-xl text-white/90 italic mb-6 leading-relaxed">
                        &ldquo;{stories[currentIndex].quote}&rdquo;
                      </p>

                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {stories[currentIndex].name}
                        </h3>
                        <p className="text-white/60">
                          Age {stories[currentIndex].age}
                        </p>
                      </div>

                      <p className="text-white/80 mb-6">
                        {stories[currentIndex].story}
                      </p>

                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-white/10">
                        <p className="text-sm text-white/60 mb-1">Achievement</p>
                        <p className="text-white font-semibold">
                          {stories[currentIndex].achievement}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="order-1 md:order-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative"
                    >
                      <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          src={stories[currentIndex].image}
                          alt={stories[currentIndex].name}
                          className="w-full h-auto object-cover"
                          width={600}
                          height={600}
                          loading="lazy"
                          quality={isMobile ? 75 : 90}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      
                      {/* Floating Badge - no animation on mobile */}
                      <motion.div
                        className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl z-10 border-2 border-white"
                        animate={isMobile ? {} : {
                          y: [0, -10, 0],
                        }}
                        transition={isMobile ? {} : {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        Success Story #{currentIndex + 1}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className={`absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 ${isMobile ? 'bg-white/20' : 'bg-white/10 backdrop-blur-sm'} hover:bg-white/30 rounded-full p-2 md:p-3 transition-all duration-300 border border-white/20 z-10`}
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            className={`absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-12 ${isMobile ? 'bg-white/20' : 'bg-white/10 backdrop-blur-sm'} hover:bg-white/30 rounded-full p-2 md:p-3 transition-all duration-300 border border-white/20 z-10`}
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-white/30"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export const SuccessStoriesDefaults: SuccessStoriesProps = {
  heading: "Stories That Inspire",
  subheading: "Real stories of transformation and hope from the children whose lives we've touched.",
  stories: [
    {
      id: 1,
      name: "Sarah Martinez",
      age: "17",
      story: "Coming from a single-parent household with limited resources, Sarah joined Free Pupil at age 10. Through our educational support and mentorship program, she discovered her passion for science.",
      achievement: "Full scholarship to Stanford University, pursuing Biomedical Engineering",
      image: HomePageLayout22Image.src,
      quote: "Free Pupil didn't just give me education; they gave me hope and a future I never dreamed possible."
    },
    {
      id: 2,
      name: "Michael Chen",
      age: "19",
      story: "Michael struggled with reading difficulties and low self-esteem when he joined our program. With specialized tutoring and unwavering support, he not only overcame his challenges but excelled.",
      achievement: "Published author and motivational speaker, helping other children with learning disabilities",
      image: HomePageLayout22Image.src,
      quote: "They saw potential in me when I couldn't see it in myself. Now I help others find their own light."
    },
    {
      id: 3,
      name: "Amira Johnson",
      age: "16",
      story: "Amira joined Free Pupil after losing both parents. Our comprehensive support system provided not just education but emotional support and life skills training that helped her thrive.",
      achievement: "National debate champion and community youth leader",
      image: HomePageLayout22Image.src,
      quote: "Free Pupil became my family when I needed one most. They taught me that circumstances don't define destiny."
    }
  ]
};