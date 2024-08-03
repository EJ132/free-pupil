"use client";

import { Button, ButtonProps } from "@relume_io/relume-ui";
import { cx } from "class-variance-authority";

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
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-neutral-100">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-black tracking-tighter">
          {heading}
        </h2>
        <p className="md:text-md text-black">{description}</p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button
              key={index}
              {...button}
              className={cx(
                button.variant === "secondary-alt" &&
                  "bg-transparent border-black text-black",
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
        </div>
      </div>
    </section>
  );
};

export const HomePageCTA25Defaults: HomePageCTA25Props = {
  heading: "Empowering Underprivileged Youth Through Education",
  description:
    "Join us in making a difference in the lives of underprivileged youth.",
  buttons: [
    { title: "Donate" },
    { title: "Learn More", variant: "secondary-alt" },
  ],
};
