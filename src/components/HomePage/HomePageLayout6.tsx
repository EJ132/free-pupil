"use client";

import { motion, LazyMotion, domAnimation, m } from "framer-motion";

import HomePageLayout6Image from "../../../public/images/home/HomePageLayout6Image2.png";

type ImageProps = {
  src: string;
  alt?: string;
};

type SubHeadingProps = {
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  subHeadings: SubHeadingProps[];
  image: ImageProps;
};

export type HomePageLayout6Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HomePageLayout6 = () => {
  const { description, image, subHeadings } = {
    ...HomePageLayout6Defaults,
  } as Props;

  return (
    <LazyMotion features={domAnimation}>
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-gray-950 via-black to-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <m.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white"
              >
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Supporting
                </span>{" "}
                our organization creates a{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  brighter future
                </span>{" "}
                for{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  underprivileged youth.
                </span>
              </m.h2>
              <m.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6 md:mb-8 md:text-md text-white/80"
              >
                {description}
              </m.p>
              <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2">
                {subHeadings.map((subHeading, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                  >
                    <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {subHeading.title}
                    </h6>
                    <p className="text-white/80">{subHeading.description}</p>
                  </m.div>
                ))}
              </div>
            </div>
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={image.src}
                className="w-full object-cover shadow-[0_0_30px_0px_rgba(59,130,246,0.2)] rounded-xl"
                alt={image.alt || ""}
                width={2000}
                height={2000}
              />
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export const HomePageLayout6Defaults: HomePageLayout6Props = {
  tagline: "Tagline",
  heading:
    "Supporting our organization creates a brighter future for underprivileged youth.",
  description:
    "By supporting us, you can make a real difference in the lives of underprivileged youth. Your contribution helps provide education, mentorship, and opportunities for a better future.",
  subHeadings: [
    {
      title: "Education",
      description:
        "Access to quality education is crucial in breaking the cycle of poverty.",
    },
    {
      title: "Empowerment",
      description:
        "Your support empowers underprivileged youth to overcome obstacles and achieve their dreams.",
    },
  ],
  image: {
    src: HomePageLayout6Image.src,
    alt: "Supporting our organization creates a brighter future for underprivileged youth.",
  },
};
