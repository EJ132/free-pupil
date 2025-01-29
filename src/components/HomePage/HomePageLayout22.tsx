"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";

import HomePageLayout22Image from "../../../public/images/home/HomePageLayout22Image2.png";
import HomePageLayoutABC_Block_Black from "../../../public/svgs/ABC_Block_Black.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type HomePageLayout22Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HomePageLayout22 = () => {
  const { icon, heading, description, buttons, image } = {
    ...HomePageLayout22Defaults,
  } as Props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-gray-950 via-black to-gray-900"
      >
        <div className="container">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <div className="mb-5 md:mb-6">
                  <Image
                    src={icon.src}
                    className="size-20 invert opacity-80"
                    alt={icon.alt || ""}
                    width={12}
                    height={12}
                  />
                </div>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl tracking-tighter">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Empowering
                  </span>{" "}
                  <span className="text-white">
                    Underprivileged Youth Through
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Education
                  </span>{" "}
                  <span className="text-white">and</span>{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Opportunity
                  </span>
                </h2>
                <p className="md:text-md text-white/80">{description}</p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      {...button}
                      onClick={() =>
                        (window.location.href = "#give-lively-widget-section")
                      }
                      className={
                        button.variant === "secondary"
                          ? "bg-blue-500 hover:bg-blue-600 text-white border-0 transition-colors"
                          : "text-blue-400 hover:text-purple-400 transition-colors group"
                      }
                    >
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  src={image.src}
                  className="w-full object-cover shadow-[0_0_30px_0px_rgba(59,130,246,0.2)] rounded-xl"
                  alt={image.alt || ""}
                  width={2000}
                  height={2000}
                />
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export const HomePageLayout22Defaults: HomePageLayout22Props = {
  icon: {
    src: HomePageLayoutABC_Block_Black.src,
    alt: "ABC block icon",
  },
  heading: "Empowering Underprivileged Youth Through Education and Opportunity",
  description:
    "Our organization was founded with the mission to provide underprivileged youth with access to quality education and opportunities for a brighter future. We believe that every child deserves a chance to succeed and thrive, regardless of their background or circumstances.",
  buttons: [
    {
      title: "Learn More",
      variant: "secondary",
    },
    {
      title: "Sign Up",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight className="size-6" />,
    },
  ],
  image: {
    src: HomePageLayout22Image.src,
    alt: "Supporting our organization creates a brighter future for underprivileged youth.",
  },
};
