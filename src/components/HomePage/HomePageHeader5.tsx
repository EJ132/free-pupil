"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion } from "framer-motion";

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
  return (
    <header className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl tracking-tighter"
            >
              {heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-white/80 md:text-md"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 flex gap-x-4 md:mt-8"
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  className={cx(
                    button.variant === "secondary-alt" &&
                      "bg-transparent border-white text-white",
                    button.variant !== "secondary-alt" &&
                      "bg-green-700 border-green-700 text-white"
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
          className="object-cover size-full rounded-xl shadow-xxlarge shadow-gray-300"
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
