"use client";

import { useState, memo } from "react";
import { motion } from "framer-motion";
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
  const isMobile = useIsMobile();

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === stories.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? stories.length - 1 : prevIndex - 1;
      }
    });
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(59, 130, 246, 0.1) 35px,
            rgba(59, 130, 246, 0.1) 70px
          )`,
          }}
        />
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
          <div className={`${
            isMobile
              ? "bg-gray-900/80"
              : "bg-gray-900/50 backdrop-blur-sm"
          } border border-white/10 rounded-3xl p-4 sm:p-8 md:p-12`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-blue-500 mb-6" />

                  <p className="text-xl text-white/90 italic mb-6 leading-relaxed">
                    &ldquo;{currentStory.quote}&rdquo;
                  </p>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {currentStory.name}
                    </h3>
                    <p className="text-white/60">
                      Age {currentStory.age}
                    </p>
                  </div>

                  <p className="text-white/80 mb-6">
                    {currentStory.story}
                  </p>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-white/10">
                    <p className="text-sm text-white/60 mb-1">
                      Achievement
                    </p>
                    <p className="text-white font-semibold">
                      {currentStory.achievement}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="order-1 md:order-2">
                <motion.div
                  key={`image-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={currentStory.image}
                      alt={currentStory.name}
                      className="w-full h-auto object-cover"
                      width={600}
                      height={600}
                      loading="lazy"
                      quality={isMobile ? 75 : 90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl z-10 border-2 border-white"
                    animate={
                      isMobile
                        ? {}
                        : {
                            y: [0, -10, 0],
                          }
                    }
                    transition={
                      isMobile
                        ? {}
                        : {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }
                    }
                  >
                    Success Story #{currentIndex + 1}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className={`absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 ${
              isMobile ? "bg-white/20" : "bg-white/10 backdrop-blur-sm"
            } hover:bg-white/30 rounded-full p-2 md:p-3 transition-all duration-300 border border-white/20 z-10`}
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            className={`absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-12 ${
              isMobile ? "bg-white/20" : "bg-white/10 backdrop-blur-sm"
            } hover:bg-white/30 rounded-full p-2 md:p-3 transition-all duration-300 border border-white/20 z-10`}
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
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

SuccessStories.displayName = "SuccessStories";

export const SuccessStoriesDefaults: SuccessStoriesProps = {
  heading: "Stories That Inspire",
  subheading:
    "These are the stories we envision for every child. Your support can help make these dreams a reality.",
  stories: [
    {
      id: 1,
      name: "A Future Scientist",
      age: "17",
      story:
        "Imagine a young girl from a single-parent household who discovers her passion for science through our programs. With educational support and mentorship, she could pursue her dreams in STEM fields.",
      achievement:
        "Dreaming of college and a career in scientific research",
      image: HomePageLayout22Image.src,
      quote:
        "With your help, we can give children not just education, but hope and a future they never imagined possible.",
    },
    {
      id: 2,
      name: "Tomorrow's Leader",
      age: "19",
      story:
        "Picture a student who struggles with learning challenges finding support through specialized tutoring. With the right help, they could overcome obstacles and inspire others facing similar difficulties.",
      achievement:
        "Aspiring to help other children overcome their challenges",
      image: HomePageLayout22Image.src,
      quote:
        "Your support helps us see potential in every child and gives them the tools to find their own light.",
    },
    {
      id: 3,
      name: "Community Champion",
      age: "16",
      story:
        "Envision a teen who finds family in our support system during difficult times. With comprehensive care, they could develop into a strong community leader who gives back to others.",
      achievement: "Working to become a voice for youth in the community",
      image: HomePageLayout22Image.src,
      quote:
        "Together, we can become the family these children need and show them that circumstances don't define destiny.",
    },
  ],
};