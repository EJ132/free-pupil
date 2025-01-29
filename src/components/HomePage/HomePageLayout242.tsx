"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";
import { motion, LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";

import HomePageLayoutTreeSVG from "../../../public/svgs/Oak_Tree_Black.svg";
import HomePageLayoutSchoolSVG from "../../../public/svgs/School_Building_Black.svg";
import HomePageLayoutHeartSVG from "../../../public/svgs/Heart_Cross_Black.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  sections: SectionProps[];
};

export type HomePageLayout242Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HomePageLayout242 = () => {
  const { sections = [] } = { ...HomePageLayout242Defaults };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-tl from-gray-950 via-black to-gray-900"
      >
        <div className="container flex flex-col items-start">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="mb-12 w-full max-w-3xl md:mb-18 lg:mb-20">
              <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl tracking-tighter">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Providing
                </span>{" "}
                <span className="text-white">Educational</span>{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Scholarships
                </span>{" "}
                <span className="text-white">and</span>{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Mentorship Programs
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10 shadow-[0_0_30px_0px_rgba(59,130,246,0.1)]"
                >
                  <div className="mb-5 md:mb-6">
                    <Image
                      src={section.icon.src}
                      className="size-12 invert opacity-80"
                      alt={section.icon.alt || ""}
                      width={12}
                      height={12}
                    />
                  </div>
                  <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {section.heading}
                  </h3>
                  <p className="mb-5 md:mb-6 text-white/80">
                    {section.description}
                  </p>
                  <div className="mt-6 flex items-center gap-4 md:mt-8">
                    <Button
                      variant={section.button.variant}
                      size={section.button.size}
                      iconRight={section.button.iconRight}
                      iconLeft={section.button.iconLeft}
                      onClick={() =>
                        (window.location.href = "#give-lively-widget-section")
                      }
                      className="text-blue-400 hover:text-purple-400 transition-colors group"
                    >
                      {section.button.title}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export const HomePageLayout242Defaults: HomePageLayout242Props = {
  heading: "Providing Educational Scholarships and Mentorship Programs",
  sections: [
    {
      icon: {
        src: HomePageLayoutTreeSVG.src,
        alt: "Tree icon",
      },
      heading: "Empowering Youth through Sports and Recreation",
      description:
        "Our organization offers many programs and initiatives aimed at supporting underprivileged youth, including mentorship, and sports and recreation centers. ",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    },
    {
      icon: {
        src: HomePageLayoutSchoolSVG.src,
        alt: "School icon",
      },
      heading: "Promoting Arts and Cultural Enrichment for Youth",
      description:
        "We believe in the power of arts and culture to inspire and uplift young minds. Our organization provides opportunities for underprivileged youth to engage in various artistic and cultural activities.",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    },
    {
      icon: {
        src: HomePageLayoutHeartSVG.src,
        alt: "Heart icon",
      },
      heading: "Supporting Health and Wellness Initiatives for Youth",
      description:
        "We prioritize the health and well-being of underprivileged youth. Through our programs, we promote physical fitness, mental wellness, and access to healthcare services.",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    },
  ],
};
