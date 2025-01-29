"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import HomeImage1 from "../../../public/images/home/HomeImage1.png";
import Image from "next/image";
import { cx } from "class-variance-authority";

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

export type HomePageHeader5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HomePageHeader5 = () => {
  const { heading, description, buttons, image } = {
    ...HomePageHeader5Defaults,
  } as Props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <header ref={ref} className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl tracking-tighter"
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Supporting
              </span>{" "}
              <span className="text-white">our organization creates a</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                brighter future
              </span>{" "}
              <span className="text-white">for underprivileged youth.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-white/80 md:text-md"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 flex gap-x-4 md:mt-8"
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  className={cx(
                    "transition-all duration-300",
                    button.variant === "secondary-alt"
                      ? "text-white hover:text-blue-400 border-blue-400 transition-colors group"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-lg shadow-blue-500/20"
                  )}
                  onClick={() =>
                    (window.location.href = "#give-lively-widget-section")
                  }
                >
                  {button.title}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image.src}
          className="object-cover size-full rounded-xl shadow-[0_0_20px_0px_rgba(0,0,0,1)] shadow-gray-300"
          alt={image.alt || ""}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

export const HomePageHeader5Defaults: HomePageHeader5Props = {
  heading:
    "Supporting our organization creates a brighter future for underprivileged youth.",
  description:
    "By supporting us, you can make a real difference in the lives of underprivileged youth. Your contribution helps provide education, mentorship, and opportunities for a better future.",
  buttons: [
    { title: "Donate" },
    { title: "Get Involved", variant: "secondary-alt" },
  ],
  image: {
    src: HomeImage1.src,
    alt: "Underprivileged children receiving free education",
  },
};
