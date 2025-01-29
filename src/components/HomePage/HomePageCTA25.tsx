"use client";

import { Button, ButtonProps } from "@relume_io/relume-ui";
import { cx } from "class-variance-authority";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type HomePageCTA25Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HomePageCTA25 = (props: HomePageCTA25Props) => {
  const { heading, description, buttons } = {
    ...HomePageCTA25Defaults,
  } as Props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5, margin: "-100px" });

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-gray-950 via-black to-gray-900"
      >
        <div className="container max-w-3xl text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl tracking-tighter">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Empowering
              </span>{" "}
              <span className="text-white">Underprivileged Youth Through</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="mb-8 md:text-lg text-white/80 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  className={cx(
                    "transition-all duration-300",
                    button.variant === "secondary-alt"
                      ? "bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-lg shadow-blue-500/20"
                  )}
                  onClick={() =>
                    (window.location.href = "#give-lively-widget-section")
                  }
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export const HomePageCTA25Defaults: HomePageCTA25Props = {
  heading: "Empowering Underprivileged Youth Through Education",
  description:
    "Join us in making a difference in the lives of underprivileged youth. Your support can help create opportunities and transform futures.",
  buttons: [
    { title: "Donate Now", variant: "primary" },
    { title: "Learn More", variant: "secondary-alt" },
  ],
};
